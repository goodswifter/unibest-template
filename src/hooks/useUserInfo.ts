import { userApi } from '@/api'

export default function useUser() {
  const userInfo = reactive({})
  const userFunction = reactive([])
  const userFunIds = reactive([])

  const load = async function () {
    return Promise.all([userApi.getUserInfo(), userApi.getUserFunction()]).then(res => {
      const [info, fun] = res

      Object.assign(userInfo, info.info)
      Object.assign(userFunction, fun.model)
      Object.assign(
        userFunIds,
        fun.model?.map(item => item.funcId),
      )

      return res
    })
  }

  /** 验证是否有菜单权限 **/
  const checkMenuAuth = function (funcId: string) {
    const hasAuth = userFunIds.includes(funcId)
    if (!hasAuth) {
      console.log('11', hasAuth, '暂无菜单权限')
      uni.showToast({
        icon: 'none',
        title: '暂无菜单权限',
      })
    }

    return hasAuth
  }

  return {
    /** 加载用户信息 **/
    load,
    /** 用户信息 **/
    userInfo,
    /** 菜单信息 **/
    userFunction,
    /** 验证是否有菜单权限 **/
    checkMenuAuth,
  }
}
