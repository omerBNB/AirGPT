<template>
  <header class="main-header">
    <nav>
      <RouterLink class="flex" to="/">
        <img class="logo" src="../../src/imgs/Airbnb_logo/airbnblogo.svg" alt="logo" />
        <h1 role="img" aria-label="logo">Airgpt</h1>
      </RouterLink>
    </nav>
    <section class="main-filter-header" v-if="isWideView">
      <button @click="showCurrModal('where')" class="main-filter-btn">
        {{ this.userSearchSpec.where ? this.userSearchSpec.where : 'Anywhere' }}
      </button>
      <div class="border-line"></div>
      <button @click="showCurrModal('checkin')" class="main-filter-btn">
        {{
          this.userSearchSpec.checkin
            ? this.userSearchSpec.checkin + ' - ' + this.userSearchSpec.checkout.substring(4, 6)
            : 'Any week'
        }}
      </button>
      <div class="border-line"></div>
      <button
        @click="showCurrModal('search')"
        class="main-filter-btn guests"
        :class="this.userSearchSpec.adults ? 'bold' : ''">
        {{ this.userSearchSpec.adults ? this.userSearchSpec.adults + ' guests' : 'Add guests' }}
      </button>
      <button class="search-btn">
        <div data-testid="little-search-icon">
          <svg
            viewBox="1 0 32 32"
            xmlns="https://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            ">
            <g fill="none">
              <path
                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
            </g>
          </svg>
        </div>
      </button>
    </section>
    <div class="inner-header-user">
      <RouterLink class="airgpt-your-home-link" to="/stay/edit"> Airgpt your home </RouterLink>
      <section class="loggedin-user" @click="toggleUserOptions">
        <UserOptionsNoUserLogin :hidden="UserInView" @openLogin="openLogin" v-if="!loggedInUser"/>
        <UserOptionsLoggedinUser :hidden="UserInView" @openLogin="openLogin" v-if="loggedInUser"/>
        <img
          class="burger-img"
          src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669794047/airbnb/dgxtegsrfyrdcywi0vij.png"
          alt="" />
        <div class="user-mini-section">
          <img
            class="user-img"
            :src="loggedInUser?  loggedInUser.imgUrl : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'" />
        </div>
      </section>
    </div>
    <InnerHeader
      v-if="!isWideView"
      @closeModal="closeWiderView"
      :activeModal="activateModal"
      @scroll="closeWiderView" />
  </header>
  <hr class="hr" v-if="isWideView" />
  <section class="white-bgc full" v-if="!isWideView"></section>
</template>
<script>
import UserOptionsNoUserLogin from './UserOptionsNoUserLogin.vue'
import UserOptionsLoggedinUser from './UserOptionsLoggedinUser.vue'
import InnerHeader from './InnerHeader.vue'
export default {
  props: {
    isWide: Boolean,
    userSearchSpec: Object,
  },
  data() {
    // props
    return {
      isInUserView: true,
      currChoice: 'none',
      activateModal: null,
      isUserLogin: false
    }
  },
  created() {
    window.addEventListener('scroll',this.closeWiderView)
  },
  unmounted () {
    window.removeEventListener('scroll', this.closeWiderView);
  },
  methods: {
    toggleUserOptions() {
      this.isInUserView = !this.isInUserView
    },
    showCurrModal(modalName) {
      this.$emit('onShowBackDrop')
      this.activateModal = modalName
    },
    closeWiderView() {
      this.$emit('closeActiveModal')
    },
    openLogin(){
      this.isUserLogin = true
      this.$emit('showLoginModal',this.isUserLogin)
    }
  },
  computed: {
    loggedInUser() {
      // console.log('this.$store.getters.loggedinUser',this.$store.getters.loggedinUser)
      return this.$store.getters.loggedinUser
    },
    isWideView() {
      return this.isWide
    },
    UserInView() {
      return this.isInUserView
    },
    currModalState() {
      return this.activateModal
    },
  },
  components: {
    UserOptionsNoUserLogin,
    UserOptionsLoggedinUser,
    InnerHeader,
  },
  emits: ['onShowBackDrop', 'closeActiveModal','showLoginModal'],
}
</script>
