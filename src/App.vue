<template>
  <section id="main-app" class="main-container">
    <AppHeader
      v-if="!this.$route.name?.includes('StayDetails') && width > 744"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide"
      @closeActiveModal="showFullScreeen"
      :userSearchSpec="this.$route.query"
      @showLoginModal="showLoginModal" />
    <AppHeaderDetails
      v-if="this.$route.name?.includes('StayDetails') && width > 744"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide"
      @closeActiveModal="showFullScreeen"
      :userSearchSpec="this.$route.query"
      @showLoginModal="showLoginModal" />
    <AppHeaderMobile
      v-if="!this.$route.name?.includes('StayDetails') && width > 320 && width < 744"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide"
      @closeActiveModal="showFullScreeen"
      :userSearchSpec="this.$route.query"
      @showLoginModal="showLoginModal" />
    <LoginSignup v-if="loginModalOpen" @loginSuccess="loginSuccess" />
    <div :class="showBackDropHome" @click="showFullScreeen"></div>
    <RouterView />
    <AppFooter v-if="width > 744" />
    <AppFooterMobile v-if="width > 320 && width < 744" />
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
import { eventBus } from '../src/services/event-bus.service.js'
import AppHeaderMobile from './cmps/AppHeaderMobile.vue'
import AppFooterMobile from './cmps/AppFooterMobile.vue'
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
      windowWidth: window.innerWidth,
      width: document.documentElement.clientWidth,
    }
  },
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user) store.commit({ type: 'setLoggedinUser', user })
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.getDimensions)
  },
  methods: {
    showBackDrop() {
      console.log('this.backDropisLive',this.backDropisLive)
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
    getDimensions() {
      this.width = document.documentElement.clientWidth
    },
  },
  mounted() {
    eventBus.on('openLoginModal', () => (this.loginModalOpen = true))
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
    AppHeaderMobile,
    AppFooterMobile,
  },
}
</script>
