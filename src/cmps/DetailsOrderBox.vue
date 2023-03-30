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
            <input :value="this.order.checkin || 'Add date'" />
          </div>
          <div @click="this.calendarIsShown = true" class="date-input">
            <label>CHECK OUT</label>
            <input :value="this.order.checkout || 'Add date'" />
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

      <!-- if -->
      <section
        v-if="
          this.order.checkin &&
          this.order.checkout &&
          this.order.guests.guestNum !== 'Add guest' &&
          this.order.guests.guestNum
        ">
        <section class="price-info">
          <div class="price-per-night flex space-between">
            <p class="underline">${{ stay.price }} X {{ this.nightsBetween }} nights</p>
            <p>${{ calcTotalPrice }}</p>
          </div>

          <div class="service-fee flex space-between">
            <p class="underline">Cleaning fee</p>
            <p>$10</p>
          </div>

          <div class="service-fee flex space-between">
            <p class="underline">Service fee</p>
            <p>$8.15</p>
          </div>
        </section>
        <hr />
        <div class="total flex space-between">
          <p>Total</p>
          <p>${{ calcTotalPrice + 10 + 8.15 }}</p>
        </div>
      </section>

      <DetailsCalendar
        v-if="calendarIsShown"
        @closeModal="closeModal"
        :checkin="order.checkin"
        :checkout="order.checkout" />

      <DetailsGuestModal
        :guests="this.order.guests"
        @updateGuest="updateGuest"
        @closeGuestModal="closeGuestModalAndSave"
        v-if="this.guestModalIsShown" />
    </section>

    <!-- <p class="footer">Report this listing</p> -->
  </main>
</template>

<script>
import DetailsCalendar from '../cmps/DetailsCalendar.vue'
import DetailsGuestModal from '../cmps/DetailsGuestModal.vue'
import { stayService } from '../services/stay.service.local'
import { eventBus } from '../services/event-bus.service.js'
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
      order: stayService.getEmptyOrder(),
      nightsBetween: 0,
      guestsNum: null,
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
      const guestsCount =
        +this.order.guests.adults + +this.order.guests.children + +this.order.guests.infants
      if (!guestsCount) return 'Add guest'
      if (guestsCount === 1) return guestsCount + ' guest'
      return guestsCount + ' guests'

      // if (this.stay.capacity === '1') return '1 guest'
      // return this.stay.capacity + ' guests'
    },

    calcTotalPrice() {
      this.order.totalPrice = +this.stay.price * this.nightsBetween
      return this.order.totalPrice
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
      const loggedInUser = this.$store.getters.loggedinUser
      if (!loggedInUser) {
        eventBus.emit('openLoginModal')
        return
      }

      this.$router.push({
        path: '/stay/book/' + this.stayId,
        query: {
          where: this.order.where,
          checkin: this.order.checkin,
          checkout: this.order.checkout,
          adults: this.order.guests.adults,
          children: this.order.guests.children,
          infants: this.order.guests.infants,
          pets: this.order.guests.pets,
        },
      })
      this.order.buyer.fullname = loggedInUser.fullname
      this.order.buyer._id = loggedInUser._id
      this.order.buyer.imgUrl = loggedInUser.imgUrl
      this.order.stay._id = this.stay._id
      this.order.stay.name = this.stay.name
      this.order.stay.price = this.stay.price
      this.order.hostId = this.stay.host._id

      //make this code better:!!
      const date1 = new Date(this.order.checkin)
      const month1 = date1.getMonth() + 1
      const day1 = date1.getDate()
      const year1 = date1.getFullYear()
      const formattedDate1 = `${month1}/${day1}/${year1}`

      const date2 = new Date(this.order.checkout)
      const month2 = date2.getMonth() + 1
      const day2 = date2.getDate()
      const year2 = date2.getFullYear()
      const formattedDate2 = `${month2}/${day2}/${year2}`

      this.order.checkin = formattedDate1
      this.order.checkout = formattedDate2

      this.$store.dispatch({ type: 'createNewOrder', newOrder: this.order })
      this.$store.dispatch({ type: 'updateTripList', trip: this.order })
    },

    closeModal(date) {
      this.calendarIsShown = false
      this.order.checkin = date.start.toDateString()
      this.order.checkout = date.end.toDateString()

      this.getDaysBetweenDates(this.order.checkin, this.order.checkout)
    },

    updateGuest({ guest, diff }) {
      if (!this.order.guests[guest] && diff === -1) return

      this.order.guests[guest] += +diff
      //
      // this.guestsNum += +diff
      this.order.guests.guestNum += +diff
    },

    closeGuestModalAndSave(guests) {
      this.guestModalIsShown = false
    },

    getDaysBetweenDates(checkin, checkout) {
      if (!checkin || !checkout) return
      const date1 = Date.parse(checkin)
      const date2 = Date.parse(checkout)
      const diffInMs = Math.abs(date2 - date1)
      this.nightsBetween = Math.floor(diffInMs / 86400000)
    },
  },

  mounted() {
    const { where, checkin, checkout, adults, children, infants, pets } = this.$route.query
    this.order.where = where
    this.order.checkin = checkin
    this.order.checkout = checkout
    this.order.guests.adults = +adults || 0
    this.order.guests.children = +children || 0
    this.order.guests.infants = +infants || 0
    this.order.guests.pets = +pets || 0
    this.order.guests.guestNum = +adults + +children + +infants + +pets

    ///////////////
    this.getDaysBetweenDates(checkin, checkout)
  },

  components: {
    DetailsCalendar,
    DetailsGuestModal,
  },
}
</script>

<style></style>
