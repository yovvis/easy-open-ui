<script lang="ts" setup>
import FooterView from "@/components/footer/FooterView.vue"
import HeaderView from "@/components/header/HeaderView.vue"
</script>

<template>
    <div>
        <HeaderView />
        <router-view />
        <FooterView class="fixed bottom-0 left-0" />
    </div>
</template>

<style scoped></style>
