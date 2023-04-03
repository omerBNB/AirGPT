<template>
  <section class="main-user-listing-container">
    <!-- <section class="user-listing-card">
      <img class="user-img" :src="loggedInUser.imgUrl" alt="" />
      <h2>{{ loggedInUser.fullname }}</h2>
      <p class="user-listing-p">{{ loggedInUser.stayList[0]?.host.description }}</p>
    </section> -->
    <ul class="main-listing-ul">
      <div class="main-listing-h4">
        <h4 class="inner-h4-listing">Listing</h4>
        <h4>Update</h4>
        <h4>Capacity</h4>
        <h4>Bedrooms</h4>
        <h4>Price</h4>
        <h4>Location</h4>
      </div>
      <li v-for="stay in specStays" :key=stay._id class="main-listing-view-container">
        <ListingsStaysPreview v-if="stay" :stay="stay" />
        <p v-else v-loading="loading" class="loading"></p>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref } from 'vue'
import ListingsStaysPreview from '../cmps/ListingsStaysPreview.vue'
export default {
  name: '',
  data() {
    return {
      specStays: null,
      loading: ref(true)
    }
  },
  methods: {},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  async created() {
    const stays = await this.$store.dispatch({ type: 'loadStays' })
    this.specStays = stays.filter(stay => stay.host._id === this.loggedInUser._id)
  },
  components: {
    ListingsStaysPreview,
  },
}
</script>

<style></style>