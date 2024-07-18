<script setup>
  import { inject } from "vue"
  const web = inject('provideWeb')
  console.log('provideWeb:', web);

  const funcUserAdd = inject('provideFuncUserAdd')
  console.log("provideFuncUserAdd:", funcUserAdd);
</script>

<template>
    <h3>nav.vue-Button組件</h3>

    <button @click="funcUserAdd">添加用戶</button>
</template>

<style scoped>

</style>