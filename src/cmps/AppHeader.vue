<template>
  <header class="main-header">
    <nav>
      <RouterLink class="flex" to="/">
        <img class="logo" src="../../src/imgs/Airbnb logo/airbnblogo.svg" alt="logo" />
        <h1 role="img" aria-label="logo">Airgpt</h1>
      </RouterLink>
    </nav>
    <section class="main-filter-header" v-if="isWideView">
      <button @click="showWideView" class="main-filter-btn">Anywhere</button>
      <div class="border-line"></div>
      <button @click="showWideView" class="main-filter-btn">Any week</button>
      <div class="border-line"></div>
      <button @click="showWideView" class="main-filter-btn guests">Add guests</button>
      <button @click="showWideView" class="search-btn">
        <div data-testid="little-search-icon">
          <svg
            viewBox="0 0 32 32"
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
    <!-- <RouterLink to="/stay">Stays</RouterLink> -->
    <!-- <RouterLink to="/review">Reviews</RouterLink> -->
    <!-- <RouterLink to="/chat">Chat</RouterLink> -->
    <!-- <RouterLink to="/login">Login / Signup</RouterLink> -->

    <div class="inner-header-user">
      <a class="airgpt-your-home-link" href=""> Airgpt your home </a>
      <!-- <button class="i18-btn">
        <div class="i18">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="display: block; height: 16px; width: 16px; fill: currentcolor">
            <path
              d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
          </svg>
        </div>
      </button> -->
      <section class="loggedin-user" @click="toggleUserOptions">
        <UserOptions :hidden="UserInView" />
        <img
          class="burger-img"
          src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669794047/airbnb/dgxtegsrfyrdcywi0vij.png"
          alt="" />
        <!-- <RouterLink :to="`/user/${loggedInUser._id}`"> -->
        <!-- {{ loggedInUser.fullname }} -->
        <!-- </RouterLink> -->
        <!-- <span>{{ loggedInUser.score.toLocaleString() }}</span> -->
        <!-- <img :src="loggedInUser.imgUrl" /> -->
        <div class="user-mini-section">
          <img
            class="user-img"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
        </div>
      </section>
    </div>
    <InnerHeader :hidden="isWideView" />
  </header>
  <hr class="hr" v-if="isWideView" />
</template>
<script>
import UserOptions from './UserOptions.vue'
import InnerHeader from './InnerHeader.vue'
export default {
  data() {
    return {
      isWide: true,
      isInUserView: true,
    }
  },
  methods: {
    showWideView() {
      this.isWide = false
    },
    unWideView() {
      console.log('check')
    },
    toggleUserOptions() {
      this.isInUserView = !this.isInUserView
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    isWideView() {
      return this.isWide
    },
    UserInView() {
      return this.isInUserView
    },
  },
  components: {
    UserOptions,
    InnerHeader,
  },
}
</script>
