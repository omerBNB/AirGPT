<template>
  <section class="login-layout">
    <header class="login-title-cont">
      <h2>Log in or sign up</h2>
    </header>
    <form class="login-main-content">
      <h3>Welcome to Airgpt</h3>
      <div class="login-form-cont">
        <input
          autocomplete="username"
          placeholder="Username"
          v-model="loginCred.username"
          />
        <div class="form-line"></div>
        <input
          placeholder="Password"
          type="password"
          autocomplete="password"
          v-model="loginCred.password"
           />
      </div>
      <button class="btn-container" @click="doLogin">Log in</button>
      <div class="login-or-line"></div>
      <div class="login-line-text">or</div>
      <button class="btn-container">Continue as a guest</button>
      <!-- <div class="move-to-signup">Don't have an acount yet? sign up</div> -->
    </form>
    <!---->
  </section>
  <section class="shadow-fullscreen"></section>
</template>

<script>
import ImgUploader from '../cmps/ImgUploader.vue'

export default {
  name: 'login-signup',
  data() {
    return {
      msg: '',
      loginCred: { username: 'user1', password: 123 },
      signupCred: { username: '', password: '', fullname: '', imgUrl: '' },
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
  },
  created() {
    this.loadUsers()
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = 'Please enter username/password'
        return
      }
      try {
        await this.$store.dispatch({ type: 'login', userCred: this.loginCred })
        this.$router.push('/')
         this.$emit('loginSuccess')
      } catch (err) {
        console.log(err)
        this.msg = 'Failed to login'
      }
    },
    doLogout() {
      this.$store.dispatch({ type: 'logout' })
    },
    async doSignup() {
      if (!this.signupCred.fullname || !this.signupCred.password || !this.signupCred.username) {
        this.msg = 'Please fill up the form'
        return
      }
      await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
      this.$router.push('/')
    },
    loadUsers() {
      this.$store.dispatch({ type: 'loadUsers' })
    },
    async removeUser(userId) {
      try {
        await this.$store.dispatch({ type: 'removeUser', userId })
        this.msg = 'User removed'
      } catch (err) {
        this.msg = 'Failed to remove user'
      }
    },
    onUploaded(imgUrl) {
      this.signupCred.imgUrl = imgUrl
    },
  },
  emits:['loginSuccess'],
  components: {
    ImgUploader,
  },
}
</script>

<!-- style="
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC');
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: 16px 18px;
            background-position: 98% 50%;
            cursor: auto;
          " -->