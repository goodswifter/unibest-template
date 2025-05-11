/**
 * 获取安全区域信息
 */
export const useSafeArea = () => {
  // 获取安全区域信息
  const getInsets = () => {
    // 使用uni.getWindowInfo代替getSystemInfoSync
    const windowInfo = uni.getWindowInfo()
    return windowInfo.safeAreaInsets || { top: 0, bottom: 0 }
  }

  const safeAreaStyle = computed(() => {
    const safeAreaInsets = getInsets()
    return {
      paddingTop: (safeAreaInsets.top || 0) + 'rpx',
      paddingBottom: (safeAreaInsets.bottom || 0) + 'rpx',
    }
  })

  const safeAreaTopStyle = computed(() => {
    const safeAreaInsets = getInsets()
    return {
      paddingTop: (safeAreaInsets.top || 0) + 'px',
      paddingBottom: 0,
    }
  })

  const safeAreaBottomStyle = computed(() => {
    const safeAreaInsets = getInsets()
    return {
      paddingTop: 0,
      paddingBottom: (safeAreaInsets.bottom || 0) + 'px',
    }
  })

  return {
    safeAreaStyle,
    safeAreaTopStyle,
    safeAreaBottomStyle,
  }
}
