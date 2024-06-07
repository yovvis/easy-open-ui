<script lang="ts" setup>
import HeaderLeft from "./components/HeaderLeft.vue"
import HeaderMiddle from "./components/HeaderMiddle.vue"
import HeaderRight from "./components/HeaderRight.vue"
</script>

<template>
    <header
        class="w-full h-[60px] shadow-md flex items-center justify-between px-[10px]"
    >
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
    </header>
</template>

<style scoped></style>
