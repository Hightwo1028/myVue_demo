 import { createApp } from 'vue'

// import { createPinia } from 'pinia'

// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

 import App from './App.vue'

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// //createApp(App).mount('#app')

// const app = createApp(App)
// app.use(pinia)
// app.mount('#app')

 import router from './router'  //可以找到router裡的兩個文件

//  createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router)

//全局前置守衛

router.beforeEach((to, from, next) => {
    console.log("to", to);  //即將進入的路由之訊息
    console.log("from", from); //當前即將離開的路由訊息

    //next()

    
        if(to.name == 'member') {
            next(false)  //攔截
        }
        else {
            next() //繼續
        }
    
})

app.mount('#app')


