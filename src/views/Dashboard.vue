<template>
  <section class="stay-edit-main-container">
    <nav class="dashboard-nav-container">
      <RouterLink to="/dashboard/stay/edit">Create listing</RouterLink>
      <RouterLink to="/dashboard/listing">Listings</RouterLink>
      <RouterLink to="/dashboard/reservation">Reservation</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  mounted() {
    document.getElementById('main-app').classList.value = `main-container`
  },
}
</script>

<style></style>
