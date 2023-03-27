<template>
  <div class="user-nav">
    <div class="user-options-container">
      <div class="user-options" @click="$emit('openLogin')">Login</div>
      <div class="user-options">Sign up</div>
      <span class="user-line"></span>
      <RouterLink class="user-options" to="/stay/edit">Airgpt your home</RouterLink>
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
  },
  computed: {
  },
  created() {},
  components: {},
  emits:['openLogin']
}
</script>

<style></style>
