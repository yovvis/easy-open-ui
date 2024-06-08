<script lang="ts" setup>
import { ref } from "vue"

const pwdInfo = ref<{
    oldPwd: string
    newPwd: string
}>({
    oldPwd: "",
    newPwd: ""
})

const reset = () => {
    pwdInfo.value = {
        oldPwd: "",
        newPwd: ""
    }
}
</script>

<template>
    <el-form class="space-y-4">
        <el-form-item label="老密码：" prop="username">
            <el-input
                v-model="pwdInfo.oldPwd"
                placeholder="请输入老密码"
                type="password"
            />
        </el-form-item>
        <el-form-item label="新密码：" prop="phone">
            <el-input
                v-model="pwdInfo.newPwd"
                placeholder="请输入新密码"
                type="password"
            />
        </el-form-item>
        <div class="flex space-x-4">
            <el-button type="primary">保存</el-button>
            <el-button @click="reset">重置</el-button>
        </div>
    </el-form>
</template>

<style scoped></style>
