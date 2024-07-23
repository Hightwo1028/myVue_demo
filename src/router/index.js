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
        name:'member',  //定義名稱不會更改原本路徑
        component: () => import('@/views/user.vue')
    }
    ,
    {
        path:'/vip',   //https://localhost:5173/vip
        component: () => import('@/views/vip.vue'),
        children: [             //子路由 (嵌套路由)
            {
                path:'',   //https://localhost:5173/vip/
                component: () => import('@/views/vip/default.vue')
            },
            {
                path:'order',   //https://localhost:5173/vip/order
                component: () => import('@/views/vip/order.vue')
            },
            {
                path:'info',   //https://localhost:5173/vip/info
                component: () => import('@/views/vip/info.vue')
            }
        ]
    },
    {
        path: '/svip',    //路徑
        //redirect: '/vip'   //重定向到vip
        redirect: {name:'member', params:{id:200, name:'嗨兔'}}
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router