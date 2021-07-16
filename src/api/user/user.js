import request from '../request.js'
export const getUser = function(params) {
  return request.get('/user/list', {
    params
  })
}
