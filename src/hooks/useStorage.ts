export default function useStorage() {
  // key
  const storageKey = 'BUYER_APP'

  const get = function (key: string) {
    const storage = uni.getStorageSync(storageKey) || {}
    return storage[key] || ''
  }

  const set = function (key: string, value: any) {
    const storage = uni.getStorageSync(storageKey) || {}
    storage[key] = value
    uni.setStorageSync(storageKey, storage)
  }

  const clear = function () {
    uni.removeStorageSync(storageKey)
  }

  const remove = function (key: string) {
    const storage = uni.getStorageSync(storageKey) || {}
    delete storage[key]
    uni.setStorageSync(storageKey, storage)
  }

  return {
    get,
    set,
    clear,
    remove,
  }
}
