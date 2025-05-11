// 全局要用的类型放到这里
declare global {
  export interface BaseRes<T> {
    /** 状态码 */
    code: string
    /** 消息 */
    message: string
    /** 返回数据 */
    model: T
    /** 是否成功 */
    succeed: boolean
    /** 总条数 */
    total: number

    [property: string]: any
  }

  // uni.uploadFile文件上传参数
  type UniUploadFileReq = {
    file?: File
    files?: UniApp.UploadFileOptionFiles[]
    filePath?: string
    name?: string
    formData?: any
  }

  type UserModel = {
    nickname?: string
    avatar?: string
    /** 微信的 openid，非微信没有这个字段 */
    openid?: string
    token?: string
  }
}

export {} // 防止模块污染
