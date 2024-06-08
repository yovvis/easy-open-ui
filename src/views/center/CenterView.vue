<script lang="ts" setup>
import {
    Clock,
    Edit,
    Location,
    Message,
    Phone,
    User,
    UserFilled
} from "@element-plus/icons-vue"
import { useUserStore } from "@/stores/user"
import { ref } from "vue"
import UpdaeBaseInfo from "@/views/center/components/UpdaeBaseInfo.vue"
import UpdatePwd from "@/views/center/components/UpdatePwd.vue"
import { getDate } from "@/utils/time"

const userStore = useUserStore()

const activeTab = ref<string>("baseInfo")
</script>

<template>
    <div class="flex items-start flex-col md:flex-row gap-4 p-4">
        <div class="bg-white border rounded-lg p-4 w-full md:w-1/3">
            <h2 class="text-xl font-semibold mb-4">个人信息</h2>
            <div class="flex justify-center mb-4">
                <el-avatar
                    :src="userStore.user.userAvatar"
                    class="rounded-full w-24 h-24 object-cover"
                    size="large"
                >
                    <el-icon size="60px">
                        <UserFilled />
                    </el-icon>
                </el-avatar>
            </div>
            <ul class="space-y-4">
                <li class="flex items-center">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span class="ml-[5px]"
                        >用户名: {{ userStore.user.userName }}</span
                    >
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <Phone />
                    </el-icon>
                    <span class="ml-[5px]"
                        >手机号: {{ userStore.user.phone }}</span
                    >
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <Message />
                    </el-icon>
                    <span class="ml-[5px]"
                        >邮箱: {{ userStore.user.email }}</span
                    >
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <Location />
                    </el-icon>
                    <span class="ml-[5px]"
                        >地址: {{ userStore.user.address }}</span
                    >
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <Edit />
                    </el-icon>
                    <span class="ml-[5px]"
                        >简介: {{ userStore.user.userProfile }}</span
                    >
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span class="ml-[5px]"
                        >所属角色: {{ userStore.user.userRole }}</span
                    >
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span class="ml-[5px]">职位: {{ userStore.user.job }}</span>
                </li>
                <li class="flex items-center">
                    <el-icon>
                        <Clock />
                    </el-icon>
                    <span class="ml-[5px]"
                        >创建日期:
                        {{ getDate(userStore.user.createTime) }}</span
                    >
                </li>
            </ul>
        </div>
        <div class="bg-white border rounded-lg p-4 w-full md:w-2/3">
            <h2 class="text-xl font-semibold mb-4">基本资料</h2>
            <div class="border-b mb-4">
                <el-tabs v-model="activeTab">
                    <el-tab-pane label="基本信息" name="baseInfo">
                        <UpdaeBaseInfo />
                    </el-tab-pane>
                    <el-tab-pane label="修改密码" name="updatePwd">
                        <UpdatePwd />
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
