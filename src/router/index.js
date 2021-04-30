import {createRouter, createWebHistory} from "vue-router"
// import {createWebHistory,createWebHashHistory} from "vue-router"

// 定义路由组件 和 路由配置
const routes = [
  {
    path:'/',
    component:()=> import('../components/demo1.vue')
  },
  {
    path: '/Demo1',
    component: () => import('../components/demo1.vue'),
  },
  {
    path: '/Demo2',
    component: () => import('../components/demo2.vue'),
  },  {
    path: '/Demo3',
    component: () => import('../components/demo3.vue'),
  }, {
    path: '/Demo8',
    component: () => import('../components/demo8.vue'),
  },
]

// 创建路由实例
const router = createRouter({
  // 采用hash 模式
  // history: createWebHashHistory(),
  // 采用 history 模式
  history: createWebHistory(),
  routes, //使用上方定义的路由配置
});

// const router = new Router({ mode: 'history', routes })

// 导出路由
export default router