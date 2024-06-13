<script
    generic="T extends Record<string, any>, R extends Record<string, any>"
    lang="ts"
    setup
>
import type { UnwrapRef } from "vue"
import { computed, ref, watch, withDefaults } from "vue"
import type { Option, TableColumns, TableProps } from "./el-pro-table"
import ElementProTableList from "./ElProTableList.vue"
import { isAsyncFunction, isFunction } from "./utils/function"
import type { PageRes } from "@/type"

const $props = withDefaults(defineProps<TableProps<T>>(), {
    name: "element-pro-table",
    isSearch: true,
    isReset: true,
    isRefresh: true,
    columns: () => [],
    pagination: () => ({
        defaultCurrent: 1,
        hideOnSinglePage: true,
        showTotal: true,
        showMore: true,
        showJumper: true
    }),
    request: () =>
        Promise.resolve({
            current: 1,
            pageSize: 10,
            total: 0,
            data: []
        })
})
console.log($props)

const innerRequest = ref<() => Promise<any>>(async () =>
    Promise.resolve({
        current: 1,
        pageSize: 10,
        total: 0,
        data: []
    })
)

const computedColumns = computed(() => {
    if (isFunction($props.columns)) {
        return ($props.columns as (...args: any[]) => any)(innerRequest.value)
    }
    return $props.columns as TableColumns[]
})

// 初始化数据
const initData = computedColumns.value.reduce(
    (pre: Record<string, any>, cur: TableColumns) => {
        if (cur.isSearch !== false) {
            if (cur.searchIndex === undefined) {
                pre[cur.dataIndex as string] = null
            } else {
                pre[cur.searchIndex as string] = null
            }
        }
        return pre
    },
    {}
) as T

const searchParams = ref<T>({
    ...initData
})

const pageRes = ref<PageRes<R>>({
    current: 1,
    pageSize: 10,
    total: 0,
    data: []
})

innerRequest.value = async () => {
    pageRes.value = await $props.request(searchParams.value as T, pageRes.value)
}

const processedColumnsForAsyncSearchData = ref<
    (TableColumns & {
        option: {
            multiple: boolean
            options: Option
        }
    })[]
>([])

;(async function processColumns() {
    const selection = ["select", "radio"]
    processedColumnsForAsyncSearchData.value = (await Promise.all(
        computedColumns.value.map(async (item: TableColumns) => {
            if (!item.type) {
                item.type = "input"
            }
            if (selection.includes(item.type as string)) {
                if (item.option) {
                    if (isFunction(item.option.options)) {
                        if (isAsyncFunction(item.option.options)) {
                            item.option.options = await (
                                item.option.options as () => Promise<Option>
                            )()
                        } else {
                            item.option.options = (
                                item.option.options as () => Option
                            )()
                        }
                    }
                }
            }
            return item
        })
    )) as (TableColumns & {
        option: {
            multiple: boolean
            options: Option
        }
    })[]
})()

const reset = () => {
    searchParams.value = initData as UnwrapRef<T>
    innerRequest.value()
}

watch(
    [() => pageRes.value.current, () => pageRes.value.pageSize],
    innerRequest.value,
    {
        immediate: true
    }
)

const computedVModelProp = (item: TableColumns) => {
    let prop = "dataIndex"
    if (item.searchIndex !== undefined) {
        prop = "searchIndex"
    }
    return prop
}
</script>

<template>
    <div class="p-[20px]">
        <div
            v-if="isSearch"
            class="p-[10px] bg-[var(--el-color-bg-2)] text-[var(--el-color-text-1)] shadow-custom rounded-md mb-[20px]"
        >
            <el-form :model="searchParams" inline label-position="left">
                <template
                    v-for="item in processedColumnsForAsyncSearchData"
                    :key="item.dataIndex"
                >
                    <el-form-item
                        v-if="item.isSearch !== false"
                        :label="`${item.title}：`"
                        :prop="item.dataIndex"
                        class="mb-0 flex-center"
                    >
                        <template v-if="item.type === 'input'">
                            <el-input
                                v-model="
                                    searchParams[item[computedVModelProp(item)]]
                                "
                                :placeholder="`请输入你想搜索的${item.title}`"
                            />
                        </template>
                        <template v-else-if="item.type === 'select'">
                            <el-select
                                v-model="
                                    searchParams[item[computedVModelProp(item)]]
                                "
                                :multiple="item?.option?.multiple"
                                :placeholder="`请选择你想搜索的${item.title}`"
                            >
                                <el-option
                                    v-for="option in item?.option
                                        ?.options as Option"
                                    :key="option.value"
                                    :value="option.value"
                                >
                                    {{ option.label }}
                                </el-option>
                            </el-select>
                        </template>
                        <template v-else-if="item.type === 'number'">
                            <el-input-number
                                v-model="
                                    searchParams[item[computedVModelProp(item)]]
                                "
                                :placeholder="`请输入你想搜索的${item.title}`"
                            />
                        </template>
                        <template v-else-if="item.type === 'date'">
                            <el-date-picker
                                v-model="
                                    searchParams[item[computedVModelProp(item)]]
                                "
                                :placeholder="`请选择你想搜索的${item.title}`"
                            />
                        </template>
                        <template v-else-if="item.type === 'radio'">
                            <el-radio-group
                                v-model="
                                    searchParams[item[computedVModelProp(item)]]
                                "
                            >
                                <el-radio
                                    v-for="option in item?.option
                                        ?.options as Option"
                                    :key="option.value"
                                    :label="option.value"
                                >
                                    {{ option.label }}
                                </el-radio>
                            </el-radio-group>
                        </template>
                    </el-form-item>
                </template>
                <el-form-item class="flex-center mb-0">
                    <el-button type="primary" @click="innerRequest">
                        搜索
                    </el-button>
                    <el-button v-if="isReset" class="ml-[10px]" @click="reset">
                        重置
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <ElementProTableList
            v-model:page="pageRes"
            :add-form="addForm"
            :columns="computedColumns"
            :is-refresh="isRefresh"
            :name="name"
            :pagination="{
                ...pagination,
                current: pageRes.current,
                pageSize: pageRes.pageSize
            }"
            @request="innerRequest"
        />
    </div>
</template>
