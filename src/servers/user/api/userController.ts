/* eslint-disable */
import request from "@/utils/request"

/** addUser POST /api/user/add */
export async function addUserUsingPost(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.addUserUsingPOSTParams,
    body: string,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseLong_>("/api/user/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream"
        },
        params: {
            ...params
        },
        data: body,
        ...(options || {})
    })
}

/** deleteUser POST /api/user/delete */
export async function deleteUserUsingPost(
    body: API.DeleteRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/user/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** getUserById GET /api/user/get */
export async function getUserByIdUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserByIdUsingGETParams,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseUser_>("/api/user/get", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** getLoginUser GET /api/user/get/login */
export async function getLoginUserUsingGet(options?: { [key: string]: never }) {
    return request<API.BaseResponseLoginUserVO_>("/api/user/get/login", {
        method: "GET",
        ...(options || {})
    })
}

/** getLoginUserByToken GET /api/user/get/login/token */
export async function getLoginUserByTokenUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getLoginUserByTokenUsingGETParams,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseLoginUserVO_>("/api/user/get/login/token", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** getUserVOById GET /api/user/get/vo */
export async function getUserVoByIdUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserVOByIdUsingGETParams,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseUserVO_>("/api/user/get/vo", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** listUserByPage POST /api/user/list/page */
export async function listUserByPageUsingPost(
    body: API.UserQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageUser_>("/api/user/list/page", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** listUserVOByPage POST /api/user/list/page/vo */
export async function listUserVoByPageUsingPost(
    body: API.UserQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageUserVO_>("/api/user/list/page/vo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** userLogin POST /api/user/login */
export async function userLoginUsingPost(
    body: API.UserLoginRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseTokenLoginUserVO_>("/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** userLogout POST /api/user/logout */
export async function userLogoutUsingPost(options?: { [key: string]: never }) {
    return request<API.BaseResponseBoolean_>("/api/user/logout", {
        method: "POST",
        ...(options || {})
    })
}

/** userRegister POST /api/user/register */
export async function userRegisterUsingPost(
    body: API.UserRegisterRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseLong_>("/api/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** updateUser POST /api/user/update */
export async function updateUserUsingPost(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.updateUserUsingPOSTParams,
    body: string,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/user/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream"
        },
        params: {
            ...params
        },
        data: body,
        ...(options || {})
    })
}

/** updateMyUser POST /api/user/update/my */
export async function updateMyUserUsingPost(
    body: API.UserUpdateMyRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/user/update/my", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}
