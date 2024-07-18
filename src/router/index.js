import { createRouter, createWebHistory } from "vue-router";

const routers = [
    {
        path:'/',
        component: () => import('../views/index.vue')
    }
    ,
    {
        path:'/content',
        component: () => import('../views/content.vue')
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router