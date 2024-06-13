import type { PageRes } from "@/type"
import type { DefineComponent } from "vue"
import type { TableColumns, TablePagination } from "./el-pro-table"

export type TableListProps<R> = {
    name: string
    page: PageRes<R>
    columns: TableColumns[]
    pagination: TablePagination
    addForm: DefineComponent
    isRefresh: boolean
}

export type TableListEmits<R> = {
    (e: "update:page", page: PageRes<R>): void
    (e: "request"): void
}
