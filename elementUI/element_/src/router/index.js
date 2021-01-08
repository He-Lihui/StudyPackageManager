/*
 * @Descripttion: 
 * @version: 
 * @Author: helihui
 * @Date: 2021-01-08 14:33:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-08 17:03:56
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
      //   {
      //     path: '/',
      //     component: () => import('@/views/Main/FirstPage')
      //   },
       {
            path: '/main',
            component: () => import('@/views/Main/FirstPage')
        },
        {
            path: '/workbench',
            component: () => import('@/views/Work/WorkBench')
        },
        {
            path: '/',
            redirect: 'main'
        }
    ]
const router = new VueRouter({
  routes
})

export default router
