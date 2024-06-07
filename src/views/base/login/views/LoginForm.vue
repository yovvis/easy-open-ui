<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useStorage } from "@vueuse/core"
import { Lock, User } from "@element-plus/icons-vue"
import { login } from "@/apis/login"
import type { LoginDTO } from "@/apis/types/login"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"

const $router = useRouter()

const errorMessage = ref("")

const loginInfo = useStorage("login-info", {
    remember: true,
    userAccount: "admin",
    userPassword: "admin"
})
const userInfo = reactive<LoginDTO & { remember: boolean }>({
    userAccount: loginInfo.value.userAccount,
    userPassword: loginInfo.value.userPassword,
    remember: true
})

const handleSubmit = async () => {
    const result = await login(userInfo)
    if (result.code === 0) {
        ElMessage.success("登录成功")
        await $router.push({
            name: "Home"
        })
        if (userInfo.remember) {
            loginInfo.value = userInfo
        }
    } else {
        ElMessage.error(result.message)
    }
}
</script>

<template>
    <div class="w-80">
        <div class="text-gray-900 font-medium text-2xl leading-8">
            登录 · 轻享开放平台
        </div>
        <div class="text-[#8690a9] text-[14px] leading-6">
            请使用您的账号登录
        </div>
        <div class="h-8 text-red-600 leading-8">
            {{ errorMessage }}
        </div>
        <el-form :model="userInfo" @submit.prevent="handleSubmit">
            <el-form-item
                :rules="[{ required: true, message: '请输入用户名' }]"
                prop="userAccount"
            >
                <el-input v-model="userInfo.userAccount" placeholder="用户名">
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <User />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item
                :rules="[{ required: true, message: '请输入密码' }]"
                prop="userPassword"
            >
                <el-input
                    v-model="userInfo.userPassword"
                    clearable
                    placeholder="密码"
                    type="password"
                >
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="userInfo.remember" class="mr-[5px]" />
                记住密码
            </el-form-item>
            <div class="w-full">
                <el-button class="w-full" native-type="submit" type="primary">
                    登录
                </el-button>
                <router-link
                    class="mt-[10px] flex justify-end text-[13px] hover:underline hover:text-[#0094ff]"
                    to="/register"
                >
                    去注册
                </router-link>
            </div>
        </el-form>
    </div>
</template>
