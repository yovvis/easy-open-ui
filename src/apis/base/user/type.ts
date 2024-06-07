export type MethodOption = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS"

export type OptionParams<P> = {
    url: string
    method: MethodOption | Lowercase<MethodOption>
    headers?: Record<string, string>
    data?: P
    params?: P
}

export interface UserRequest {
    <P, R>(options: OptionParams<P>): AsyncResult<R>

    get<R>(
        url: string,
        params?: never,
        headers?: Record<string, string>
    ): AsyncResult<R>

    post<R>(
        url: string,
        data?: never,
        headers?: Record<string, string>
    ): AsyncResult<R>

    put<R>(
        url: string,
        data?: never,
        headers?: Record<string, string>
    ): AsyncResult<R>

    delete<R>(
        url: string,
        params?: never,
        headers?: Record<string, string>
    ): AsyncResult<R>
}
