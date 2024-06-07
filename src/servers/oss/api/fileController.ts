/* eslint-disable */
import request from "@/utils/request"

/** uploadFile POST /api/oss/upload */
export async function uploadFileUsingPost(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.uploadFileUsingPOSTParams,
    body: {},
    file?: File,
    options?: null
) {
    const formData = new FormData()

    if (file) {
        formData.append("file", file)
    }

    Object.keys(body).forEach((ele) => {
        const item = (body as never)[ele]

        if (item !== undefined && item !== null) {
            if (typeof item === "object" && !(item instanceof File)) {
                if (item instanceof Array) {
                    item.forEach((f) => formData.append(ele, f || ""))
                } else {
                    formData.append(ele, JSON.stringify(item))
                }
            } else {
                formData.append(ele, item)
            }
        }
    })

    return request<string>("/api/oss/upload", {
        method: "POST",
        params: {
            ...params
        },
        data: formData,

        requestType: "form",
        ...(options || {})
    })
}
