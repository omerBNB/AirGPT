<template>
  <div v-if="stay">
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
              <p>
                {{ stay.capacity }} guests • {{ stay.equipment.bedroomNum }} bedrooms •
                {{ stay.equipment.bedsNum }} beds • {{ stay.equipment.bathNum }} baths
              </p>
            </div>
            <img :src="stay.host.imgUrl" />
          </div>
          <div class="ferrites-main">
            <div v-if="stay.host.isSuperHost" class="line">
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

        <DetailsOrderBox :stay="stay" />
      </section>
    </main>

    <DetailsReviews :stay="stay" />
  </div>
  <div>
    <!-- <datepicker v-model="date"></datepicker> -->
    <!-- <VDatePicker v-model.range="range" :columns="columns" /> -->
    <!-- <datepicker></datepicker> -->
    <!-- <Datepicker /> -->
    <!-- <datepicker placeholder="Select Date" /> -->
    <!-- <code> &lt;datepicker placeholder="Select Date"&gt;&lt;/datepicker&gt; </code> -->
  </div>
</template>

<script>
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'
import StayHeaderInfo from '../cmps/StayHeaderInfo.vue'
import StayDetailsImgs from '../cmps/StayDetailsImgs.vue'
import DetailsReviews from '../cmps/DetailsReviews.vue'
import { storageService } from '../services/async-storage.service.js'
// import Datepicker from 'vuejs-datepicker'
// import Datepicker from '../../src/src/components/Datepicker.vue'
// import { stayService } from '../services/stay.service.local.js'

export default {
  name: 'StayDetails',
  data() {
    return {
      date: null,
      stay: null,
    }
  },
  async created() {
    // this.loadStay() // DONT REMOVE PLEASE
    const { stayId } = this.$route.params
    const stay = await this.$store.dispatch({ type: 'getStay', stayId })
    this.stay = stay
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
      // if (stayId) { // DONT REMOVE PLEASE
      //   const stay = await storageService.get('stay', stayId)
      //   if (stay) this.stay = stay
      // }
      this.$store.dispatch({ type: 'getStay', stayId: stayId })
    },
  },
  components: {
    DetailsOrderBox,
    StayDetailsImgs,
    DetailsReviews,
    StayHeaderInfo,
    // Datepicker,
  },
}
</script>
