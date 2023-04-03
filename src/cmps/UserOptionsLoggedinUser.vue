<template>
  <div class="user-nav">
    <div class="user-options-container">
      <RouterLink class="user-options" to="/trips">Trips</RouterLink>
      <RouterLink class="user-options" to="/wishlist">Wishlist</RouterLink>
      <span class="user-line"></span>
      <RouterLink class="user-options" to="/dashboard/stay/edit">Airgpt your home</RouterLink>
      <RouterLink class="user-options" to="/dashboard/reservation">Dashboard</RouterLink>
      <span class="user-line"></span>
      <div class="user-options" @click="doLogout" >Logout</div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      
    }
  },
  methods: {
     doLogout() {
      this.$store.dispatch({ type: 'logout' })
    },
  },
  computed: {
  },
  created() {
    
  },
  components: {},
}
</script>

<style></style>
