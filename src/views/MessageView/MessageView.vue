<script setup>
import { ref } from "vue";
const steps = [
  { title: "我的私信", icon: "message" },
  { title: "账号消息", icon: "lingdang" },
  { title: "财务通知", icon: "money" },
  { title: "帖子通知", icon: "post" },
];
const currentStep = ref(0);
// step点击事件
const stepClick = function (index) {
  currentStep.value = index;
};
</script>
<template>
  <div class="message flex">
    <!-- 左侧内容 -->
    <div class="message-left">
      <div>
        <div class="message-title flex">
          <div style="margin-right: 6px">
            <img
              width="23"
              :src="`/src/assets/${steps[currentStep].icon}.svg`"
              alt=""
            />
          </div>
          <div class="my-message">{{ steps[currentStep].title }}</div>
          <div class="record">共有<span>0</span>条记录</div>
        </div>
      </div>
      <div class="message-left-content">
        <div class="empty">
          <div class="empty-box">
            <div class="empty-body">
              <span>没有更多内容了</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧内容 -->
    <div class="message-right">
      <div class="steps">
        <div class="steps-box">
          <el-steps direction="vertical">
            <el-step
              v-for="(item, index) in steps"
              :key="index"
              :class="{ 'active-step': currentStep === index }"
            >
              <template #icon>
                <img
                  class="icon"
                  src="@/assets/select-circle.svg"
                  alt=""
                  v-if="currentStep === index"
                />
                <img
                  class="icon"
                  @click="stepClick(index)"
                  src="@/assets/circle.svg"
                  alt=""
                  v-else
                />
              </template>
              <template #title>
                <div class="flex">
                  <img
                    class="title-icon"
                    :src="`/src/assets/${item.icon}.svg`"
                    alt=""
                  />
                  <div class="title">{{ item.title }}</div>
                </div>
              </template>
            </el-step>
          </el-steps>
        </div>
      </div>
      <div class="follower">
        <div class="follower-title">
            <div class="follower-title-box">
                <span style="font-size: 16px;color: #0b0b37;font-weight: 700;">关注</span>
                <span style="font-size: 12px;color: #8590a6;margin-left: 8px;">1</span>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>
@import url(./MessageView.css);
</style>