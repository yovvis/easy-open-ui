/* eslint-disable */
import request from "@/utils/request"

/** getQrcodeInfoBO GET /api/user/wx/common/poll */
export async function getQrcodeInfoBoUsingGet(
    // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
    params: API.getQrcodeInfoBOUsingGETParams,
    options?: { [key: string]: never }
) {
    return request<API.BaseResponseQrcodeInfoBO_>("/api/user/wx/common/poll", {
        method: "GET",
        params: {
            ...params
        },
        ...(options || {})
    })
}

/** getQrCode GET /api/user/wx/common/qrcode */
export async function getQrCodeUsingGet(options?: { [key: string]: never }) {
    return request<API.BaseResponseQrcodeGetVO_>("/api/user/wx/common/qrcode", {
        method: "GET",
        ...(options || {})
    })
}
