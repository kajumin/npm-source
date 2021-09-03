import request from '../request.js'
export function getCancel(params) {
  return request.get('http://localhost:3000/data1', {
    params,
    canCancel: true
  })
}
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
