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
              <p class="fs14">
                {{ guestsNum }} • {{ bedroomNum }} • {{ bedsNum }} • {{ bathsNum }}
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

    <!--  -->
    <DetailsReviews :stay="stay" />
    <StayMap />
  </div>
</template>

<script>
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'
import StayHeaderInfo from '../cmps/StayHeaderInfo.vue'
import StayDetailsImgs from '../cmps/StayDetailsImgs.vue'
import DetailsReviews from '../cmps/DetailsReviews.vue'
import StayMap from '../cmps/StayMap.vue'
// import DetailsCalendar from '../cmps/DetailsCalendar.vue'

export default {
  name: 'StayDetails',
  data() {
    return {
      stay: null,
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
    addEventListener('click', (ev) => {
      console.log('ev.target.offsetParent.classList', ev.target.offsetParent.classList)
      if (
        Array.from(ev.target.offsetParent.classList).includes(
          'calendar-container' || 'vc-pane-container'
        )
      ) {
        console.log('yesush')
      }
    })
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
    openCalendar() {
      console.log('open')
    },
  },
  components: {
    DetailsOrderBox,
    StayDetailsImgs,
    DetailsReviews,
    StayHeaderInfo,
    StayMap,
  },
}
</script>
