function isEmptyObject (obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    throw Error('input is not a object')
  }

  if (typeof Reflect === 'object') {
    return !Reflect.ownKeys(obj).length
  }

  if (typeof Symbol === 'function') {
    return !Object.getOwnPropertyNames(obj).length && !Object.getOwnPropertySymbols(obj).length
  }

  return !Object.keys(obj).length
}

module.exports = isEmptyObject