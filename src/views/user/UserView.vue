<script lang="ts" setup>
import { DefineComponent } from "vue"
import { columns } from "./components/user.config"
import AddForm from "./components/AddForm.vue"
import ElProTable from "@/components/el-pro-table/ElProTable.vue"
import type { AddUserInfo } from "@/apis/types/user"
import { listUser } from "@/apis/user"

async function request(
    params: AddUserInfo,
    page: {
        current: number
        pageSize: number
    }
) {
    const result = await listUser({
        ...page,
        ...params
    })
    return result.data
}
</script>

<template>
    <ElProTable
        :add-form="AddForm as DefineComponent"
        :columns="columns"
        :request="request"
        name="内部人员"
    />
</template>

<style scoped></style>
