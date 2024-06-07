<script lang="ts" setup>
import { reactive, ref } from "vue"
import { Lock, User } from "@element-plus/icons-vue"
import type { RegisterDTO } from "@/apis/types/register"
import { register } from "@/apis/register"
import { ElMessage } from "element-plus"
import { useRouter } from "vue-router"

const errorMessage = ref("")

const $router = useRouter()

const userInfo = reactive<RegisterDTO>({
    userAccount: "",
    userPassword: "",
    checkPassword: ""
})

const handleSubmit = async () => {
    const result = await register(userInfo)
    if (result.code === 0) {
        ElMessage.success("注册成功，去登录吧")
        await $router.push({
            name: "Login"
        })
    } else {
        ElMessage.error(result.message)
    }
}
</script>

<template>
    <div class="w-80">
        <div class="text-gray-900 font-medium text-2xl leading-8">
            注册 · 轻享开放平台
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
                <el-input
                    v-model="userInfo.userAccount"
                    placeholder="请输入用户名"
                >
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
                    placeholder="请输入密码"
                    type="password"
                >
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item
                :rules="[{ required: true, message: '请再次输入密码' }]"
                prop="checkPassword"
            >
                <el-input
                    v-model="userInfo.checkPassword"
                    clearable
                    placeholder="请再次输入密码"
                    type="password"
                >
                    <template #prefix>
                        <el-icon class="el-input__icon">
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <div class="w-full">
                <el-button class="w-full" native-type="submit" type="primary">
                    登录
                </el-button>
                <router-link
                    class="mt-[10px] flex justify-end text-[13px] hover:underline hover:text-[#0094ff]"
                    to="/login"
                >
                    去登录
                </router-link>
            </div>
        </el-form>
    </div>
</template>
