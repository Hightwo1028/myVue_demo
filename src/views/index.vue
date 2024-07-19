<script setup>

</script>

<template>
    首頁 www.hightwo.com
    <hr>
    <router-link to="/content?id=100&title=嗨兔摳頂">查詢字符串傳遞參數</router-link>
    <br>
    <router-link to="/user/007/name/嗨兔">路徑傳遞參數</router-link>
    <br>

    <router-link :to="{path:'/content', query:{id:200, title:'vue3'}}">查詢字符串傳遞參數</router-link>
</template>

<style scoped></style>