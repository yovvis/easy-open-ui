<script lang="ts" setup>
import { useUserStore } from "@/stores/user"
import { Operation, User } from "@element-plus/icons-vue"
import {
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElMessage
} from "element-plus"
import { useRouter } from "vue-router"
import { LOGIN_ROUTE_NAME } from "@/router/config/white.config"

const userStore = useUserStore()
const $router = useRouter()

const dropdownOptions = [
    {
        label: "个人中心",
        key: "center",
        icon: User,
        action: async () => {
            await $router.push({
                name: "Center"
            })
        }
    },
    {
        label: "退出登录",
        key: "logout",
        icon: User,
        action: async () => {
            const result = await userStore.logout()
            if (result.code === 0) {
                ElMessage.success("退出成功")
                await $router.push({
                    name: LOGIN_ROUTE_NAME
                })
            }
        }
    }
]
</script>

<template>
    <div class="flex items-center space-x-2">
        <div
            class="cursor-pointer rounded-md hover:bg-[#ccc] transition-[background] p-[10px] flex-center"
        >
            <el-icon>
                <Operation />
            </el-icon>
        </div>
        <el-dropdown>
            <template #default>
                <div
                    class="flex items-center h-[80%] cursor-pointer rounded-md hover:bg-[#f5f5f5] transition-[background] p-[5px]"
                >
                    <el-avatar
                        :alt="userStore.user.userName"
                        :src="userStore.user.userAvatar"
                        :title="userStore.user.userName"
                    >
                        <el-icon size="large">
                            <User />
                        </el-icon>
                    </el-avatar>
                    <div class="h-full ml-[5px] flex flex-col justify-between">
                        <h3>{{ userStore.user.userName }}</h3>
                        <h3 class="mt-[7px]">{{ userStore.user.userRole }}</h3>
                    </div>
                </div>
            </template>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item
                        v-for="option in dropdownOptions"
                        :key="option.key"
                        @click="option.action"
                    >
                        {{ option.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped></style>
