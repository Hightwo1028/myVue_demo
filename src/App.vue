<script setup>
import { reactive } from "vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

const propsWeb = {
  user: 10,
  url: "www.hightwo.com",
};
const userAdd = () => {
  propsWeb.user++;
  console.log(propsWeb.user);
};
</script>

<template>
  <Header propsName="嗨兔扣頂" propsUrl="hightwo.com" />

  hightwocode.com
  <button @click="userAdd">添加事件</button>

  <!-- <Footer v-bind="propsWeb"/> -->D
  <Footer :="propsWeb" />
</template>

<style scoped></style>
