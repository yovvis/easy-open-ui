import BASE_ROUTES from "./modules/base"

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
            }
        ]
    },
    ...BASE_ROUTES
]
