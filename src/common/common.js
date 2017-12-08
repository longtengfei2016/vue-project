/**
 * 不设置cookieOnly参数时，优先使用localstorage存储、读取，该参数为true时只使用cookie存储、读取
 */
export const saveCookie = (name, value, cookieOnly) => {
  let Days = 30
  let exp = new Date()
  let storage = window.localStorage
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  if (storage && !cookieOnly) {
    storage.setItem(name, value)
  } else {
    document.cookie = name + '=' + encodeURI(value) + ';path=/;expires=' + exp.toGMTString()
  }
}
export const getCookie = (name, cookieOnly) => {
  let arr = []
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let storage = window.localStorage
  if (storage && !cookieOnly) {
    return storage.getItem(name)
  } else {
    if (arr === document.cookie.match(reg)) {
      return decodeURI(arr[2])
    }
  }

  return null
}
export const removeCookie = (name, cookieOnly) => {
  let exp = new Date()
  let storage = window.localStorage

  exp.setTime(exp.getTime() - 1)
  if (storage && !cookieOnly) {
    storage.removeItem(name)
  } else {
    let cval = getCookie(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
}
export const getUrlParam = function (url) {
  url = url || window.location.href
  let resultObj = {}
  let index = url.lastIndexOf('?')
  let cutUrl = url.substring(index + 1)
  let cutUrlArr = cutUrl.split('&')
  for (var i in cutUrlArr) {
    let key = cutUrlArr[i].split('=')[0]
    let value = cutUrlArr[i].split('=')[1]
    resultObj[key] = value
  }
  return resultObj
}
