// @ts-ignore
/* eslint-disable */
import request from "@/utils/request"

/** error GET /api/app/error */
export async function errorUsingGet(options?: { [key: string]: any }) {
    return request<Record<string, any>>("/api/app/error", {
        method: "GET",
        ...(options || {})
    })
}

/** error PUT /api/app/error */
export async function errorUsingPut(options?: { [key: string]: any }) {
    return request<Record<string, any>>("/api/app/error", {
        method: "PUT",
        ...(options || {})
    })
}

/** error POST /api/app/error */
export async function errorUsingPost(options?: { [key: string]: any }) {
    return request<Record<string, any>>("/api/app/error", {
        method: "POST",
        ...(options || {})
    })
}

/** error DELETE /api/app/error */
export async function errorUsingDelete(options?: { [key: string]: any }) {
    return request<Record<string, any>>("/api/app/error", {
        method: "DELETE",
        ...(options || {})
    })
}

/** error PATCH /api/app/error */
export async function errorUsingPatch(options?: { [key: string]: any }) {
    return request<Record<string, any>>("/api/app/error", {
        method: "PATCH",
        ...(options || {})
    })
}
