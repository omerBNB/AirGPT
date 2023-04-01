<template>
  <header class="main-header-mobile">
    <section class="main-filter-header-mobile" v-if="isWideView" @click="showCurrModal('where')">
      <button class="search-btn-mobile">
        <div data-testid="little-search-icon-mobile">
          <svg
            viewBox="1 5 26 22"
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
      <button class="main-filter-btn-mobile">
        <h3 class="main-filter-btn-mobile-h3">
          {{ this.userSearchSpec.where ? this.userSearchSpec.where : 'Anywhere' }}
        </h3>
        <div class="main-filter-mobile-spans">
            <span>
              {{
                this.userSearchSpec.checkin
                  ? this.userSearchSpec.checkin.substring(0, 6) +
                    ' - ' +
                    this.userSearchSpec.checkout.substring(3, 6)
                  : 'Any week'
              }}
            </span>
            <span>
              
              {{
                this.userSearchSpec.adults
                  ? +this.userSearchSpec.adults +
                    +this.userSearchSpec.children +
                    +this.userSearchSpec.infants +
                    ' guests'
                  : ' &#183  Add guests'
              }}
            </span>
        </div>
      </button>
      <!-- <button @click="showCurrModal('checkin')" class="main-filter-btn"></button>

      <button
        @click="showCurrModal('search')"
        class="main-filter-btn guests"
        :class="this.userSearchSpec.adults ? 'bold' : ''">
        
      </button> -->
    </section>
    <InnerHeaderMobile
      v-if="!isWideView"
      @closeModal="closeWiderView"
      :activeModal="activateModal"
      @scroll="closeWiderView" />
  </header>
  <section class="white-bgc-mobile full" v-if="!isWideView"></section>
  <!-- <hr class="hr" v-if="isWideView" /> -->
</template>
<script>
import UserOptionsNoUserLogin from './UserOptionsNoUserLogin.vue'
import UserOptionsLoggedinUser from './UserOptionsLoggedinUser.vue'
import InnerHeaderMobile from './InnerHeaderMobile.vue'
// import LabelsPreview from './LabelsPreview.vue'
import { stayService } from '../services/stay.service'

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
      isUserLogin: false,
      labels: stayService.labels(), 
    }
  },
  created() {
    window.addEventListener('scroll', this.closeWiderView)
  },
  unmounted() {
    window.removeEventListener('scroll', this.closeWiderView)
  },
  methods: {
    toggleUserOptions() {
      this.isInUserView = !this.isInUserView
    },
    onClickOutside(target) {},
    showCurrModal(modalName) {
      this.$emit('onShowBackDrop')
      this.activateModal = modalName
    },
    closeWiderView() {
      this.$emit('closeActiveModal')
    },
    openLogin() {
      this.isUserLogin = true
      this.$emit('showLoginModal', this.isUserLogin)
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
    currModalState() {
      return this.activateModal
    },
  },
  components: {
    UserOptionsNoUserLogin,
    UserOptionsLoggedinUser,
    InnerHeaderMobile,
  },
  emits: ['onShowBackDrop', 'closeActiveModal', 'showLoginModal'],
}
</script>
