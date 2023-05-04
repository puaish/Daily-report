<script setup>
import { forumAPI, genqrcodeAPI, LoginAPI } from "@/http/api";
import { onMounted, ref, reactive,onUnmounted } from "vue";
import Copyright from "@/components/Copyright/Copyright.vue";
import { View } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
let fixedParame = { dzqSid: "85801523-1681349716759", dzqPf: "pc" };
const router = useRouter();

let Forum = ref({});
// 二维码数据
let EQData = ref({});
// 切换登录类型 1微信登录 2用户名登录
let LoginType = ref(1);
// 是否过期
let IsExpire = ref(false);
// 账号密码
const formLabelAlign = reactive({
  name: "",
  password: "",
});
const getData = function () {
  // 获取最底部数据
  forumAPI({ ...fixedParame })
    .then((res) => {
      Forum.value = res.Data;
    })
    .catch((err) => {
    });
    genqrCode();
};
// 获取二维码
function genqrCode() {
  genqrcodeAPI({
    type: "pc_login",
    redirectUri: "https://www.mrbaogao.com/user/wx-authorization?type=pc",
    ...fixedParame,
  })
    .then((res) => {
      EQData.value = res.Data;
    })
    .catch((err) => {
    });
}
// 轮询查看用户是否登录
var PollingCount = 0;
var Polling = null
const isLogin = function () {
  Polling = setInterval(() => {
    LoginAPI({ sessionToken: EQData.value.sessionToken, ...fixedParame })
      .then((res) => {
        PollingCount++;
        if (PollingCount >= 70) {
            IsExpire.value = true;
            clearInterval(Polling);
        }
        if (res.Code != -7002) {
          clearInterval(Polling);
        }
        if (res.Code == 0) {
            clearInterval(Polling);
            localStorage.setItem("accessToken",res.Data.accessToken)
            localStorage.setItem("userId",res.Data.userId)
            router.push({path: "/"})
        }
      })
      .catch((err) => {
      });
  }, 2200);
};
// 重新获取二维码
const RefreshClick = function() {
    IsExpire.value = false;
    PollingCount = 0;
    // 获取二维码
    genqrCode();
    // 轮询是否登录
    isLogin();
}

onMounted(() => {
  getData();
  isLogin()
});
onUnmounted(() => {
  clearInterval(Polling);
});
</script>
<template>
  <div class="login">
    <div class="login-content">
      <div class="login-box">
        <div v-if="LoginType==1">
          <div class="title">微信登录</div>
          <div class="QRCode-box">
            <div class="QRCode" :style="{filter:IsExpire?'blur(1px)':'none'}">
              <img class="QRCode-img" :src="EQData.base64Img" alt="" />
            </div>
            <div class="QRCode-shadow" v-if="IsExpire">
              <el-icon size="50" @click="RefreshClick"><Refresh /></el-icon>
            </div>
            <p class="login-alter" v-if="IsExpire">二维码已过期，请点击刷新</p>
            <p class="login-alter" v-else>请使用微信，扫码登录</p>
          </div>
        </div>
        <div v-else>
          <div class="title">用户名登录</div>
          <div class="user-login">
            <el-form
              label-position="top"
              label-width="100px"
              :model="formLabelAlign"
              style="max-width: 300px;"
            >
              <el-form-item label="用户名" required style="margin-bottom: 24px;">
                <el-input
                  placeholder="输入您的用户名"
                  v-model="formLabelAlign.name"
                  clearable
                />
              </el-form-item>
              <el-form-item label="登录密码" required style="margin-bottom: 24px;">
                <el-input
                  placeholder="输入您的登录密码"
                  v-model="formLabelAlign.password"
                  show-password
                />
              </el-form-item>
              <el-form-item style="max-width: 300px">
                <el-button style="width: 100%;height: 36px;" type="info"  @click="onSubmit">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="other">其他登录方式</div>
        <div class="other-icon">
            <span class="icon" v-if="LoginType==1" @click="()=>LoginType=2">
                <el-icon size="25" color="rgb(64, 132, 255)"><UserFilled /></el-icon>
            </span>
            <span class="icon" v-else @click="()=>LoginType=1">
                <i class="iconfont icon-weixin wx"></i>
            </span>
        </div>
        <div class="xieyi">
          注册登录即表示您同意<router-link to="">《注册协议》</router-link>
          <router-link to="">《隐私协议》</router-link>
        </div>
      </div>
    </div>
    <Copyright />
  </div>
</template>

<style>
@import url(./LoginView.css);
</style>