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

 import router from './router'

 createApp(App).use(router).mount('#app')


