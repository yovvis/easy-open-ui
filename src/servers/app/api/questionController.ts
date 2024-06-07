// @ts-ignore
/* eslint-disable */
import request from "@/utils/request"

/** addQuestion POST /api/app/question/add */
export async function addQuestionUsingPost(
    body: API.QuestionAddRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseLong_>("/api/app/question/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** aiGenerateQuestion POST /api/app/question/ai_generate */
export async function aiGenerateQuestionUsingPost(
    body: API.AiGenerateQuestionRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseListQuestionContentDTO_>(
        "/api/app/question/ai_generate",
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

/** deleteQuestion POST /api/app/question/delete */
export async function deleteQuestionUsingPost(
    body: API.DeleteRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseBoolean_>("/api/app/question/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** editQuestion POST /api/app/question/edit */
export async function editQuestionUsingPost(
    body: API.QuestionEditRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseBoolean_>("/api/app/question/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}

/** getQuestionVOById GET /api/app/question/get/vo */
export async function getQuestionVoByIdUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getQuestionVOByIdUsingGETParams,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseQuestionVO_>("/api/app/question/get/vo", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** listQuestionByPage POST /api/app/question/list/page */
export async function listQuestionByPageUsingPost(
    body: API.QuestionQueryRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponsePageQuestion_>(
        "/api/app/question/list/page",
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

/** listQuestionVOByPage POST /api/app/question/list/page/vo */
export async function listQuestionVoByPageUsingPost(
    body: API.QuestionQueryRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponsePageQuestionVO_>(
        "/api/app/question/list/page/vo",
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

/** listMyQuestionVOByPage POST /api/app/question/my/list/page/vo */
export async function listMyQuestionVoByPageUsingPost(
    body: API.QuestionQueryRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponsePageQuestionVO_>(
        "/api/app/question/my/list/page/vo",
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

/** updateQuestion POST /api/app/question/update */
export async function updateQuestionUsingPost(
    body: API.QuestionUpdateRequest,
    options?: { [key: string]: any }
) {
    return request<API.BaseResponseBoolean_>("/api/app/question/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: body,
        ...(options || {})
    })
}
