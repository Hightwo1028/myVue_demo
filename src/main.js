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

 createApp(App).use(router).mount('#app')


