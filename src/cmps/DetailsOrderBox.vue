<template>
  <main>
    <section class="order-container">
      <div class="order-form-header">
        <p>
          <span class="cost">{{ formatPrice }}</span> night
        </p>

        <p class="rate bold-font">
          <img src="../imgs/svg_symbols/black_star.svg" />
          {{ stay.rate }}
          <span> • </span>
          <span class="reviews">{{ reviewsNum }}</span>
        </p>
      </div>

      <div class="order-data">
        <div class="date-picker">
          <div @click="this.calendarIsShown = true" class="date-input">
            <label>CHECK IN</label>
            <input :value="this.searchDetails.checkin" />
          </div>
          <div @click="this.calendarIsShown = true" class="date-input">
            <label>CHECK OUT</label>
            <input :value="this.searchDetails.checkout" />
          </div>
        </div>

        <div @click.stop="this.guestModalIsShown = true" class="guest-input">
          <label>GUESTS</label>
          <input :value="guestsNum" />
          <svg viewBox="0 0 320 512" width="100" title="angle-down">
            <path
              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </div>
      </div>

      <div class="btn-container" @click="submitOrder">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="content">
          <button class="action-btn">
            <span>Reserve</span>
          </button>
        </div>
      </div>
      <div>
        <p class="text-center fs14">You won't be charged yet</p>
      </div>

      <section class="price-info">
        <div class="price-per-night flex space-between">
          <p class="underline">$31 X 9 nights</p>
          <p>$279</p>
        </div>

        <div class="service-fee flex space-between">
          <p class="underline">Cleaning fee</p>
          <p>$53</p>
        </div>

        <div class="service-fee flex space-between">
          <p class="underline">Service fee</p>
          <p>$48.15</p>
        </div>
      </section>
      <hr />
      <div class="total flex space-between">
        <p>Total</p>
        <p>$327.15</p>
      </div>

      <DetailsCalendar
        v-if="calendarIsShown"
        @closeModal="closeModal"
        :checkin="info.checkin"
        :checkout="info.checkout" />

      <DetailsGuestModal
        @closeGuestModal="this.guestModalIsShown = false"
        v-if="this.guestModalIsShown" />
    </section>

    <!-- <p class="footer">Report this listing</p> -->
  </main>
</template>

<script>
import DetailsCalendar from '../cmps/DetailsCalendar.vue'
import DetailsGuestModal from '../cmps/DetailsGuestModal.vue'
export default {
  name: 'DetailsOrderBox',
  props: {
    stay: {
      type: Object,
      required: true,
    },
    searchDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stayId: null,
      calendarIsShown: false,
      guestModalIsShown: false,
      info: {},
    }
  },
  computed: {
    formatPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(this.stay.price)
    },

    reviewsNum() {
      if (this.stay.reviews.length === 1) return '1 review'
      else if (!this.stay.reviews.length) return 'no reviews'
      else return this.stay.reviews.length + ' reviews'
    },

    guestsNum() {
      return +this.searchDetails.adults + +this.searchDetails.children + +this.searchDetails.infants
      // if (this.stay.capacity === '1') return '1 guest'
      // return this.stay.capacity + ' guests'
    },
  },

  created() {
    this.stayId = this.stay._id

    addEventListener('click', (ev) => {
      const click = ev.target.offsetParent?.classList
      if (click?.contains('order-container')) {
        this.calendarIsShown = true
        return
      }

      if (
        click?.contains('calendar-container') ||
        click?.contains('vc-week') ||
        click?.contains('vc-pane-container') ||
        click?.contains('vc-day') ||
        click?.contains('vc-day') ||
        click?.contains('vc-pane-header-wrapper') ||
        click?.contains('vc-weekdays')
      ) {
        this.calendarIsShown = true
      } else {
        this.calendarIsShown = false
      }
    })

    //** If there's DATES in the params (from explore page) **/
    //** so set the startDate and endDate. if its null render:Add date each input **/
  },

  methods: {
    submitOrder() {
      const { where, checkin, checkout, adults, children, infants, pets } = this.$route.query
      this.$router.push({
        path: '/stay/book/' + this.stayId,
        query: { plan: where, checkin, checkout, adults, children, infants, pets },
      })
    },
    closeModal(date) {
      console.log('close')
      this.calendarIsShown = false // close modal
      this.info.checkin = date.start.toDateString()
      this.info.checkout = date.end.toDateString()
      console.log('this.info', this.info)
      // console.log('this.info.checkout:', this.info.checkout)
      // http://localhost:5173/#/stay/27783059?where=United+States&checkin=Mar+18+2023&checkout=Apr+20+2023&adults=2&children=1&infants=0&pets=0
      // http://localhost:5173/#/stay/27783059?where=United+States&checkin=Mar+18+2023&checkout=Apr+20+2023&adults=2&children=1&infants=0&pets=0
      this.$router.push({
        path: '/stay/' + this.stayId,
        query: {
          where: this.info.where,
          checkin: this.info.checkin,
          checkout: this.info.checkout,
          adults: this.info.adults,
          children: this.info.children,
          infants: this.info.infants,
          pets: this.info.pets,
        },
      })
    },
  },

  mounted() {
    // const { where, checkin, checkout, adults, children, infants, pets } = this.$route.query
    this.info = this.$route.query
    console.log('this.info!:', this.info)
  },

  // watch: {
  //   info(newInfo, oldInfo) {
  //     console.log('hey')
  //     this.$router.push({ query: { checkin: newInfo.checkin } })
  //   },
  // },

  components: {
    DetailsCalendar,
    DetailsGuestModal,
  },
}
</script>

<style></style>
