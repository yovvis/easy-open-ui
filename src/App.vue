<script lang="ts" setup>
import { RouterView } from "vue-router"
import { provide } from "vue"
import GlobalConfig from "@/global.config"

provide("$config", GlobalConfig)
</script>

<template>
    <RouterView />
</template>
