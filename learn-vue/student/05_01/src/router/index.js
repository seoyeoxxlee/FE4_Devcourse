import HomeView from "@/views/HomeView.vue";
// import AboutView from "@/views/AboutView.vue";

import { createRouter, createWebHistory,  } from "vue-router";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
            redirect: 'about'
        },
        {
            path: '/about',
            name: 'about',
            components: {
                header: () => import('../views/dashboard/DashboardView.vue'),
                default: () => import('../views/AboutView.vue'),
                footer: () => import('../views/dashboard/DashboardSettingView.vue')
            },
            // component: () => import('../views/AboutView.vue'),
            props: {
                header: true,
                default: false,
                footer: true,
            },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/dashboard/DashboardView.vue'),
            children: [
                {
                    path: '',
                    component: () => import('../views/dashboard/DashboardHomeView.vue'),
                },
                {
                    path: 'setting',
                    component: () => import('../views/dashboard/DashboardSettingView.vue'),
                },
            ]
        },



        {
            path: '/product/:orderId',
            name: 'productDetail',
            component: () => import('../views/OrderView.vue'),
        },

        // 정규식 응용
        // product/1 product/2 ... ok
        // product/bag product/shoose ... not ok
        {
            path: '/product/:orderId(\\d+)',
            name: 'productDetail',
            component: () => import('../views/OrderView.vue'),
            redirect: (to) => {
                return {name: 'detail' ,params: {id: to.params.orderId}}
            }
        },


        // 동적 세그먼트
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('../views/DetailView.vue'),
            props: true,
        },
        // wildcard segment
        {
            // vue에서 404 페이지를 다루는 작성법
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        },
        // 404 이렇게도 가능
        {
            // user로 시작하는 페이지의 404 페이지를 구분할 때 
            path: '/user-:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        }
    ],
})

export default router