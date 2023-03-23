<template>
  <section id="main-app" class="main-container" >
    <AppHeader @onShowBackDrop="showBackDrop" :isWide="isWide"/>
    <RouterView ref="test"  :class="showBackDropHome" @click="showFullScreeen" />
    <UserMsg />
  </section>
</template>

<script>
import { userService } from './services/user.service'
import { store } from './store/store'
import AppHeader from './cmps/AppHeader.vue'
import UserOptions from './cmps/UserOptions.vue'
import UserMsg from './cmps/UserMsg.vue'

export default {
  data() {
    return {
      currLayout: null,
      backDropisLive: false,
      isWide:true
    }
  },
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user) store.commit({ type: 'setLoggedinUser', user })
  },
  methods:{
    showBackDrop(){
      this.isWide = false
      this.backDropisLive = true
    },
    showFullScreeen(){
      this.isWide = true
      this.backDropisLive = false
    }
  },
  computed: {
    currentLayout() {
      return {
        'main-container': this.currLayout,
      }
    },
    showBackDropHome(){
      return {
        'screen-shadow': this.backDropisLive === true
      }
    },
  },
  components: {
    AppHeader,
    UserMsg,
    UserOptions,
  },
}
</script>
