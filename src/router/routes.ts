import BASE_ROUTES from "./modules/base"

export const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomeView.vue")
    },
    ...BASE_ROUTES
]
