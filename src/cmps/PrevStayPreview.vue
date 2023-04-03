<template>
  <section v-if="prevStay" class="flex">
    <section>
      <h1 class="main-header">Your prev stay</h1>
      <section class="info flex flex-column">
        <h1 class="header">{{ prevStay.prevStay.name }}</h1>
        <h1>{{ prevStay.prevStay.loc.city }}, {{ prevStay.prevStay.loc.country }}</h1>
        <h1 class="dates">{{ prevStay.checkin }} - {{ prevStay.checkout }}</h1>
      </section>
    </section>
    <img :src="prevStay.prevStay.imgUrls[0]" />
  </section>
</template>
<script>
export default {
  props: {
    prevStay: Object,
  },
}
</script>
