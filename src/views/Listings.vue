<template>
  <section class="main-user-listing-container">
    <section class="user-listing-card">
      <img class="user-img" :src="loggedInUser.imgUrl" alt="" />
      <h2>{{ loggedInUser.fullname }}</h2>
      <p class="user-listing-p">{{ loggedInUser.stayList[0].host.description }}</p>
    </section>
    <ul class="main-listing-ul">
        <div class="main-listing-h4">
            <h4 class="inner-h4-listing">Listing</h4>
            <h4>Update Entity</h4>
            <h4>Capacity</h4>
            <h4>Bedrooms</h4>
            <h4>Price</h4>
            <h4>Location</h4>
        </div>
      <li v-for="stay in loggedInUser.stayList" :key=stay._id class="main-listing-view-container">
        <ListingsStaysPreview :stay="stay" />
      </li>
    </ul>
  </section>
</template>

<script>
import ListingsStaysPreview from '../cmps/ListingsStaysPreview.vue'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  created() {},
  components: {
    ListingsStaysPreview,
  },
}
</script>

<style></style>
