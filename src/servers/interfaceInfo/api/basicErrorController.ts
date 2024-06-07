/* eslint-disable */
import request from "@/utils/request"

/** error GET /api/interfaceInfo/error */
export async function errorUsingGet(options?: { [key: string]: never }) {
    return request<Record<string, never>>("/api/interfaceInfo/error", {
        method: "GET",
        ...(options || {})
    })
}

/** error PUT /api/interfaceInfo/error */
export async function errorUsingPut(options?: { [key: string]: never }) {
    return request<Record<string, never>>("/api/interfaceInfo/error", {
        method: "PUT",
        ...(options || {})
    })
}

/** error POST /api/interfaceInfo/error */
export async function errorUsingPost(options?: { [key: string]: never }) {
    return request<Record<string, never>>("/api/interfaceInfo/error", {
        method: "POST",
        ...(options || {})
    })
}

/** error DELETE /api/interfaceInfo/error */
export async function errorUsingDelete(options?: { [key: string]: never }) {
    return request<Record<string, never>>("/api/interfaceInfo/error", {
        method: "DELETE",
        ...(options || {})
    })
}

/** error PATCH /api/interfaceInfo/error */
export async function errorUsingPatch(options?: { [key: string]: never }) {
    return request<Record<string, never>>("/api/interfaceInfo/error", {
        method: "PATCH",
        ...(options || {})
    })
}
