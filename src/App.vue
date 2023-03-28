<template>
  <section id="main-app" class="main-container">
    <AppHeader
      v-if="!this.$route.name?.includes('StayDetails')"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide"
      @closeActiveModal="showFullScreeen"
      :userSearchSpec="this.$route.query"
      @showLoginModal="showLoginModal" />
    <AppHeaderDetails
      v-if="this.$route.name?.includes('StayDetails')"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide"
      @closeActiveModal="showFullScreeen"
      :userSearchSpec="this.$route.query" />
    <div :class="showBackDropHome" @click="showFullScreeen"></div>
    <LoginSignup v-if="loginModalOpen" @loginSuccess="loginSuccess" />
    <div :class="showBackDropHome" @click="showFullScreeen"></div>
    <RouterView/>
    <AppFooter />
    <UserMsg />
  </section>
</template>

<script>
import { userService } from './services/user.service'
import { store } from './store/store'
import AppHeader from './cmps/AppHeader.vue'
import UserOptions from './cmps/UserOptionsNoUserLogin.vue'
import UserMsg from './cmps/UserMsg.vue'
import AppHeaderDetails from './cmps/AppHeaderDetails.vue'
import AppFooter from './cmps/AppFooter.vue'
import LoginSignup from './views/LoginSignup.vue'
//
// import Datepicker from '../src/src/components/Datepicker.vue'
// import * as lang from '../src/src/locale/index'

export default {
  data() {
    return {
      currLayout: null,
      backDropisLive: false,
      isWide: true,
      loginModalOpen: null,
    }
  },
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user) store.commit({ type: 'setLoggedinUser', user })
  },
  methods: {
    showBackDrop() {
      this.isWide = false
      this.backDropisLive = true
    },
    showFullScreeen() {
      this.isWide = true
      this.backDropisLive = false
    },
    showLoginModal(isUserLogin) {
      this.loginModalOpen = isUserLogin
    },
    loginSuccess() {
      this.loginModalOpen = false
    },
  },
  computed: {
    currentLayout() {
      return {
        'main-container': this.currLayout,
      }
    },
    showBackDropHome() {
      return {
        'screen-shadow': this.backDropisLive,
      }
    },
  },
  components: {
    AppHeader,
    AppHeaderDetails,
    UserMsg,
    UserOptions,
    AppFooter,
    LoginSignup,
  },
}
</script>
