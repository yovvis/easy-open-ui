/* eslint-disable */
import request from "@/utils/request"

/** addUserAnswer POST /api/app/userAnswer/add */
export async function addUserAnswerUsingPost(
    body: API.UserAnswerAddRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseLong_>("/api/app/userAnswer/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** deleteUserAnswer POST /api/app/userAnswer/delete */
export async function deleteUserAnswerUsingPost(
    body: API.DeleteRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/userAnswer/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** editUserAnswer POST /api/app/userAnswer/edit */
export async function editUserAnswerUsingPost(
    body: API.UserAnswerEditRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/userAnswer/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** getUserAnswerVOById GET /api/app/userAnswer/get/vo */
export async function getUserAnswerVoByIdUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getUserAnswerVOByIdUsingGETParams,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseUserAnswerVO_>(
        "/api/app/userAnswer/get/vo",
        {
            method: "GET",
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** listUserAnswerByPage POST /api/app/userAnswer/list/page */
export async function listUserAnswerByPageUsingPost(
    body: API.UserAnswerQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageUserAnswer_>(
        "/api/app/userAnswer/list/page",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: body,
            ...(options || {})
        }
    )
}

/** listUserAnswerVOByPage POST /api/app/userAnswer/list/page/vo */
export async function listUserAnswerVoByPageUsingPost(
    body: API.UserAnswerQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageUserAnswerVO_>(
        "/api/app/userAnswer/list/page/vo",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: body,
            ...(options || {})
        }
    )
}

/** listMyUserAnswerVOByPage POST /api/app/userAnswer/my/list/page/vo */
export async function listMyUserAnswerVoByPageUsingPost(
    body: API.UserAnswerQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageUserAnswerVO_>(
        "/api/app/userAnswer/my/list/page/vo",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: body,
            ...(options || {})
        }
    )
}

/** updateUserAnswer POST /api/app/userAnswer/update */
export async function updateUserAnswerUsingPost(
    body: API.UserAnswerUpdateRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/userAnswer/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}
