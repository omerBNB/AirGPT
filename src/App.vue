<template>
  <section id="main-app" class="main-container">
<<<<<<< HEAD
    <AppHeader
      v-if="!this.$route.path.includes('/stay')"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide" />
    <AppHeaderDetails
      v-if="this.$route.path.includes('/stay')"
      @onShowBackDrop="showBackDrop"
      :isWide="isWide" />
    <RouterView ref="test" @click="showFullScreeen" :class="showBackDropHome" />
=======
        <AppHeader
          v-if="!this.$route.name.includes('StayDetails')"
          @onShowBackDrop="showBackDrop"
          :isWide="isWide"
          @closeActiveModal="showFullScreeen" 
          :userSearchSpec="this.$route.query" 
          />
        <AppHeaderDetails
          v-if="this.$route.name.includes('StayDetails')"
          @onShowBackDrop="showBackDrop"
          :isWide="isWide"
          @closeActiveModal="showFullScreeen" 
          :userSearchSpec="this.$route.query" />
          <div :class="showBackDropHome" @click="showFullScreeen" >
  
          </div>
    <RouterView ref="test" />
>>>>>>> aef0ba1d731d42f34c283f3f84b874bebec4d86f
    <AppFooter />
    <UserMsg />
  </section>
</template>

<script>
import { userService } from './services/user.service'
import { store } from './store/store'
import AppHeader from './cmps/AppHeader.vue'
import UserOptions from './cmps/UserOptions.vue'
import UserMsg from './cmps/UserMsg.vue'
import AppHeaderDetails from './cmps/AppHeaderDetails.vue'
import AppFooter from './cmps/AppFooter.vue'
//
// import Datepicker from '../src/src/components/Datepicker.vue'
// import * as lang from '../src/src/locale/index'

export default {
  data() {
    return {
      currLayout: null,
      backDropisLive: false,
      isWide: true,
    }
  },
  created() {
<<<<<<< HEAD
    console.log('this.$router.params', this.$route.path)
=======
>>>>>>> aef0ba1d731d42f34c283f3f84b874bebec4d86f
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
  },
}
</script>
