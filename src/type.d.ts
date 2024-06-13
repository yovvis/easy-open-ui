type Result<T> = {
    code: number
    message: string
    data: T
}

/**
 * 分页请求数据
 */
type PageReq<T> = {
    current: number
    pageSize: number
} & Partial<T>

/**
 * 分页响应数据
 */
export type PageRes<T> = {
    current: number
    pageSize: number
    total: number
    data: T[]
}

type AsyncResult<T> = Promise<Result<T>>

type AsyncPageResult<T> = Promise<Result<PageRes<T>>>

type FilterSort<T> = {
    range: {
        min: T
        max: T
    }
    sort: SortEnum | undefined
}

type EditConfigProps = {
    id: string | null
    isOpen: boolean
    isLoading: boolean
}
