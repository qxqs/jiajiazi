<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhuokunhao
 * @Date: 2023-11-22 16:59:48
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-12-07 17:45:58
-->
<template>
  <div class="intro">
    <a-menu class="intro-menu" mode="inline" :selectedKeys="current" type="inner" @select="handleClick" :items="items" />
    <div class="intro-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { h, ref, watch } from 'vue';
import { HomeOutlined, MailOutlined, BellOutlined, UserOutlined, SearchOutlined, FileTextOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const current = ref<string[]>(['/home']);
const items = ref<any>([
  {
    key: '/home',
    icon: () => h(HomeOutlined),
    label: '佳佳子信息',
    title: '佳佳子信息',
  },
  {
    key: '/guestbook',
    icon: () => h(MailOutlined),
    label: '语音条',
    title: '语音条',
  },
  {
    key: '/intro',
    icon: () => h(FileTextOutlined),
    label: '直播回放',
    title: '直播回放',
  },
]);

const handleClick = (menu: any) => {
  let { key } = menu
  current.value = [key]
  // router.push(key)
}
watch(() => route, (val) => {
  current.value = [val.path]
}, { deep: true, immediate: true })


const userName = ref()
</script>

<style scoped lang="less">
.intro {
  height: 100%;
  display: flex;

  .intro-menu {
    width: 250px;
    height: 100%;
  }

  .intro-right {
    flex: 1;
    background-color: aquamarine;
  }
}

.account-settings-info-main {
  width: 100%;
  display: flex;
  height: 100%;
  overflow: auto;

  .account-settings-info-left {
    border-right: 1px solid #e8e8e8;
    width: 225px;
  }

  .account-settings-info-right {
    width: calc(100% - 225px);
    padding: 8px 40px;

    .account-settings-info-title {
      color: rgba(0, 0, 0, .85);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 12px;
    }
  }
}
</style>
