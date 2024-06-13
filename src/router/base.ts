export default [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/base/not-found/NotFound.vue")
    },
    {
        path: "/",
        name: "LoginLayout",
        component: () => import("@/views/base/login/LoginLayout.vue"),
        children: [
            {
                path: "login",
                name: "Login",
                component: () =>
                    import("@/views/base/login/views/LoginForm.vue")
            },
            {
                path: "/register",
                name: "Register",
                component: () =>
                    import("@/views/base/login/views/RegisterForm.vue")
            }
        ]
    }
]
