import { routes } from '@/router/index.js'
export default {
  state: {
    permission_routes: []
  },
  mutations: {
    SET_ROUTES(state, data) {
      state.permission_routes = data
    }
  },
  actions: {
    set_routes({ commit }) {
      return new Promise((resolve) => {
        commit('SET_ROUTES', routes)
        resolve()
      })
    }
  }
}
