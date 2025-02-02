import HomeView from '@/views/tabs/home/HomeView.vue'
import MeView from '@/views/tabs/me/MeView.vue'
import OrderView from '@/views/tabs/order/OrderView.vue'
import TabsView from '@/views/tabs/TabsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        { name: 'home', path: '/home', component: HomeView },
        { name: 'order', path: '/order', component: OrderView },
        { name: 'me', path: '/me', component: MeView },
      ],
    },
  ],
})

export default router
