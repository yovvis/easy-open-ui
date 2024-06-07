/* eslint-disable */
import request from "@/utils/request"

/** addScoringResult POST /api/app/scoringResult/add */
export async function addScoringResultUsingPost(
    body: API.ScoringResultAddRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseLong_>("/api/app/scoringResult/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** deleteScoringResult POST /api/app/scoringResult/delete */
export async function deleteScoringResultUsingPost(
    body: API.DeleteRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseBoolean_>("/api/app/scoringResult/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** editScoringResult POST /api/app/scoringResult/edit */
export async function editScoringResultUsingPost(
    body: API.ScoringResultEditRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseBoolean_>("/api/app/scoringResult/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** getScoringResultVOById GET /api/app/scoringResult/get/vo */
export async function getScoringResultVoByIdUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getScoringResultVOByIdUsingGETParams,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseScoringResultVO_>(
        "/api/app/scoringResult/get/vo",
        {
            method: "GET",
            params: {
                ...params
            },
            ...(options || {})
        }
    )
}

/** listScoringResultByPage POST /api/app/scoringResult/list/page */
export async function listScoringResultByPageUsingPost(
    body: API.ScoringResultQueryRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponsePageScoringResult_>(
        "/api/app/scoringResult/list/page",
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

/** listScoringResultVOByPage POST /api/app/scoringResult/list/page/vo */
export async function listScoringResultVoByPageUsingPost(
    body: API.ScoringResultQueryRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponsePageScoringResultVO_>(
        "/api/app/scoringResult/list/page/vo",
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

/** listMyScoringResultVOByPage POST /api/app/scoringResult/my/list/page/vo */
export async function listMyScoringResultVoByPageUsingPost(
    body: API.ScoringResultQueryRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponsePageScoringResultVO_>(
        "/api/app/scoringResult/my/list/page/vo",
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

/** updateScoringResult POST /api/app/scoringResult/update */
export async function updateScoringResultUsingPost(
    body: API.ScoringResultUpdateRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseBoolean_>("/api/app/scoringResult/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}
