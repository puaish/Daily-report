<script setup>
import '@wangeditor/editor/dist/css/style.css' 
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {defineProps,ref, watch} from "vue"
  const props = defineProps({
    data: Array
})
const data = ref(props.data);
const editorOption = ref({})
const content = '<h2>I am Example</h2>';
watch(() => props.data, (nv, ov) => { 
  data.value = nv 
}); 
</script>
<template>
  <el-card :body-style="{ paddingBottom: 0 }" style="margin-bottom: 10px;" v-for="(item,index) in data">
    <div class="content-list">
      <div class="content-list-item">
        <!-- 帖子标题 -->
        <div class="item-title flex">
          <div class="item-title-box flex">
            <div class="user-avatar">
              <img
                class="avatar"
                :src="item.user.avatar"
                alt=""
              />
            </div>
            <div class="user-info flex">
              <div class="user-name flex">
                <div class="nickname hideEllipsis">{{ item.user.nickname }}</div>
                <div class="user-type hideEllipsis">
                  <div class="type">{{ item.group.groupName }}</div>
                </div>
              </div>
              <div class="user-date flex">
                <span class="date">{{ item.user.joinedAt }}</span>
                <div class="icon-box">
                  <el-icon><View /></el-icon><span>{{ item.viewCount }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 帖子中间部分 -->
        <div class="item-body" >
          <h1 class="post-title hideEllipsis">
            {{ item.title }}
          </h1>
          <div class="post-content" v-if="!item.content.text&&item.content.indexes[101].body[0]">
            <el-row v-if="item.content.indexes[101].body[0].fileWidth > 1000">
              <el-col :span="24" class="img-box2">
                <div class="img-m">
                  <img
                    class="content-img"
                    :src="item.content.indexes[101].body[0].thumbUrl"
                    alt=""
                  />
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="16" class="img-box" v-if="item.content.indexes[101].body[0].fileWidth < 1000">
                <div class="img-m">
                  <img
                    class="content-img"
                    :src="item.content.indexes[101].body[0].thumbUrl"
                    alt=""
                  />
                </div>
              </el-col>
              <el-col :span="item.content.indexes[101].body[0].fileWidth > 1000? 24 : 8" class="img-box" :class="{'img-box-flex': item.content.indexes[101].body[0].fileWidth > 1000 }">
                <template v-for="(url,index) in item.content.indexes[101].body" :key="index">
                  <div class="img-m2" v-if="index != 0">
                    <img
                      class="content-img"
                      :src="url.thumbUrl"
                      alt=""
                    />
                  </div>
                </template>
              </el-col>
            </el-row>
          </div>
          <div class="post-content" v-if="item.content.text">
            <el-row>
              <el-col :span="24" class="img-box2">
                <div class="img-m">
                  <Editor
                    v-model="item.content.text"
                    :defaultConfig="editorConfig"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="file-box" v-if="item.content.indexes[108]" v-for="(file,index) in item.content.indexes[108].body" :key="index">
            <div class="file-padding">
              <div class="file-content">
                <div class="file">
                  <img
                    class="file-icon"
                    src="https://www.mrbaogao.com/assets/pdf-outlined.e06cb6e0559e2f2abebaa07a54ff3b34b05a4165.png"
                    alt=""
                  />
                  <div class="file-info">
                    <span class="file-name hideEllipsis"
                      >{{ file.fileName }}</span
                    >
                    <span class="file-size">{{ (file.fileSize/1000000).toFixed(2) }} M</span>
                  </div>
                </div>
                <div class="file-fun">
                  <span>链接</span>
                  <span style="margin-left: 16px">查看</span>
                  <!-- <a :href="file.thumbUrl"></a> -->
                </div>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 24px"></div>
        </div>
        <div>
          <div class="thumbsUp-comment-share flex">
            <div class="thumbsUp">
              <div class="icon-num">
                <i class="iconfont icon-dianzan"></i>
                <span v-if="!item.likeReward.likePayCount">赞</span>
                <span v-else>{{ item.likeReward.likePayCount }}</span>
              </div>
            </div>
            <div class="comment">
              <div class="icon-num">
                <i class="iconfont icon-review"></i>
                <span v-if="!item.likeReward.postCount">评论</span>
                <span v-else>{{ item.likeReward.postCount }}</span>
              </div>
            </div>
            <div class="share">
              <div class="icon-num">
                <i class="iconfont icon-fenxiang"></i>
                <span v-if="!item.likeReward.shareCount">分享</span>
                <span v-else>{{ item.likeReward.shareCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style>
@import url(./PostView.css);
</style>