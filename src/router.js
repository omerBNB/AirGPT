import { createRouter, createWebHashHistory } from 'vue-router'

import Chat from './views/Chat.vue'
import StayIndex from './views/StayIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import StayDetails from './views/StayDetails.vue'
import StayReservation from './views/StayReservation.vue'

const routes = [
  {
    path: '/',
    name: 'StayIndex',
    component: StayIndex,
  },
  {
    path: '/stay/:stayId?',
    name: 'StayDetails',
    component: StayDetails,
  },
  {
    path: '/book/:stayId',
    name: 'StayReservation',
    component: StayReservation,
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/login',
    name: 'LoginSignup',
    component: LoginSignup,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
})
