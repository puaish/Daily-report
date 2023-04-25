//导入创建的应用的函数
import { createApp } from 'vue'
//导入创建的仓库的函数
import { createPinia } from 'pinia'
//导入vue项目的跟组件
import App from './App.vue'
//导入路由对象
import router from './router'
//导入公共css样式
import './assets/main.css'
import {ElLoading} from "element-plus"
// rem适配插件
import "@/utils/rem"
import animated from 'animate.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//每个 Vue 应用都是通过 createApp 函数创建一个新的应用实例
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//使用Pinia 仓库插件
app.use(createPinia())
//注册路由
app.use(router)
app.use(ElLoading)
app.use(animated)
app.mount('#app')
