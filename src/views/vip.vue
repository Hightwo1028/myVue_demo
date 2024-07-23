<script setup>
    import Header from '@/conponents/header.vue'
    import Footer from '@/conponents/footer.vue'
</script>

<template>
    <!-- //共享組件 -->
    <Header/>     
    
    <!-- 這邊渲染了子頁面 default, order, info 且根據路由切換-->
    <router-view />

    <!-- //共享組件 -->
    <Footer/>
</template>

<style scoped>

</style>