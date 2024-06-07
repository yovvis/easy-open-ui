<script lang="ts" setup>
import Footer from "@/components/footer/FooterView.vue"
import LoginBanner from "./components/LoginBanner.vue"
</script>

<template>
    <div class="flex h-screen">
        <div
            class="w-[550px] bg-gradient-to-r from-gray-800 to-blue-900 hidden lg:block"
        >
            <LoginBanner />
        </div>
        <div class="flex flex-1 items-center justify-center relative pb-10">
            <div class="fixed top-6 left-5 z-10 flex items-center">
                <img alt="logo" class="w-[30px]" src="/favicon.ico" />
                <div class="ml-1 mr-1 text-white text-xl">轻享开放平台</div>
            </div>
            <router-view />
            <div class="absolute right-0 bottom-0 w-full">
                <Footer />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media (max-width: 1024px) {
    .w-550px {
        width: 25%;
    }
}
</style>
