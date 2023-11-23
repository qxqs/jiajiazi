<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhuokunhao
 * @Date: 2023-11-22 16:59:48
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-11-23 16:21:30
-->
<template>
  <div class="page">
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.jpg" alt="">
      </div>
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @select="handleClick" />
      <a-input v-model:value="userName" placeholder="关键字查询" class="search">
      <template #suffix>
        <SearchOutlined />
      </template>
    </a-input>
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items2" @select="handleClick" />
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script lang='ts' setup>
import { h, ref, watch } from 'vue';
import { HomeOutlined, MailOutlined, BellOutlined, UserOutlined,SearchOutlined,FileTextOutlined,InboxOutlined } from '@ant-design/icons-vue';
import { useRouter ,useRoute} from 'vue-router';
const router = useRouter();
const route = useRoute();
const current = ref<string[]>(['/home']);
const items = ref<any>([
  {
    key: '/home',
    icon: () => h(HomeOutlined),
    label: '首页',
    title: '首页',
  },
  {
    key: '/guestbook',
    icon: () => h(MailOutlined),
    label: '留言板',
    title: '留言板',
  },
  {
    key: '/intro',
    icon: () => h(FileTextOutlined),
    label: '佳佳子简介',
    title: '佳佳子简介',
  },
]);
const items2 = ref<any>([
  {
    key: '/community',
    icon: () => h(InboxOutlined),
    label: '社区',
    title: '社区',
  },
  {
    key: '/message',
    icon: () => h(BellOutlined),
    label: '消息',
    title: '消息',
  },
  {
    key: '/mine',
    icon: () => h(UserOutlined),
    label: '个人中心',
    title: '个人中心',
  },
]);

const handleClick = (menu:any)=>{
  let {  key } = menu
  router.push(key)
}
watch(()=>route,(val)=>{
  current.value = [val.path]
},{deep:true})


const userName = ref()
</script>

<style scoped lang="less">
.page {
  padding-top: 50px;
  height: 100%;
  .header {
    position: fixed;
    padding: 0 200px;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    display: flex;
    align-items: center;
    z-index: 99;
    justify-content: space-between;
    .logo{
      height: 95%;
      img{
        border-radius: 50%;
        height: 100%;
      }
    }
    .search{
      border-radius: 999px;
    }
  }
}
.page-in{
  height: calc(100% - 40px);
}
</style>
