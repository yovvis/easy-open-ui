declare namespace API {
    type AiGenerateQuestionRequest = {
        appId?: number
        optionNumber?: number
        questionNumber?: number
    }

    type App = {
        appDesc?: string
        appIcon?: string
        appName?: string
        appType?: number
        createTime?: string
        id?: number
        isDelete?: number
        reviewMessage?: string
        reviewStatus?: number
        reviewTime?: string
        reviewerId?: number
        scoringStrategy?: number
        updateTime?: string
        userId?: number
    }

    type AppAddRequest = {
        appDesc?: string
        appIcon?: string
        appName?: string
        appType?: number
        scoringStrategy?: number
    }

    type AppEditRequest = {
        appDesc?: string
        appIcon?: string
        appName?: string
        appType?: number
        id?: number
        notId?: number
        reviewMessage?: string
        reviewStatus?: number
        reviewerId?: number
        scoringStrategy?: number
        searchText?: string
        userId?: number
    }

    type AppQueryRequest = {
        appDesc?: string
        appIcon?: string
        appName?: string
        appType?: number
        current?: number
        id?: number
        notId?: number
        pageSize?: number
        reviewMessage?: string
        reviewStatus?: number
        reviewerId?: number
        scoringStrategy?: number
        searchText?: string
        sortField?: string
        sortOrder?: string
        userId?: number
    }

    type AppUpdateRequest = {
        appDesc?: string
        appIcon?: string
        appName?: string
        appType?: number
        id?: number
        reviewMessage?: string
        reviewStatus?: number
        reviewTime?: string
        reviewerId?: number
        scoringStrategy?: number
    }

    type AppVO = {
        appDesc?: string
        appIcon?: string
        appName?: string
        appType?: number
        createTime?: string
        id?: number
        reviewMessage?: string
        reviewStatus?: number
        reviewTime?: string
        reviewerId?: number
        scoringStrategy?: number
        updateTime?: string
        user?: UserVO
        userId?: number
    }

    type BaseResponseAppVO_ = {
        code?: number
        data?: AppVO
        message?: string
    }

    type BaseResponseBoolean_ = {
        code?: number
        data?: boolean
        message?: string
    }

    type BaseResponseListQuestionContentDTO_ = {
        code?: number
        data?: QuestionContentDTO[]
        message?: string
    }

    type BaseResponseLong_ = {
        code?: number
        data?: number
        message?: string
    }

    type BaseResponsePageApp_ = {
        code?: number
        data?: PageApp_
        message?: string
    }

    type BaseResponsePageAppVO_ = {
        code?: number
        data?: PageAppVO_
        message?: string
    }

    type BaseResponsePageQuestion_ = {
        code?: number
        data?: PageQuestion_
        message?: string
    }

    type BaseResponsePageQuestionVO_ = {
        code?: number
        data?: PageQuestionVO_
        message?: string
    }

    type BaseResponsePageScoringResult_ = {
        code?: number
        data?: PageScoringResult_
        message?: string
    }

    type BaseResponsePageScoringResultVO_ = {
        code?: number
        data?: PageScoringResultVO_
        message?: string
    }

    type BaseResponsePageUserAnswer_ = {
        code?: number
        data?: PageUserAnswer_
        message?: string
    }

    type BaseResponsePageUserAnswerVO_ = {
        code?: number
        data?: PageUserAnswerVO_
        message?: string
    }

    type BaseResponseQuestionVO_ = {
        code?: number
        data?: QuestionVO
        message?: string
    }

    type BaseResponseScoringResultVO_ = {
        code?: number
        data?: ScoringResultVO
        message?: string
    }

    type BaseResponseUserAnswerVO_ = {
        code?: number
        data?: UserAnswerVO
        message?: string
    }

    type DeleteRequest = {
        id?: number
    }

    type getAppVOByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type getQuestionVOByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type getScoringResultVOByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type getUserAnswerVOByIdUsingGETParams = {
        /** id */
        id?: number
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

    type Option = {
        key?: string
        result?: string
        score?: number
        value?: string
    }

    type OrderItem = {
        asc?: boolean
        column?: string
    }

    type PageApp_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: App[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageAppVO_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: AppVO[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageQuestion_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: Question[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageQuestionVO_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: QuestionVO[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageScoringResult_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: ScoringResult[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageScoringResultVO_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: ScoringResultVO[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageUserAnswer_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: UserAnswer[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageUserAnswerVO_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: UserAnswerVO[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type Question = {
        appId?: number
        createTime?: string
        id?: number
        isDelete?: number
        questionContent?: string
        updateTime?: string
        userId?: number
    }

    type QuestionAddRequest = {
        appId?: number
        questionContent?: QuestionContentDTO[]
    }

    type QuestionContentDTO = {
        options?: Option[]
        title?: string
    }

    type QuestionEditRequest = {
        id?: number
        questionContent?: QuestionContentDTO[]
    }

    type QuestionQueryRequest = {
        appId?: number
        current?: number
        id?: number
        notId?: number
        pageSize?: number
        questionContent?: string
        sortField?: string
        sortOrder?: string
        userId?: number
    }

    type QuestionUpdateRequest = {
        id?: number
        questionContent?: QuestionContentDTO[]
    }

    type QuestionVO = {
        appId?: number
        createTime?: string
        id?: number
        questionContent?: QuestionContentDTO[]
        updateTime?: string
        user?: UserVO
        userId?: number
    }

    type ReviewRequest = {
        id?: number
        reviewMessage?: string
        reviewStatus?: number
    }

    type ScoringResult = {
        appId?: number
        createTime?: string
        id?: number
        isDelete?: number
        resultDesc?: string
        resultName?: string
        resultPicture?: string
        resultProp?: string
        resultScoreRange?: number
        updateTime?: string
        userId?: number
    }

    type ScoringResultAddRequest = {
        appId?: number
        resultDesc?: string
        resultName?: string
        resultPicture?: string
        resultProp?: string[]
        resultScoreRange?: number
    }

    type ScoringResultEditRequest = {
        id?: number
        resultDesc?: string
        resultName?: string
        resultPicture?: string
        resultProp?: string[]
        resultScoreRange?: number
    }

    type ScoringResultQueryRequest = {
        appId?: number
        current?: number
        id?: number
        notId?: number
        pageSize?: number
        resultDesc?: string
        resultName?: string
        resultPicture?: string
        resultProp?: string
        resultScoreRange?: number
        searchText?: string
        sortField?: string
        sortOrder?: string
        userId?: number
    }

    type ScoringResultUpdateRequest = {
        id?: number
        resultDesc?: string
        resultName?: string
        resultPicture?: string
        resultProp?: string[]
        resultScoreRange?: number
    }

    type ScoringResultVO = {
        appId?: number
        createTime?: string
        id?: number
        resultDesc?: string
        resultName?: string
        resultPicture?: string
        resultProp?: string[]
        resultScoreRange?: number
        updateTime?: string
        user?: UserVO
        userId?: number
    }

    type UserAnswer = {
        appId?: number
        appType?: number
        choices?: string
        createTime?: string
        id?: number
        isDelete?: number
        resultDesc?: string
        resultId?: number
        resultName?: string
        resultPicture?: string
        resultScore?: number
        scoringStrategy?: number
        updateTime?: string
        userId?: number
    }

    type UserAnswerAddRequest = {
        appId?: number
        choices?: string[]
    }

    type UserAnswerEditRequest = {
        appId?: number
        choices?: string[]
        id?: number
    }

    type UserAnswerQueryRequest = {
        appId?: number
        appType?: number
        choices?: string
        current?: number
        id?: number
        notId?: number
        pageSize?: number
        resultDesc?: string
        resultId?: number
        resultName?: string
        resultPicture?: string
        resultScore?: number
        scoringStrategy?: number
        searchText?: string
        sortField?: string
        sortOrder?: string
        userId?: number
    }

    type UserAnswerUpdateRequest = {
        appId?: number
        choices?: string[]
        id?: number
    }

    type UserAnswerVO = {
        appId?: number
        appType?: number
        choices?: string[]
        createTime?: string
        id?: number
        resultDesc?: string
        resultId?: number
        resultName?: string
        resultPicture?: string
        resultScore?: number
        scoringStrategy?: number
        updateTime?: string
        user?: UserVO
        userId?: number
    }

    type UserVO = {
        address?: string
        createTime?: string
        email?: string
        id?: number
        job?: string
        phone?: string
        userAvatar?: string
        userName?: string
        userProfile?: string
        userRole?: string
    }

    type View = {
        contentType?: string
    }
}
