//存儲路由
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        //alias: '/home',     //一個路由可以定義多個別名
        alias: ['/home','/index'],     //一個路由可以定義多個別名 用數組的形式表達
        component: () => import('@/views/index.vue')   //配置好就可以直接將..換成@符號 
    }
    ,
    {
        path:'/content',
        component: () => import('@/views/content.vue')
    }
    ,
    {
        path:'/user/:id/name/:name?',   //加上問號就不是必需的
        component: () => import('@/views/user.vue')
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router