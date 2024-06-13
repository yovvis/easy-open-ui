import type { TableProps } from "@/components/el-pro-table/el-pro-table"
import type { DefineComponent } from "vue"
import useModal from "@/hooks/modal/modal"
import EditForm from "./EditForm.vue"
import type { PageListUserInfoReq } from "@/apis/types/user"

export const columns: TableProps<PageListUserInfoReq>["columns"] = (
    request
) => {
    return [
        {
            title: "编号",
            dataIndex: "id"
        },
        {
            title: "昵称",
            dataIndex: "name"
        },
        {
            title: "操作",
            dataIndex: "action",
            isSearch: false,
            render({ record }) {
                const edit = () => {
                    useModal({
                        title: "编辑用户",
                        form: EditForm as DefineComponent,
                        data: record,
                        onOk: request
                    })
                }

                const del = async () => {
                    request()
                }
                return (
                    <>
                        <el-button type="primary" size="small" onClick={edit}>
                            编辑
                        </el-button>
                        <el-popconfirm content="你确定删除吗?" onOk={del}>
                            <AButton type="danger" size="small">
                                删除
                            </AButton>
                        </el-popconfirm>
                    </>
                )
            }
        }
    ]
}
