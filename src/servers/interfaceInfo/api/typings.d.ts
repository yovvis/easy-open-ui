declare namespace API {
    type BaseResponseBoolean_ = {
        code?: number
        data?: boolean
        message?: string
    }

    type BaseResponseInterfaceInfoVO_ = {
        code?: number
        data?: InterfaceInfoVO
        message?: string
    }

    type BaseResponseLong_ = {
        code?: number
        data?: number
        message?: string
    }

    type BaseResponsePageInterfaceInfo_ = {
        code?: number
        data?: PageInterfaceInfo_
        message?: string
    }

    type BaseResponsePageInterfaceInfoVO_ = {
        code?: number
        data?: PageInterfaceInfoVO_
        message?: string
    }

    type DeleteRequest = {
        id?: number
    }

    type getInterfaceInfoVOByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type InterfaceInfo = {
        createTime?: string
        description?: string
        id?: number
        isDeleted?: number
        method?: string
        name?: string
        requestHeader?: string
        responseHeader?: string
        status?: number
        updateTime?: string
        url?: string
        userId?: number
    }

    type InterfaceInfoAddRequest = {
        description?: string
        method?: string
        name?: string
        requestHeader?: string
        responseHeader?: string
        url?: string
    }

    type InterfaceInfoEditRequest = {
        description?: string
        id?: number
        method?: string
        name?: string
        requestHeader?: string
        responseHeader?: string
        status?: number
        url?: string
    }

    type InterfaceInfoQueryRequest = {
        current?: number
        description?: string
        id?: number
        method?: string
        name?: string
        pageSize?: number
        requestHeader?: string
        responseHeader?: string
        sortField?: string
        sortOrder?: string
        status?: number
        url?: string
        userId?: number
    }

    type InterfaceInfoUpdateRequest = {
        description?: string
        id?: number
        method?: string
        name?: string
        requestHeader?: string
        responseHeader?: string
        status?: number
        url?: string
    }

    type InterfaceInfoVO = {
        description?: string
        id?: number
        method?: string
        name?: string
        requestHeader?: string
        responseHeader?: string
        status?: number
        url?: string
        userId?: number
    }

    type ModelAndView = {
        empty?: boolean
        model?: Record<string, any>
        modelMap?: Record<string, any>
        reference?: boolean
        status?:
            | "CONTINUE"
            | "SWITCHING_PROTOCOLS"
            | "PROCESSING"
            | "CHECKPOINT"
            | "OK"
            | "CREATED"
            | "ACCEPTED"
            | "NON_AUTHORITATIVE_INFORMATION"
            | "NO_CONTENT"
            | "RESET_CONTENT"
            | "PARTIAL_CONTENT"
            | "MULTI_STATUS"
            | "ALREADY_REPORTED"
            | "IM_USED"
            | "MULTIPLE_CHOICES"
            | "MOVED_PERMANENTLY"
            | "FOUND"
            | "MOVED_TEMPORARILY"
            | "SEE_OTHER"
            | "NOT_MODIFIED"
            | "USE_PROXY"
            | "TEMPORARY_REDIRECT"
            | "PERMANENT_REDIRECT"
            | "BAD_REQUEST"
            | "UNAUTHORIZED"
            | "PAYMENT_REQUIRED"
            | "FORBIDDEN"
            | "NOT_FOUND"
            | "METHOD_NOT_ALLOWED"
            | "NOT_ACCEPTABLE"
            | "PROXY_AUTHENTICATION_REQUIRED"
            | "REQUEST_TIMEOUT"
            | "CONFLICT"
            | "GONE"
            | "LENGTH_REQUIRED"
            | "PRECONDITION_FAILED"
            | "PAYLOAD_TOO_LARGE"
            | "REQUEST_ENTITY_TOO_LARGE"
            | "URI_TOO_LONG"
            | "REQUEST_URI_TOO_LONG"
            | "UNSUPPORTED_MEDIA_TYPE"
            | "REQUESTED_RANGE_NOT_SATISFIABLE"
            | "EXPECTATION_FAILED"
            | "I_AM_A_TEAPOT"
            | "INSUFFICIENT_SPACE_ON_RESOURCE"
            | "METHOD_FAILURE"
            | "DESTINATION_LOCKED"
            | "UNPROCESSABLE_ENTITY"
            | "LOCKED"
            | "FAILED_DEPENDENCY"
            | "TOO_EARLY"
            | "UPGRADE_REQUIRED"
            | "PRECONDITION_REQUIRED"
            | "TOO_MANY_REQUESTS"
            | "REQUEST_HEADER_FIELDS_TOO_LARGE"
            | "UNAVAILABLE_FOR_LEGAL_REASONS"
            | "INTERNAL_SERVER_ERROR"
            | "NOT_IMPLEMENTED"
            | "BAD_GATEWAY"
            | "SERVICE_UNAVAILABLE"
            | "GATEWAY_TIMEOUT"
            | "HTTP_VERSION_NOT_SUPPORTED"
            | "VARIANT_ALSO_NEGOTIATES"
            | "INSUFFICIENT_STORAGE"
            | "LOOP_DETECTED"
            | "BANDWIDTH_LIMIT_EXCEEDED"
            | "NOT_EXTENDED"
            | "NETWORK_AUTHENTICATION_REQUIRED"
        view?: View
        viewName?: string
    }

    type OrderItem = {
        asc?: boolean
        column?: string
    }

    type PageInterfaceInfo_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: InterfaceInfo[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageInterfaceInfoVO_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: InterfaceInfoVO[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type View = {
        contentType?: string
    }
}
