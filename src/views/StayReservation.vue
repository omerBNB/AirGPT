<template>
  <div v-if="stay">
    <section class="stay-reservation">
      <h1 class="title">Your order has been sent to host</h1>
      <section class="reservation-info-container">
        <section class="info grid">
          <div class="wont-confirm">
            <h3>Attention!</h3>
            <p>
              Your reservation won't be confirmed until the host accepts your request (within 24
              hours)
            </p>
            <span>You won't be charged until then.</span>
          </div>

          <div class="cancellation">
            <h3>Cancellation policy !</h3>
            <span>Free cancellation before Mar 26. Cancel before Mar 31 for a partial refund</span>
          </div>

          <div class="ground-rules">
            <h3>Ground rules</h3>
            <p>
              We ask every guest to remember a few simple things about what makes a great guest.
            </p>
            <ul>
              <li>Follow the house rules</li>
              <li>Treat your Host's home like your own</li>
            </ul>
          </div>

          <div class="btn-container" @click="submitOrder">
            <div class="cell" v-for="i in 100">
              <div class="content">
                <RouterLink class="action-btn" to="/trips"> Check your orders </RouterLink>
              </div>
            </div>
          </div>
        </section>

        <section class="order-container">
          <div class="reservation-modal-header grid">
            <img :src="stay.imgUrls[0]" />
            <p>{{ stay.name }}</p>
            <div>
              <img src="../imgs/svg_symbols/black_star.svg" />
              <span>{{ stay.rate }}</span>
              <span>•</span>
              <span class="underline">{{ this.stay.reviews.length || 'No' }} reviews </span>
            </div>
          </div>

          <div class="order-info">
            <div class="order-protected">
              Your booking is protected by
              <img src="../imgs/aircover_logo/aircover_logo.webp" alt="" srcset="" />
            </div>
            <!-- <hr /> -->
            <section class="price-info">
              <div>
                <p>$345 x 21 nights</p>
                <p>$7230</p>
              </div>
              <div class="price-per-night flex space-between">
                <p>Total guests</p>
                <p>{{ guestsNum }}</p>
              </div>
            </section>
            <!-- <hr /> -->
            <div class="total flex space-between">
              <p>Total after fees</p>
              <p>$7263.15</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { storageService } from '../services/async-storage.service.js'
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'

export default {
  name: 'StayReservation',
  data() {
    return {
      stay: null,
      details: null,
    }
  },
  created() {},

  mounted() {
    // Get the Layout:
    const currRoute = this.$route.path
    if (currRoute.includes('book')) {
      document.getElementById('main-app').classList.value = 'main-container details-grid'
    }

    this.loadStay()
    this.details = this.$route.query
    console.log('this.details:', this.details)
    // Get otherParams for order information:
  },
  methods: {
    async loadStay() {
      const { stayId } = this.$route.params
      const stay = await this.$store.dispatch({ type: 'getStay', stayId })
      this.stay = stay
    },
  },
  computed: {
    guestsNum() {
      const { adults, children, infants, pets } = this.details
      return +adults + +children + +infants + +pets
    },
  },

  components: {},
}
</script>
