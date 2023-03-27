<template>
  <div class="user-nav">
    <div class="user-options-container">
      <div class="user-options">Trips</div>
      <RouterLink class="user-options" to="/wishlist">Wishlist</RouterLink>
      <span class="user-line"></span>
      <RouterLink class="user-options" to="/stay/edit">Airgpt your home</RouterLink>
      <div class="user-options" >My dashboard</div>
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
  created() {},
  components: {},
}
</script>

<style></style>
