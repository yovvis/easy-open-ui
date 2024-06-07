<script lang="ts" setup>
import { inject } from "vue"
import GlobalConfig from "@/global.config"

const config = inject("$config") as typeof GlobalConfig
</script>

<template>
    <el-footer class="w-full flex-center">
        {{ config.title }}
        <el-link :href="config.github">@{{ config.author }}</el-link>
    </el-footer>
</template>
