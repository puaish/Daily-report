<script setup>
import { forumAPI} from "@/http/api";
import {onMounted,ref} from "vue"
let fixedParame = { dzqSid: "85801523-1681349716759", dzqPf: "pc" };
let Forum = ref({});
const getData = function () {
  // 获取最底部数据
  forumAPI({ ...fixedParame })
    .then((res) => {
      Forum.value = res.Data;
    })
    .catch((err) => {
    });
};
onMounted(() => {
    getData();
});
</script>
<template>
    <div class="copyright" v-if="Forum.setSite">
      <div>
        <a href="/">© 2023 {{ Forum.setSite.siteName }}</a>
      </div>
      <div>
        <a href="https://discuz.chat"
          >Powered By Discuz! Q ({{ Forum.setSite.version }})</a
        >
      </div>
      <div>
        <a href="https://beian.miit.gov.cn/">{{ Forum.setSite.siteRecord }}</a>
      </div>
      <div style="padding-top: 4px">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo">
          <img src="https://www.mrbaogao.com/dzq-img/beian.png" alt="" />
          {{ Forum.setSite.siteRecordCode }}
        </a>
      </div>
    </div>
</template>

<style>
    
</style>