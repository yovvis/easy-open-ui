import { createRouter, createWebHistory } from "vue-router"
import { routes } from "@/router/routes"
import { WHITE_LIST } from "@/router/config/white.config"
import { useUserStore } from "@/stores/user"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (WHITE_LIST.includes(to.path)) {
        next()
        return
    }
    const userStore = useUserStore()
    // 判断是否登录
    const result = await userStore.login()
    if (result.data) {
        next()
        return
    } else {
        next({
            name: "Login"
        })
    }
})

export default router
