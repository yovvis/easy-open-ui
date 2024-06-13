// 判断是否是函数
export function isFunction(fn: any) {
    if (typeof fn !== "function") {
        return false
    }
    return true
}

// 判断函数是否为异步函数
export function isAsyncFunction(fn: any) {
    // 判断是否是函数
    if (isFunction(fn)) {
        return false
    }
    return fn.constructor.name === "AsyncFunction"
}
