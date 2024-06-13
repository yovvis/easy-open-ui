import type { PageReq, PageRes } from "@/type"

/**
 * 添加用户信息
 */
export type AddUserInfo = {
    id: string
    userName: string
    userAccount: string
    userProfile: string
    userAvatar: File | null
    userRole: string
}

/**
 * 分页获取用户信息列表参数
 */
export type PageListUserInfoReq = PageReq<{
    sortField: string
    id: string
    unionId: string
    mpOpenId: string
    userName: string
    userProfile: string
    userRole: string
}>

/**
 * 更新用户信息
 */
export type UpdateUserInfo = {
    id: string
    userName: string
    userAvatar: string
    newAvatar: File | null
    userProfile: string
    phone: string
    email: string
    address: string
    userStatus: number
}
export type PageListUserInfoRes = PageRes<{
    id: string
    userAccount: string
    userPassword: string
    gender: number
    job: string
    address: string
    email: string
    phone: string
    unionId: string
    mpOpenId: string
    userName: string
    userAvatar: string
    userProfile: string
    userRole: string
    createTime: string
    updateTime: string
    userStatus: number
}>
