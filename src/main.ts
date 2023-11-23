/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhuokunhao
 * @Date: 2022-11-11 16:57:20
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-11-22 20:01:00
 */
import { createApp } from 'vue'
// 引入第三方UI组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App);
app
.use(Antd)
.use(router)
.mount('#app');

