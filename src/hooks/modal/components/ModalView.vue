<script lang="ts" setup>
import type { DefineComponent } from "vue"

const $props = defineProps<{
    title: string
    visible: boolean
    form: DefineComponent
    data?: Record<string, any>
    onClose: () => void
    onOk: () => void
}>()

const handleCancel = () => {
    $props.onClose()
}
const handleOk = () => {
    $props.onOk()
    handleCancel()
}
</script>

<template>
    <el-dialog :title="title" :visible="visible" @close="handleCancel">
        <component :is="form" :data="data" :on-close="onClose" :on-ok="onOk" />
        <template #footer>
            <el-button @click="handleCancel">取消</el-button>
            <el-button type="primary" @click="handleOk">确定</el-button>
        </template>
    </el-dialog>
</template>
