class LocalCache {
  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key) {
    // value 的值是之前 JSON.stringify() 转换之后的字符串，转换前的 value 有可能是对象，需要 JSON.parse() 转换回对象
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
