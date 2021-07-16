import config from '@/api/config.js'
import md5 from 'js-md5'
export function getDomain(href) {
  let domian
  try {
    domian = process.env.VUE_APP_HREF
      ? new URL(process.env.VUE_APP_HREF).host
      : href
        ? new URL(href).host
        : new URL(location.href).host
  } catch (err) {
    domian = null
  }
  return domian
}
export function getToken(token) {
  if (token) return token
  return localStorage.getItem('access_token')
}
export const getRedirectUrl = function() {
  const href = process.env.VUE_APP_HREF ? process.env.VUE_APP_HREF : encodeURI(location.href)
  // const href = encodeURI(location.href)
  // const href = 'http://srcm.business-management/admin/patent/patent-search-result/list?word=智能'
  // const href = 'http://srcm.business-management/admin/'
  console.log(location.href)
  const t = Date.now() % 1000000000
  const hash = md5.create()
  hash.update(config.acc_type + href + config.salt + t)
  const md5Result = hash.hex()
  console.log(config.acc_type)
  console.log(href)
  console.log(config.salt)
  console.log(t)
  console.log(md5Result)
  return encodeURI(
    config.login_url +
      '?redirect=' +
      href +
      '&acc=' +
      config.acc_type +
      '&mmdd=' +
      md5Result +
      '&t=' +
      t
  )
  // return encodeURI(
  //   'http://localhost:8082' +
  //     '?redirect=' +
  //     href +
  //     '&acc=' +
  //     config.acc_type +
  //     '&mmdd=' +
  //     md5Result +
  //     '&t=' +
  //     t
  // )
}
export const getMd5 = function(md5String) {
  const hash = md5.create()
  hash.update(md5String)
  const md5Result = hash.hex()
  return md5Result
}
