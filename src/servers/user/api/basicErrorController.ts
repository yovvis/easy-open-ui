/* eslint-disable */
import request from "@/utils/request"

/** errorHtml GET /api/user/error */
export async function errorHtmlUsingGet(options?: { [key: string]: any }) {
    return request<API.ModelAndView>("/api/user/error", {
        method: "GET",
        ...(options || {})
    })
}

/** errorHtml PUT /api/user/error */
export async function errorHtmlUsingPut(options?: { [key: string]: any }) {
    return request<API.ModelAndView>("/api/user/error", {
        method: "PUT",
        ...(options || {})
    })
}

/** errorHtml POST /api/user/error */
export async function errorHtmlUsingPost(options?: { [key: string]: any }) {
    return request<API.ModelAndView>("/api/user/error", {
        method: "POST",
        ...(options || {})
    })
}

/** errorHtml DELETE /api/user/error */
export async function errorHtmlUsingDelete(options?: { [key: string]: any }) {
    return request<API.ModelAndView>("/api/user/error", {
        method: "DELETE",
        ...(options || {})
    })
}

/** errorHtml PATCH /api/user/error */
export async function errorHtmlUsingPatch(options?: { [key: string]: any }) {
    return request<API.ModelAndView>("/api/user/error", {
        method: "PATCH",
        ...(options || {})
    })
}
