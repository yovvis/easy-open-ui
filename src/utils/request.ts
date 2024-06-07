import axios from "axios"

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL
const BASE_TIMEOUT: number = import.meta.env.VITE_API_TIMEOUT

console.log(BASE_URL, BASE_TIMEOUT)

const request = axios.create({
    baseURL: BASE_URL,
    timeout: BASE_TIMEOUT,
    withCredentials: true
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default request
