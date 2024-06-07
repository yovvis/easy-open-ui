type Result<T> = {
    code: number
    data: T
    message: string
}

type AsyncResult<T> = Promise<Result<T>>
