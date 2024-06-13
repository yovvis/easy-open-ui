import userRequest from "@/apis/base/user/user"
import type { AddUserInfo, PageListUserInfoReq, UpdateUserInfoByMySelf } from "@/apis/types/user"

/**
 *  更新用户信息
 * @param data
 */
export const updateUserInfoByMyself = (data: UpdateUserInfoByMySelf) => {
    return userRequest.post<boolean>("/update/my", data)
}

/**
 * 分录获取用户信息
 * @param params
 */
export const listUser = (params: PageListUserInfoReq) => {
    return userRequest.get<boolean>("/list/page", params)
}

/**
 * 新增用户信息
 * @param data
 */
export const addUser = (data: AddUserInfo) => {
    return userRequest.post<boolean>("/add", data)
}

/**
 *  更新用户信息
 * @param data
 */
export const updateUserInfo = (data: UpdateUserInfoByMySelf) => {
    return userRequest.post<boolean>("/update", data)
}
