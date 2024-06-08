import { ref } from "vue"
import { defineStore } from "pinia"
import type { GetUserInfoVO } from "@/apis/types/login"
import { getLogin, logout as logoutHandler } from "@/apis/login"
import type { UpdateUserInfoByMySelf } from "@/apis/types/user"
import { updateUserInfoByMyself } from "@/apis/user"

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
    async function logout() {
        console.log("退出登录")
        return await logoutHandler()
    }

    /**
     * 更新用户信息
     * @param data
     */
    async function updateUserInfo(data: UpdateUserInfoByMySelf) {
        return await updateUserInfoByMyself(data)
    }

    return { user, getUserInfo, logout, updateUserInfo }
})
