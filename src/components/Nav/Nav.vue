<script setup>
import { ref,reactive,onMounted } from "vue";
import { Search, ArrowDown,User,SwitchButton} from "@element-plus/icons-vue";
import {useStore} from "@/stores/counter"
// 仓库
const store = useStore();

// 退出登录
const logout = function() {
  localStorage.setItem("accessToken","");
  localStorage.setItem("userId","");
}

onMounted(()=>{
})
</script>

<template>
  <nav class="nav">
    <!-- <div>{{ store.userInfo }}</div> -->
    <div class="nav-content">
      <el-row class="nav-row" :gutter="20" justify="space-between">
        <el-col :xl="{span:9}" :lg="{span:9,offset:2}" :md="{span:9}" :sm="{span:9}" :xs="{span:9}">
          <div class="nav-left">
            <img class="logo" src="/images/logo.png" alt="" />
            <el-input
              v-model="searchRes"
              class="search"
              placeholder="搜索"
              :suffix-icon="Search"
            />
          </div>
        </el-col>
        <el-col :xl="7" :lg="7" :md="9" :sm="9" :xs="9" class="flex flex_align">
          <ul class="nav-list flex">
            <li class="nav-item">
              <router-link to="/" class="flex">
                <div><i class="iconfont icon-Home-Outlined"></i></div>
                <p class="title">首页</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/message" class="flex">
                <div><i class="iconfont icon-youjian_o"></i></div>
                <p class="title">消息</p>
              </router-link>
            </li>
            <li class="nav-item" style="margin: 0;">
              <router-link to="" class="flex">
                <div><i class="iconfont icon-faxian"></i></div>
                <p class="title">发现</p>
              </router-link>
            </li>
          </ul>
          <div class="line"></div>
          
          <el-dropdown v-if="store.userInfo">
            <span class="flex flex_align avatar">
              <el-avatar :size="38">
                <img
                  :src="store.userInfo.avatarUrl"
                />
              </el-avatar>
              <p class="name"> {{ store.userInfo.username }} </p>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><el-icon><User /></el-icon>个人中心</el-dropdown-item>
                <el-dropdown-item @click="logout">
                  <a href=""><el-icon><SwitchButton /></el-icon>退出登录</a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-button type="primary" v-else ><router-link to="/login" style="color:white">登录</router-link></el-button>
        </el-col>
      </el-row>
    </div>
  </nav>
</template>


<style scoped>
@import url(./Nav.css);
</style>