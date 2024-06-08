import userRequest from "@/apis/base/user/user"
import type { UpdateUserInfoByMySelf } from "@/apis/types/user"

/**
 *  更新用户信息
 * @param data
 */
export const updateUserInfoByMyself = (data: UpdateUserInfoByMySelf) => {
    return userRequest.post<boolean>("/update/my", data)
}
