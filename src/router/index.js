import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Publish from '@/views/publish'
import Article from '@/views/article'
// 首页和登录页面是不需要按需加载的 进入页面的时候就加载 所以使用先引入的方式
Vue.use(VueRouter)
const routes = [
  // 设置默认显示
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/publish',
        component: Publish
      },
      {
        path: '/article',
        component: Article
      }

    ]

  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
