import type { RegisterDTO } from "@/apis/types/register"
import request from "@/utils/request"

/**
 * 注册接口
 * @param data 注册信息
 */
export const register = (data: RegisterDTO): AsyncResult<string> => {
    return request({
        url: "/user/register",
        method: "POST",
        data
    })
}
