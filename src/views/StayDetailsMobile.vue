<template>
  <StayImgPreview class="imgs-details-carusell full" :imgs="stay.imgUrls" />
  <main v-if="stay" class="stay-details-mobile">
    <StayHeaderInfoMobile :stay="stay" />
    <!-- Details-container -->
    <section class="details-container-mobile">
      <!-- ferrites -->
      <div class="stay-ferrites-mobile">
        <div class="ferrites-header-mobile">
          <div class="header-text">
            <h3>Entire amazing views hosted by {{ stay.host.fullname }}</h3>
            <p>{{ guestsNum }} • {{ bedroomNum }} • {{ bedsNum }} • {{ bathsNum }}</p>
          </div>
          <img :src="stay.host.thumbnailUrl" />
        </div>

        <div class="ferrites-main">
          <div v-if="stay.host.isSuperHost" class="line">
            <img src="../../src/imgs/ferrites_imgs/superhost.svg" />
            <div class="text">
              <h4>{{ stay.host.fullname }} is a Superhost</h4>
              <p>
                Superhosts are experienced, highly rated hosts who are committed to providing great
                stays for guests.
              </p>
            </div>
          </div>
          <div class="line">
            <img src="../../src/imgs/ferrites_imgs/checkin.svg" />
            <div class="text">
              <h4>Great check-in experience</h4>
              <p>100% of recent guests gave the check-in process a 5-star rating.</p>
            </div>
          </div>

          <div class="line">
            <img src="../../src/imgs/ferrites_imgs/location.svg" />
            <div class="text">
              <h4>Free cancellation for 48 hours.</h4>
            </div>
          </div>
        </div>

        <!-- aircover -->
        <section class="aircover">
          <img src="../../src/imgs/aircover_logo/aircover_logo.webp" alt="aircover" />
          <p>
            Every booking includes free protection from Host cancellations, listing inaccuracies,
            and other issues like trouble checking in.
          </p>
          <a href="">Learn more</a>
        </section>

        <!-- ameneties -->
        <section class="ameneties">
          <h3>What this place offers</h3>
          <div class="offers grid">
            <div v-for="amenitie in stay.amenities" class="offer" style="align-items: center">
              <img
                :src="`https://res.cloudinary.com/dvah7ijav/image/upload/v1684671529/${amenitie}.svg`" />
              <p>{{ amenitie }}</p>
            </div>
          </div>
        </section>
      </div>

      <DetailsOrderBox
        style="
          position: fixed;
          z-index: 900;
          top: 0;
          right: 5%;
          background-color: white;

          width: 100%;
        "
        v-if="reverveClicked"
        :searchDetails="searchDetails"
        :stay="stay" />
    </section>
  </main>

  <!-- <DetailsReviewsMobile :stay="stay" /> -->

  <section style="margin: 0" class="map">
    <h3 style="margin: 15px">Where you'll be</h3>
    <GoogleMap style="width: 85%; height: 85%; margin: auto" :stay="stay" />

    <div class="place-details-txt">
      <h3>{{ stay.loc.city }}, {{ stay.loc.country }}</h3>
      <p>{{ stay.summary }}</p>
    </div>
  </section>

  <StayDetailsMobileFooter @openReserve="openReserve" />
</template>

<script>
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'
import StayHeaderInfoMobile from '../cmps/StayHeaderInfoMobile.vue'
import StayDetailsMobileFooter from '../cmps/StayDetailsMobileFooter.vue'

import StayDetailsImgs from '../cmps/StayDetailsImgs.vue'
import DetailsReviewsMobile from '../cmps/DetailsReviewsMobile.vue'
import GoogleMap from '../cmps/GoogleMap.vue'
import StayImgPreview from '../cmps/StayImgPreview.vue'

export default {
  name: 'StayDetailsMobile',
  data() {
    return {
      stay: null,
      searchDetails: null,
      reverveClicked: false,
    }
  },

  computed: {
    guestsNum() {
      if (this.stay.capacity === 1) return '1 guest'
      return this.stay.capacity + ' guests'
    },
    bedsNum() {
      if (this.stay.equipment.bedsNum === 1) return '1 bed'
      return this.stay.equipment.bedsNum + ' beds'
    },
    bedroomNum() {
      if (this.stay.equipment.bedroomNum === 1) return '1 bedroom'
      return this.stay.equipment.bedroomNum + ' bedrooms'
    },

    bathsNum() {
      if (this.stay.equipment.bathNum === 1) return '1 bath'
      return this.stay.equipment.bathNum + ' baths'
    },
  },
  async created() {
    const { stayId } = this.$route.params
    const stay = await this.$store.dispatch({ type: 'getStay', stayId })
    this.stay = stay
    const { where } = this.$route.query
    if (!where) {
      this.searchDetails.where = this.stay.loc.country
    }
  },

  mounted() {
    const currRoute = this.$route.path
    if (currRoute.includes('stay')) {
      document.getElementById('main-app').classList.value = 'main-container details-grid-mobile'
    }
    this.searchDetails = this.$route.query
    const { adults, children, infants, pets } = this.$route.query

    this.searchDetails.guestNum = +adults + +children + +infants + +pets
  },

  methods: {
    async loadStay() {
      const { stayId } = this.$route.params
      this.$store.dispatch({ type: 'getStay', stayId: stayId })
    },

    openReserve() {
      this.reverveClicked = !this.reverveClicked
    },
  },

  watch: {
    stay() {
      console.log('stay', this.stay)
    },
  },
  components: {
    DetailsOrderBox,
    StayDetailsImgs,
    DetailsReviewsMobile,
    StayHeaderInfoMobile,
    GoogleMap,
    StayImgPreview,
    StayDetailsMobileFooter,
  },
}
</script>
