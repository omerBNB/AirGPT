<template>
  <section class="stay-card">
    <StayImgPreview @details="details()" :imgs="stay.imgUrls" />
    <heart :class="isMark" @click="$emit('updateWishList')" />
    <section class="info" @click="details()">
      <p class="stay-header flex">
      <p class="stay-name flex">
        <span>
          {{ stay.name }}
        </span>
      </p>
      <span class="rate flex">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
          focusable="false" style="
                                                    display: block;
                                                    height: 14px;
                                                    width: 14px;
                                                    margin-bottom: 1px;
                                                    fill: currentcolor;
                                                    ">
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fill-rule="evenodd"></path>
        </svg>
        {{ stay.rate }}
      </span>
      </p>
      <main>
        <p>{{ stay.loc.city }}, {{ stay.loc.country }}</p>
        <p>{{ stay.capacity }} beds</p>
      </main>
      <p class="cost">
        <span class="price">{{ formatPrice }}</span> night
      </p>
    </section>
  </section>
</template>
<script>
import StayImgPreview from '../cmps/StayImgPreview.vue'
import heart from '../imgs/svg_symbols/heart.vue'
export default {
  name: 'StayPreview',
  props: {
    stay: Object,
  },
  methods: {
    details() {
      const {
        where = '',
        checkin = '',
        checkout = '',
        adults = '',
        children = '',
        infants = '',
        pets = '',
      } = this.$route.query

      this.$router.push({
        path: `/stay/${this.stay._id}`,
        query: { where, checkin, checkout, adults, children, infants, pets },
      })
    },
  },
  computed: {
    isMark() {
      return (this.stay.likedByUsers.find((u) => +u._id === this.loggedInUser._id)) ? 'mark' : ''
    },
    formatPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(this.stay.price)
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  emits: ['updateWishList'],
  components: { StayImgPreview, heart },
}
</script>
