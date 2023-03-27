import { createRouter, createWebHashHistory } from 'vue-router'

import Chat from './views/Chat.vue'
import StayIndex from './views/StayIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import StayDetails from './views/StayDetails.vue'
import StayReservation from './views/StayReservation.vue'
import StayExplore from './views/StayExplore.vue'
import StayEdit from './views/StayEdit.vue'
import Dashboard from './views/Dashboard.vue'
import Reservation from './views/Reservation.vue'
import Listings from './views/Listings.vue'
import WishList from './views/WishList.vue'

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
    path: '/stay/explore',
    name: 'StayExplore',
    component: StayExplore,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'stay/edit',
        name: 'StayEdit',
        component: StayEdit,
      },
      {
        path: 'reservation',
        name: 'Reservation',
        component: Reservation,
      },
      {
        path: 'listing',
        name: 'Listings',
        component: Listings,
      },
    ]
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
    path: '/auth/login',
    name: 'LoginSignup',
    component: LoginSignup,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
  },
  {
    path: '/wishList',
    name: 'WishList',
    component: WishList,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
})
