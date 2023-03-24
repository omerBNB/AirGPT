<template>
  <div v-if="stay" class="details-layout">
    <main class="stay-details">
      <StayHeaderInfo :stay="stay" />
      <StayDetailsImgs :stay="stay" />

      <!-- Details-container -->
      <section class="details-container">
        <!-- ferrites -->
        <div class="stay-ferrites">
          <div class="ferrites-header">
            <div class="header-text">
              <h3>Entire amazing views hosted by {{ stay.host.fullname }}</h3>
              <p>5 guests • 5 bedrooms • 10 beds • 3 baths</p>
            </div>
            <img :src="stay.host.imgUrl" />
          </div>
          <div class="ferrites-main">
            <div class="line">
              <img src="../../src/imgs/ferrites_imgs/superhost.svg" />
              <div class="text">
                <h4>{{ stay.host.fullname }} is a Superhost</h4>
                <p>
                  Superhosts are experienced, highly rated hosts who are committed to providing
                  great stays for guests.
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
            <!-- <img src="../../imgs_test/aircover_logo.webp" alt="" srcset="" /> -->
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
              <div v-for="amenitie in stay.amenities" class="offer">
                <img :src="'../../src/imgs/amenities/' + amenitie.toLowerCase() + '.svg'" />
                <p>{{ amenitie }}</p>
              </div>
            </div>
          </section>
        </div>

        <DetailsOrderBox />
      </section>
    </main>

    <DetailsReviews :stay="stay" />
  </div>
</template>

<script>
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'
import StayHeaderInfo from '../cmps/StayHeaderInfo.vue'
import StayDetailsImgs from '../cmps/StayDetailsImgs.vue'
import DetailsReviews from '../cmps/DetailsReviews.vue'
import { stayService } from '../services/stay.service.local'

export default {
  name: 'StayDetails',
  data() {
    return {
      stay: null,
    }
  },
  created() {
    this.loadStay()
  },
  mounted() {
    const currRoute = this.$route.path
    if (currRoute.includes('stay')) {
      document.getElementById('main-app').classList.value = 'main-container details-grid'
    }
  },
  methods: {
    async loadStay() {
      const { stayId } = this.$route.params
      if (stayId) {
        let stay = await stayService.getById(stayId)
        if (stay) this.stay = stay
      }
    },
    components: {
      DetailsOrderBox,
      StayDetailsImgs,
      DetailsReviews,
      StayHeaderInfo,
    },
  }
}
</script>
