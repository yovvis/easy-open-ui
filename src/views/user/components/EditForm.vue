<script lang="ts" setup>
import { ref, watchEffect } from "vue"
import type { UpdateUserInfo } from "@/apis/types/user"
import { updateUserInfo } from "@/apis/user"
import { ElMessage } from "element-plus"

const $props = defineProps<{
    data: UpdateUserInfo
    onClose: () => void
    onOk: () => void
}>()

const initData = {
    id: "",
    userName: "",
    userAvatar: "",
    newAvatar: null,
    userProfile: "",
    phone: "",
    email: "",
    address: "",
    userStatus: 0
}

const form = ref<UpdateUserInfo>({
    ...initData
})

watchEffect(() => {
    form.value = {
        id: $props.data.id,
        userName: $props.data.userName,
        userAvatar: $props.data.userAvatar,
        newAvatar: $props.data.newAvatar,
        userProfile: $props.data.userProfile,
        phone: $props.data.phone,
        email: $props.data.email,
        address: $props.data.address,
        userStatus: $props.data.userStatus
    }
})

const rules = {
    name: [
        {
            required: true,
            message: "真实名字是必填项",
            trigger: "blur"
        }
    ],
    positionId: [
        {
            required: true,
            message: "岗位是必填项",
            trigger: "change"
        }
    ],
    isHigherPermission: [
        {
            required: true,
            message: "权限是必填项",
            trigger: "change"
        }
    ],
    loginName: [
        {
            required: true,
            message: "登录名是必填项",
            trigger: "blur"
        }
    ]
}

const onSubmit = async () => {
    const result = await updateUserInfo(form.value)
    if (result.data) {
        ElMessage.success(result.message)
        $props.onOk()
        $props.onClose()
    }
}

const reset = () => {
    form.value = initData
}
</script>

<template>
    <el-form :model="form" :rules="rules" layout="vertical" @submit="onSubmit">
        <el-form-item field="id" label="编号">
            <el-input v-model="form.id" disabled placeholder="请输入用户编号" />
        </el-form-item>
        <el-form-item field="positionId" label="岗位">
            <el-select
                v-model="form.positionId"
                :options="
                    positionStore.positionOptions.map((item) => ({
                        label: item.name,
                        value: item.id
                    }))
                "
                placeholder="请选择岗位"
            />
        </el-form-item>
        <el-form-item field="isHigherPermission" label="是否有更高的权限">
            <el-select
                v-model="form.isHigherPermission"
                :options="[
                    { label: '是', value: 1 },
                    { label: '否', value: 0 }
                ]"
                placeholder="请选择权限"
            />
        </el-form-item>
        <el-form-item field="loginName" label="登录名">
            <el-input v-model="form.loginName" placeholder="请输入登录名" />
        </el-form-item>
        <el-form-item>
            <el-button html-type="submit" type="primary">修改</el-button>
            <el-button class="ml-[10px]" html-type="reset" @click="reset">
                重置
            </el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped></style>
