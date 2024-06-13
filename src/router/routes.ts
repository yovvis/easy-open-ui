import BASE_ROUTES from "./base"
import USER_ROUTES from "./modules/user"

export const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/home/HomeView.vue"),
        children: [
            {
                path: "center",
                name: "Center",
                component: () => import("@/views/center/CenterView.vue")
            },
            ...USER_ROUTES
        ]
    },
    ...BASE_ROUTES
]
