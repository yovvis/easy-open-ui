<script lang="ts" setup>
import { ref } from "vue"
import { ElMessage, UploadFile } from "element-plus"
import { addUser } from "@/apis/user"
import type { AddUserInfo } from "@/apis/types/user"

const $props = defineProps<{
    onClose?: () => void
    onOk?: () => void
}>()

const options = [
    {
        value: "普通用户",
        label: "普通用户"
    },
    {
        value: "管理员",
        label: "管理员"
    }
]

const fileList = ref<UploadFile[]>([])
const form = ref<AddUserInfo>({
    userAccount: "",
    userName: "",
    userProfile: "",
    userAvatar: null,
    userRole: ""
})

const rules = {
    userName: [
        {
            required: true,
            message: "昵称是必填项",
            trigger: "blur"
        }
    ],
    userAccount: [
        {
            required: true,
            message: "账户是必填项",
            trigger: "blur"
        }
    ],
    userProfile: [
        {
            required: true,
            message: "简介是必填项",
            trigger: "blur"
        }
    ],
    userAvatar: [
        {
            required: true,
            message: "头像是必填项",
            trigger: "blur"
        }
    ],
    userRole: [
        {
            required: true,
            message: "角色是必填项",
            trigger: "blur"
        }
    ]
}

console.log($props)
const onSubmit = async () => {
    const result = await addUser(form.value)
    if (result.data) {
        ElMessage.success(result.message)
        if ($props.onOk) {
            $props.onOk()
        }
        if ($props.onClose) {
            $props.onClose()
        }
    }
}

const reset = () => {
    form.value = {
        userAccount: "",
        userName: "",
        userProfile: "",
        userAvatar: null,
        userRole: ""
    }
}
</script>

<template>
    <el-form :model="form" :rules="rules" layout="vertical" @submit="onSubmit">
        <el-form-item field="userName" label="昵称">
            <el-input v-model="form.userName" placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item field="userAccount" label="账号">
            <el-input v-model="form.userAccount" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item field="userProfile" label="简介">
            <el-input
                v-model="form.userProfile"
                placeholder="请输入简介"
                type="textarea"
            />
        </el-form-item>
        <el-form-item field="userAvatar" label="真实名字">
            <el-upload
                v-model="form.userAvatar"
                :file-list="fileList"
                :limit="1"
                :multiple="false"
                accept="jpg,jpeg,png,webp"
            />
        </el-form-item>
        <el-form-item field="userRole" label="角色">
            <el-select v-model="form.userRole" placeholder="请输入角色">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button html-type="submit" type="primary">提交</el-button>
            <el-button class="ml-[10px]" html-type="reset" @click="reset">
                重置
            </el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped></style>
