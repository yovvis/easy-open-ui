declare namespace API {
    type addUserUsingPOSTParams = {
        userAccount?: string
        userName?: string
        userProfile?: string
        userRole?: string
    }

    type ApplicationContext = {
        applicationName?: string
        autowireCapableBeanFactory?: AutowireCapableBeanFactory
        beanDefinitionCount?: number
        beanDefinitionNames?: string[]
        classLoader?: ClassLoader
        displayName?: string
        environment?: Environment
        id?: string
        parent?: ApplicationContext
        parentBeanFactory?: BeanFactory
        startupDate?: number
    }

    type authGetUsingGETParams = {
        /** echostr */
        echostr?: string
        /** nonce */
        nonce?: string
        /** signature */
        signature?: string
        /** timestamp */
        timestamp?: string
    }

    type AutowireCapableBeanFactory = true

    type BaseResponseBoolean_ = {
        code?: number
        data?: boolean
        message?: string
    }

    type BaseResponseLoginUserVO_ = {
        code?: number
        data?: LoginUserVO
        message?: string
    }

    type BaseResponseLong_ = {
        code?: number
        data?: number
        message?: string
    }

    type BaseResponsePageUser_ = {
        code?: number
        data?: PageUser_
        message?: string
    }

    type BaseResponsePageUserVO_ = {
        code?: number
        data?: PageUserVO_
        message?: string
    }

    type BaseResponseQrcodeGetVO_ = {
        code?: number
        data?: QrcodeGetVO
        message?: string
    }

    type BaseResponseQrcodeInfoBO_ = {
        code?: number
        data?: QrcodeInfoBO
        message?: string
    }

    type BaseResponseTokenLoginUserVO_ = {
        code?: number
        data?: TokenLoginUserVO
        message?: string
    }

    type BaseResponseUser_ = {
        code?: number
        data?: User
        message?: string
    }

    type BaseResponseUserVO_ = {
        code?: number
        data?: UserVO
        message?: string
    }

    type BeanFactory = true

    type callBackUsingGETParams = {
        /** code */
        code: string
    }

    type ClassLoader = {
        parent?: ClassLoader
    }

    type DeleteRequest = {
        id?: number
    }

    type Environment = {
        activeProfiles?: string[]
        defaultProfiles?: string[]
    }

    type getByIdUsingGETParams = {
        /** userId */
        userId: number
    }

    type getLoginUserByTokenUsingGETParams = {
        /** token */
        token: string
    }

    type getQrcodeInfoBOUsingGETParams = {
        /** code */
        code?: string
    }

    type getUserByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type getUserVOByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type listByIdsUsingGETParams = {
        /** idList */
        idList: number[]
    }

    type LoginUserVO = {
        address?: string
        createTime?: string
        email?: string
        id?: number
        job?: string
        phone?: string
        updateTime?: string
        userAvatar?: string
        userName?: string
        userProfile?: string
        userRole?: string
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

    type PageUser_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: User[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type PageUserVO_ = {
        countId?: string
        current?: number
        maxLimit?: number
        optimizeCountSql?: boolean
        orders?: OrderItem[]
        pages?: number
        records?: UserVO[]
        searchCount?: boolean
        size?: number
        total?: number
    }

    type postUsingPOSTParams = {
        /** encrypt_type */
        encrypt_type?: string
        /** msg_signature */
        msg_signature?: string
        /** nonce */
        nonce: string
        /** openid */
        openid: string
        /** signature */
        signature: string
        /** timestamp */
        timestamp: string
    }

    type QrcodeGetVO = {
        code?: number
        url?: string
    }

    type QrcodeInfoBO = {
        status?: number
        tokenLoginUserVO?: TokenLoginUserVO
    }

    type RedirectView = {
        applicationContext?: ApplicationContext
        attributesMap?: Record<string, any>
        beanName?: string
        contentType?: string
        exposePathVariables?: boolean
        hosts?: string[]
        propagateQueryProperties?: boolean
        redirectView?: boolean
        requestContextAttribute?: string
        staticAttributes?: Record<string, any>
        url?: string
    }

    type SaTokenInfo = {
        isLogin?: boolean
        loginDevice?: string
        loginId?: Record<string, any>
        loginType?: string
        sessionTimeout?: number
        tag?: string
        tokenActiveTimeout?: number
        tokenName?: string
        tokenSessionTimeout?: number
        tokenTimeout?: number
        tokenValue?: string
    }

    type TokenLoginUserVO = {
        saTokenInfo?: SaTokenInfo
    }

    type updateUserUsingPOSTParams = {
        id?: number
        userAvatar?: string
        userName?: string
        userProfile?: string
        userRole?: string
        userStatus?: string
    }

    type User = {
        address?: string
        createTime?: string
        email?: string
        gender?: number
        id?: number
        isDelete?: number
        job?: string
        mpOpenId?: string
        phone?: string
        unionId?: string
        updateTime?: string
        userAccount?: string
        userAvatar?: string
        userName?: string
        userPassword?: string
        userProfile?: string
        userRole?: string
        userStatus?: number
    }

    type UserLoginRequest = {
        userAccount?: string
        userPassword?: string
    }

    type UserQueryRequest = {
        current?: number
        id?: number
        mpOpenId?: string
        pageSize?: number
        sortField?: string
        sortOrder?: string
        unionId?: string
        userName?: string
        userProfile?: string
        userRole?: string
    }

    type UserRegisterRequest = {
        checkPassword?: string
        userAccount?: string
        userPassword?: string
    }

    type UserUpdateMyRequest = {
        address?: string
        email?: string
        phone?: string
        userAvatar?: string
        userName?: string
        userProfile?: string
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
