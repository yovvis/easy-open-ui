// @ts-ignore
/* eslint-disable */
import request from "@/utils/request"

/** authGet GET /api/user/wx/portal/public */
export async function authGetUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.authGetUsingGETParams,
    options?: { [key: string]: any }
) {
    return request<string>("/api/user/wx/portal/public", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** post POST /api/user/wx/portal/public */
export async function postUsingPost(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.postUsingPOSTParams,
    body: string,
    options?: { [key: string]: any }
) {
    return request<string>("/api/user/wx/portal/public", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        params: {
            ...params
        },
        data: body,
        ...(options || {})
    })
}

/** callBack GET /api/user/wx/portal/public/callBack */
export async function callBackUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.callBackUsingGETParams,
    options?: { [key: string]: any }
) {
    return request<API.RedirectView>("/api/user/wx/portal/public/callBack", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}
