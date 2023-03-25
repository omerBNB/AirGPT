<template>
  <main>
    <section class="order-container">
      <div class="order-form-header">
        <p>
          <span class="cost">${{ stay.price }}</span> night
        </p>
        <p class="fs14 bold-font">
          <img src="../imgs/svg_symbols/black_star.svg" />
          {{ stay.rate }}
          <span class="reviews">({{ stay.reviews.length }} reviews)</span>
        </p>
      </div>

      <div class="order-data">
        <div class="date-picker">
          <div class="date-input">
            <label>CHECK IN</label>
            <input value="Tue Sep 07 2021" />
          </div>
          <div class="date-input">
            <label>CHECK OUT</label>
            <input value="Tue Sep 07 2021" />
          </div>
        </div>

        <div class="guest-input">
          <label>GUESTS</label>
          <input value="2" />
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
            <span>Check availability</span>
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
    </section>
    <!-- <p class="footer">Report this listing</p> -->
  </main>
</template>

<script>
export default {
  name: 'DetailsOrderBox',
  props: {
    stay: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stayId: null,
    }
  },

  created() {
    this.stayId = this.stay._id
  },

  methods: {
    submitOrder() {
      this.$router.push('/book/' + this.stayId)
    },
  },
}
</script>

<style></style>
