import request from '../request.js'
export function getUser(params) {
  return request.get('/user/list', {
    params
  })
}
export function getMenu(params) {
  return request.get('/user/list?' + params)
}
export function addUser(data) {
  return request.post('/user/add', data)
}
