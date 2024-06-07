/* eslint-disable */
import request from "@/utils/request"

/** addApp POST /api/app/app/add */
export async function addAppUsingPost(
    body: API.AppAddRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseLong_>("/api/app/app/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** deleteApp POST /api/app/app/delete */
export async function deleteAppUsingPost(
    body: API.DeleteRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/app/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** editApp POST /api/app/app/edit */
export async function editAppUsingPost(
    body: API.AppEditRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/app/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** getAppVOById GET /api/app/app/get/vo */
export async function getAppVoByIdUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getAppVOByIdUsingGETParams,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseAppVO_>("/api/app/app/get/vo", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** listAppByPage POST /api/app/app/list/page */
export async function listAppByPageUsingPost(
    body: API.AppQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageApp_>("/api/app/app/list/page", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** listAppVOByPage POST /api/app/app/list/page/vo */
export async function listAppVoByPageUsingPost(
    body: API.AppQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageAppVO_>("/api/app/app/list/page/vo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** listMyAppVOByPage POST /api/app/app/my/list/page/vo */
export async function listMyAppVoByPageUsingPost(
    body: API.AppQueryRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponsePageAppVO_>("/api/app/app/my/list/page/vo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** doAppReview POST /api/app/app/review */
export async function doAppReviewUsingPost(
    body: API.ReviewRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/app/review", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** updateApp POST /api/app/app/update */
export async function updateAppUsingPost(
    body: API.AppUpdateRequest,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseBoolean_>("/api/app/app/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}
