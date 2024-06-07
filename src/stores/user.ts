import { ref } from "vue"
import { defineStore } from "pinia"
import type { GetUserInfoVO } from "@/apis/types/login"
import { getLogin } from "@/apis/login"

export const useUserStore = defineStore("user", () => {
    const user = ref<GetUserInfoVO>({
        id: "",
        userName: "",
        userAvatar: "",
        userProfile: "",
        address: "",
        phone: "",
        email: "",
        job: "",
        userRole: "",
        createTime: "",
        updateTime: ""
    })

    /**
     * 获取用户信息
     */
    async function getUserInfo() {
        const result = await getLogin()
        if (result.code === 0) {
            user.value = result.data
        }
        return result
    }

    /**
     * 退出登录
     */
    async function logout() {}

    return { user, login: getUserInfo }
})
