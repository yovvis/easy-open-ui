/* eslint-disable */
import request from "@/utils/request"

/** error GET /api/oss/error */
export async function errorUsingGet(options?: null) {
    return request<Record<string, any>>("/api/oss/error", {
        method: "GET",
        ...(options || {})
    })
}

/** error PUT /api/oss/error */
export async function errorUsingPut(options?: null) {
    return request<Record<string, any>>("/api/oss/error", {
        method: "PUT",
        ...(options || {})
    })
}

/** error POST /api/oss/error */
export async function errorUsingPost(options?: null) {
    return request<Record<string, any>>("/api/oss/error", {
        method: "POST",
        ...(options || {})
    })
}

/** error DELETE /api/oss/error */
export async function errorUsingDelete(options?: null) {
    return request<Record<string, any>>("/api/oss/error", {
        method: "DELETE",
        ...(options || {})
    })
}

/** error PATCH /api/oss/error */
export async function errorUsingPatch(options?: null) {
    return request<Record<string, any>>("/api/oss/error", {
        method: "PATCH",
        ...(options || {})
    })
}
