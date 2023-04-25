<!-- setup 语法糖 -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav/Nav.vue';
</script>

<template>
  <div class="content">
    <Nav />
    <RouterView />
  </div>
</template>

<style scoped>
  .content {
    width: 100vw;
    height: 100vh;
    white-space: pre-line;
  }
</style>
