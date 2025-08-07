import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
    },
    {
      path: '/movie/:type', // movie/now_playing , movie/upcoming
      name: 'movieList',
      component: () => import('../views/ListView.vue'),
    },
  ],
  // 페이지 전환이 일어났을 때 항상 스크롤을 위쪽으로 이동할 수 있도록
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router