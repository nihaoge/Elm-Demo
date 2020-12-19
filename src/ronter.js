import Vue from 'vue'
//引入vue
import VueRouter from 'vue-router'
//引入vue-router
Vue.use(VueRouter) // 在vue中使用vue-router

import elm from '../src/components/elm.vue'
import faxian from '../src/components/views/faxian.vue'
import dindan from "../src/components/views/dindan.vue"
import wode from "../src/components/views/wode.vue"


import fax1 from "../src/components/views/fax1.vue"
import fax2 from "../src/components/views/fax2.vue"

import xq from "../src/components/views/xq.vue"

import login from "../src/components/views/login.vue"
import money from "../src/components/views/money.vue"

const router = new VueRouter({
    routes: [{
            path: '/elm',
            component: elm
        },
        {
            path: '/faxian',
            component: faxian,
            children: [{
                    path: 'fax1',
                    component: fax1
                },
                {
                    path: 'fax2',
                    component: fax2
                },
                {
                    path: '/faxian',
                    redirect: '/faxian/fax1'
                }

            ]
        },
        {
            path: '/dindan',
            component: dindan
        },
        {
            path: '/wode',
            component: wode
        },
        {
            //跳转首页+
            path: '/',
            redirect: '/elm'
        },
        {
            //动态路由
            path: "/xq/:id",
            component: xq

        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/money',
            component: money
        }
    ]
})
import {
    islog
} from './util/index'

//路由守卫 全局路由守卫
// let islog = false
//判断登入
router.beforeEach((to, from, next) => {
    if (to.path === '/dindan') {
        if (!islog) {
            //如果用户没有登入跳至\login
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
//抛出变量