/**
 * 登录请求类型
 */
export type LoginDTO = {
    userAccount: string
    userPassword: string
}

/**
 * 登录请求响应类型
 */
export type LoginVO = {
    saTokenInfo: {
        tokenValue: string
    }
}

/**
 * 获取用户信息类型
 */
export type GetUserInfoVO = {
    id: string
    userName: string
    userAvatar: string
    userProfile: string
    address: string
    phone: string
    email: string
    job: string
    userRole: string
    createTime: string
    updateTime: string
}
