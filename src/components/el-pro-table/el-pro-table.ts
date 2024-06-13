import type { PageRes } from "@/type"
import type { DefineComponent } from "vue"
import type { ElPagination } from "element-plus"

export type PageInfo = {
    current: number
    pageSize: number
}

export type Option = { label: string; value: string | number }[]

export type TableOption = {
    multiple?: boolean
    options: Option | (() => Promise<Option> | Option)
}

export type TableColumnData = {
    title: string
    dataIndex: string
    searchIndex?: string
}

export type PaginationProps = InstanceType<ElPagination>

export type TableColumns = TableColumnData & {
    type?: "input" | "select" | "number" | "date" | "radio"
    option?: TableOption
    initialValue?: string | number
    isSearch?: boolean // 是否作为搜索条件
    searchIndex?: string // 搜索索引
}

export type TablePagination = Exclude<PaginationProps, "current" | "pageSize">

export type TableProps<T> = {
    name: string
    isSearch?: boolean
    isReset?: boolean
    isRefresh?: boolean
    addForm: DefineComponent
    columns:
        | TableColumns[]
        | ((request?: (...args: any[]) => any) => TableColumns[])
    pagination?: TablePagination
    request: <R>(params: T, page: PageInfo) => Promise<PageRes<R>>
}

export type TableSlots = {
    add: DefineComponent
}
