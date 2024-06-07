import type { GetUserInfoVO, LoginDTO, LoginVO } from "@/apis/types/login"
import userRequest from "@/apis/base/user/user"

/**
 * 登录接口
 * @param data 登录信息
 */
export function login(data: LoginDTO) {
    return userRequest.post<LoginVO>("/login", data)
}

/**
 * 获取当前登录用户接口
 */
export function getLogin(data: LoginDTO) {
    return userRequest.get<GetUserInfoVO>("/get/login", data)
}
