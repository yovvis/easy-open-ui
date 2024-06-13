<script generic="R extends Record<string, any>" lang="ts" setup>
import useModal from "@/hooks/modal/modal"
import type { TableListEmits, TableListProps } from "./el-pro-table-list"
import { Plus } from "@element-plus/icons-vue"

const $props = withDefaults(defineProps<TableListProps<R>>(), {
    name: "element-pro-table-list",
    page: () => ({
        current: 1,
        pageSize: 10,
        total: 0,
        data: []
    }),
    columns: () => [],
    pagination: () => ({}),
    isRefresh: false
})

const $emits = defineEmits<TableListEmits<R>>()

const pageChange = (current: number) => {
    $emits("update:page", {
        ...$props.page,
        current
    })
}

const pageSizeChange = (pageSize: number) => {
    $emits("update:page", {
        ...$props.page,
        pageSize
    })
}

const openAddModal = () => {
    useModal({
        title: `新建${$props.name}`,
        form: $props.addForm,
        onOk: () => {
            // 刷新列表
            $emits("update:page", {
                ...$props.page,
                current: 1
            })
        }
    })
}

const refresh = () => {
    $emits("request")
}
</script>

<template>
    <div
        class="p-[10px] rounded-md bg-[var(--el-color-bg-2)] shadow-custom text-[var(--el-color-text-1)]"
    >
        <div class="flex items-center justify-between">
            <el-button
                v-if="!!addForm"
                class="mb-[10px]"
                type="primary"
                @click="openAddModal"
            >
                <template #icon>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </template>
                新建{{ name }}
            </el-button>
            <div v-if="isRefresh" class="tools" @click="refresh">
                <i
                    class="el-icon-refresh text-[20px] cursor-pointer hover:text-[#165dff]"
                ></i>
            </div>
        </div>
        <el-table
            :columns="columns"
            :data="page.data"
            @current-change="pageChange"
            @size-change="pageSizeChange"
        >
            <template v-for="column in columns" :key="column.dataIndex">
                <el-table-column
                    :label="column.title"
                    :prop="column.dataIndex"
                    v-bind="column"
                />
            </template>
        </el-table>
        <el-pagination
            v-if="page.total > 0"
            :current-page="page.current"
            :page-size="page.pageSize"
            :total="page.total"
            @current-change="pageChange"
            @size-change="pageSizeChange"
        />
    </div>
</template>
