<script setup>
  import { reactive, toRefs, toRef } from "vue"; //onMounted可以拿來操縱DOM 跟頁面交互


  let web = reactive({
    name: 'hightwo',
    url: 'www.hightwo.com.tw'      //解構後的數據不再是響應式數據，所以用toRefs轉換
  })

  //toRefs将一个响应式对象的所有属性转换为ref对象
  //let {name,url} = toRefs(web)

  //toRef将一个响应式对象的某个属性转换为ref变量
  
  //let { name, url } = toRefs(web)
  let url = toRef(web, 'url')  // 第一個參數是要轉換的對象 第二個參數是要轉換的屬性名

  console.log(url);
//   onMounted(() => {
//     console.log("onMounted");
//   });
//   onUpdated(() => {
//     console.log("onUpdated");
//   });

//   const user = ref(0); //響應式數據更新才會更新 如果不使用響應式數據 onUpdated不會起作用
//   console.log("user:", user.value);
// </script>

<template>

  {{ url }}

</template>

<style scoped></style>
