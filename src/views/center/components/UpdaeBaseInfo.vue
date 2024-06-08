<script lang="ts" setup>
import { ref } from "vue"
import type { GetUserInfoVO } from "@/apis/types/login"
import { useUserStore } from "@/stores/user"
import { ElMessage } from "element-plus"

const userStore = useUserStore()
const userInfo = ref<GetUserInfoVO>({
    ...userStore.user
})

const updateUserInfo = async () => {
    const result = await userStore.updateUserInfo({
        userName: userInfo.value.userName,
        userAvatar: userInfo.value.userAvatar,
        userProfile: userInfo.value.userProfile,
        phone: userInfo.value.phone,
        email: userInfo.value.email,
        address: userInfo.value.address
    })
    if (result.code === 0) {
        ElMessage.success("更新成功")
        await userStore.getUserInfo()
    } else {
        ElMessage.error(result.message)
    }
}

const reset = () => {
    userInfo.value = userStore.user
}
</script>

<template>
    <el-form class="space-y-4">
        <el-form-item label="用户名：" prop="username">
            <el-input v-model="userInfo.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="手机号：" prop="phone">
            <el-input v-model="userInfo.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="简介：" prop="userProfile">
            <el-input v-model="userInfo.userProfile" placeholder="请输入简介" />
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
            <el-input v-model="userInfo.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="地址：" prop="address">
            <el-input v-model="userInfo.address" placeholder="请输入地址" />
        </el-form-item>
        <div class="flex space-x-4">
            <el-button type="primary" @click="updateUserInfo">保存</el-button>
            <el-button @click="reset">重置</el-button>
        </div>
    </el-form>
</template>

<style scoped></style>
