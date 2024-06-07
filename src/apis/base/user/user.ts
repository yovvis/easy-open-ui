import request from "@/utils/request"
import type { OptionParams, UserRequest } from "./type"

/**
 * 用户请求
 * @param options
 */
const userRequest = function <P, R>(options: OptionParams<P>): AsyncResult<R> {
    return request({
        ...options,
        url: "/user" + options.url
    })
} as UserRequest

userRequest.get = <R>(
    url: string,
    params?: infer P,
    headers?: Record<string, string>
) => userRequest<P, R>({ url, method: "GET", params, headers })

userRequest.post = <R>(
    url: string,
    data?: infer P,
    headers?: Record<string, string>
) => userRequest<P, R>({ url, method: "POST", data, headers })

userRequest.put = <R>(
    url: string,
    data?: infer P,
    headers?: Record<string, string>
) => userRequest<P, R>({ url, method: "PUT", data, headers })

userRequest.delete = <R>(
    url: string,
    params?: infer P,
    headers?: Record<string, string>
) => userRequest<P, R>({ url, method: "DELETE", params, headers })

export default userRequest
