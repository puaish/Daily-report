<!-- setup 语法糖 -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <nav class="nav">
      
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
  .content {
    width: 100vw;
    height: 100vh;
  }
  .nav {
    background-color: #fff;
    height: 60px;
  }
</style>
