<script setup>
  import { reactive, ref, provide } from "vue";
  import Header from "./components/header.vue";
  import Footer from "./components/footer.vue";
  //父傳子全部用provide(可跨組別)   子傳父還是要用defineEmits
  // const propsWeb = reactive({
  //   user: 10,
  //   url: "www.hightwo.com",
  // });
  // const web = reactive({
  //   //非響應式數據
  //   name: "嗨兔摳頂",
  //   url: "hightwo.com",
  // });

  // provide("provideWeb", web);
  // const userAdd = () => {
  //   propsWeb.user++;
  //   console.log(propsWeb.user);
  // };
  const user = ref(0); //響應式數據

  // provide("provideUser", user);

  // const emitsGetWeb = (data) => {
  //   console.log(data)
  //   web.url = data.url
  // }

  // const emitsUserAdd = (data) => {
  //   console.log(data);
  //   user.value += data
  // }

  // const userAdd = () => {
  //   user.value++;s
  //   console.log("1123");
  // };
  // provide("provideFuncUserAdd", userAdd);
</script>

<template>
  <!-- <Header @getWeb="emitsGetWeb" @userAdd="emitsUserAdd"/>-->
  <h3>App.vue組件</h3>

  <Header>
    <a href="hightwo.com.tw">嗨兔摳頂</a>
  </Header>

  <!-- user: {{ user }}

  <Header /> -->

  <!-- {{ web.url }} - {{ user }} -->

  <!-- <Footer v-bind="propsWeb"/>
  <Footer :="propsWeb" /> -->

  <Footer>
    <template #url="data">
      {{ data.title }}
      <br />
      {{ data.user }}
      <br />
      <a href="www.hightwocode.com">網址</a>
    </template>

    <!-- 以下為解構形式  -->
    <!-- <template #url="{title, user}">    
      {{ title }}
      <br>
      {{ user }}
      <br>
      <a href="www.hightwocode.com">網址</a>
    </template> -->
  </Footer>
</template>

<style scoped></style>
