import axios from 'axios'
import store from '@/store/index.js'
import config from './config.js'
import router from '../router/index.js'
import { Message } from 'element-ui'
import { getRedirectUrl } from './getMsg.js'
const service = axios.create({
  baseURL: config.base_url,
  // 请求超时时间
  timeout: 10000,
  retry: 5,
  retryDelay: 1000
  // params: { name: localStorage.getItem('name') } // 初始化时没有值, 就不会有值
  // params: { name: 'bang' } // 有效
})

service.interceptors.request.use(
  (config) => {
    // 这里定义一些config配置
    // console.log(config)
    // loading + 1
    // store.dispatch('SetLoading', true)
    console.log(config)
    config.params = Object.assign({}, { name: 'bang' }, config.params)
    console.log(config)
    return config
  },
  (error) => {
    // 这里处理一些请求错误的情况
    // loading 清 0
    // setTimeout(function () {
    //   store.dispatch('SetLoading', 0)
    // }, 300)

    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    // 这里定义一些config配置
    const res = response.data
    // token失效, 未登陆, 跳转到登陆页面
    if (res.code === 0 || res.code === 200) {
      return res
    }
    if (res.code === 10201) {
      store.commit('setIsFirst', true)
    }
    if (res.code === 10012 || res.code === 10008) {
      if (router.currentRoute.name !== '404') {
        router.push({ name: '404', query: { errorType: '2' } })
      }
    }
    if (res.code === 10020) {
      if (router.currentRoute.name !== 'RenewRemind') {
        router.push({ name: 'RenewRemind' })
      }
      return res
    }
    if (res.code === 10009) {
      if (router.currentRoute.name !== 'NoApp') {
        router.push({ name: 'NoApp', query: { errorType: '3' } })
      }
    }
    if (res.code === 10011 || res.code === 10005) {
      // 清除token
      localStorage.removeItem('access_token')
      // console.log(typeof getRedirectUrl)
      location.href = getRedirectUrl()
    } else {
      Message.closeAll()
      Message({
        type: 'error',
        message: res.message
      })
    }
    // 处理一些response正常放回时的逻辑
    // loading - 1
    // store.dispatch('SetLoading', false)
    // console.log(response)
    // 获取用户信息 主动报错, 方便测试
    // console.log(response)
    // if (response.key) {
    //   throw new Error('Uh-oh!')
    // }
    return res
  },
  (err) => {
    // 这里处理一些reponse出错时的逻辑
    // loading - 1
    // store.dispatch('SetLoading', false)
    const config = err.config
    console.log(config)
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err)

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(err)
    }

    // Increase the retry count
    config.__retryCount += 1

    // Create new promise to handle exponential backoff
    const backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, config.retryDelay || 1)
    })

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
      return axios(config)
    })
  }
)
export default service
