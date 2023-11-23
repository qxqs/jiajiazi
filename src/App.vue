<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhuokunhao
 * @Date: 2022-11-11 16:57:20
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-11-23 10:21:22
-->
<template>
  <ConfigProvider :locale="zh_CN" :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }">
    <router-view></router-view>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zh_CN from "ant-design-vue/es/locale/zh_CN";
</script>

<style scoped lang="less">

</style>
