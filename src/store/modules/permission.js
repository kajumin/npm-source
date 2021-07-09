import { asyncRoutes, constantRoutes } from '@/router'
import { getAuthMenu } from '@/api/menu.js'
import Layout from '@/layout'

/**
 * Use meta.role to determine if the current user has permission
 * 使用 meta.role 确定当前用户是否具有权限
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 后台查询的菜单数据拼接成路由格式的数据
 * @param routes
 * @param data
 * @param is_children
 */

export function generaMenu(routes, data, is_children = false) {
  data.forEach((item) => {
    const menu = {
      path: item.path,
      component:
        item.component === '#'
          ? Layout
          : (resolve) => require([`@/views${item.component}`], resolve),
      name: item.name,
      meta: item.meta
    }
    if (is_children === false) {
      menu.children = []
      menu.alwaysShow = item.alwaysShow
      menu.redirect = item.redirect
    }
    if (item.children && is_children === false) {
      generaMenu(menu.children, item.children, true)
    }
    console.log(menu)
    routes.push(menu)
  })
}

/**
 * Filter asynchronous routing tables by recursion
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}
const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise((resolve) => {
      const loadMenuData = []
      // 先查询后台返回左侧菜单数据并将数据添加到路由
      getAuthMenu()
        .then((response) => {
          let data = response
          if (!response.result) {
            alert(JSON.stringify(response.message))
          } else {
            data = response.data
            Object.assign(loadMenuData, data)
            const tempAsyncRoutes = Object.assign([], asyncRoutes)
            generaMenu(tempAsyncRoutes, loadMenuData)
            let accessedRoutes
            if (roles.includes('admin')) {
              accessedRoutes = tempAsyncRoutes || []
            } else {
              accessedRoutes = filterAsyncRoutes(tempAsyncRoutes, roles)
            }
            commit('SET_ROUTES', accessedRoutes)
            resolve(accessedRoutes)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
