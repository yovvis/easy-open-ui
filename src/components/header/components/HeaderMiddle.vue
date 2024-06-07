<script lang="ts" setup>
import { inject } from "vue"

const config = inject("$config")
</script>

<template>
    <div class="flex-center">
        <img alt="logo" class="h-[30px]" src="/favicon.ico" title="logo" />
        <h1 class="ml-[5px] text-[20px] font-bold">{{ config.title }}</h1>
    </div>
</template>

<style scoped></style>
