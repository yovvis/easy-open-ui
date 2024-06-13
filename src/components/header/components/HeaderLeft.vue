<script lang="ts" setup>
import { Share } from "@element-plus/icons-vue"
import { useRoute } from "vue-router"

const $route = useRoute()

const MenuList = [
    {
        title: "用户管理",
        path: "/user"
    },
    {
        title: "应用管理",
        path: "/app"
    },
    {
        title: "题目管理",
        path: "/question"
    },
    {
        title: "评分管理",
        path: "/score"
    },
    {
        title: "答案管理",
        path: "/answer"
    }
]
</script>

<template>
    <el-popover :width="380" placement="bottom" trigger="click">
        <template #reference>
            <div
                class="cursor-pointer rounded-md hover:bg-[#ccc] transition-[background] p-[10px] flex-center"
            >
                <el-icon>
                    <Share />
                </el-icon>
            </div>
        </template>
        <template #default>
            <div class="space-x-4">
                <el-button
                    v-for="menu in MenuList"
                    :key="menu.path"
                    :type="$route.path === menu.path ? 'primary' : 'text'"
                    class="border ml-0"
                >
                    <router-link :to="menu.path">{{ menu.title }}</router-link>
                </el-button>
            </div>
        </template>
    </el-popover>
</template>

<style scoped></style>
