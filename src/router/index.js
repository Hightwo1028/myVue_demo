//存儲路由
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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