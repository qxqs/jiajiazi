/*
 * @Description: 路由配置
 * @Version: 2.0
 * @Autor: zhuokunhao
 * @Date: 2022-11-15 17:04:54
 * @LastEditors: zhuokunhao
 * @LastEditTime: 2023-11-22 20:31:01
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routers = [
  {
    path: '/',
    name: 'index',
    // 重定向
    redirect: '/home',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/guestbook',
        name: 'guestbook',
        component: () => import('@/views/guestbook/index.vue'),
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message/index.vue'),
      },
      {
        path: '/intro',
        name: 'intro',
        component: () => import('@/views/intro/index.vue'),
      },
      {
        path: '/community',
        name: 'community',
        component: () => import('@/views/community/index.vue'),
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers as unknown as RouteRecordRaw[]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router;