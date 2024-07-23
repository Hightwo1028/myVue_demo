<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goTo = () => {
    // router.push('/content?id=100&title=嗨兔摳頂')
    router.push({name:'member', params:{id:200, name:'嗨兔'}})
}

</script>

<template>
    首頁 www.hightwo.com
    <hr>
    <router-link to="/content?id=100&title=嗨兔摳頂">查詢字符串傳遞參數</router-link>
    <br>
    <router-link to="/user/007/name/嗨兔">路徑傳遞參數</router-link>
    <br>
    <router-link :to="{path:'/content', query:{id:200, title:'vue3'}}">查詢字符串傳遞參數 - 動態屬性綁定</router-link>
    <br>
                                        <!-- 定義了路由名稱 -->
    <router-link :to="{name:'member', params:{id:200, name:'嗨兔'}}">路徑傳遞參數 - 動態屬性綁定</router-link>  
    <br>
    <button @click="goTo()">編程式導航</button>
</template>

<style scoped></style>