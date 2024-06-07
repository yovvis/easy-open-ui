<script lang="ts" setup>
import { computed } from "vue"
import bannerImage from "@/assets/images/login/login-banner.png"

const carouselItem = computed(() => [
    {
        slogan: "欢迎使用我们的服务",
        subSlogan: "提供最优质的用户体验",
        image: bannerImage
    }
])
</script>

<template>
    <div class="banner flex items-center justify-center h-full">
        <div class="banner-inner flex-1 h-full">
            <el-carousel :autoplay="true" class="h-full" height="100%">
                <el-carousel-item
                    v-for="item in carouselItem"
                    :key="item.slogan"
                >
                    <div
                        class="carousel-item flex flex-col items-center justify-center h-full"
                    >
                        <div
                            class="carousel-title text-white font-medium text-xl leading-7"
                        >
                            {{ item.slogan }}
                        </div>
                        <div
                            class="carousel-sub-title mt-2 text-gray-400 text-base leading-6"
                        >
                            {{ item.subSlogan }}
                        </div>
                        <img
                            :src="item.image"
                            class="carousel-image w-80 mt-8"
                        />
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style scoped></style>
