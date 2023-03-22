<template>
  <section  id="main-app" class="main-container">
    <AppHeader 
    @showBackdrop="showbackdrop"/>
    <RouterView/>
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
    }
  },
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user) store.commit({ type: 'setLoggedinUser', user })
  },
  methods:{
    showbackdrop(){
      this.$refs.test.classList += ' back-drop'
    }
  },
  computed: {
    currentLayout() {
      return {
        'main-container': this.currLayout,
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
