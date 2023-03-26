<template>
  <div class="user-nav">
    <div class="user-options-container">
      <div class="user-options">Trips</div>
      <div class="user-options">Wishlist</div>
      <span class="user-line"></span>
      <div class="user-options" >Airgpt your home</div>
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
