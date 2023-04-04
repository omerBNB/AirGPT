<template>
  <section class="flex">
    <section>
      <h1 class="main-header">Your next stay <i class="fa-solid fa-circle-check"></i></h1>
      <section class="info flex flex-column">
        <h1 class="header">{{ nextStay.nextStay.name }}</h1>
        <h1>{{ nextStay.nextStay.loc.city }}, {{ nextStay.nextStay.loc.country }}</h1>
        <h1 class="dates">05/05/23 - 26/05/23</h1>
        <!-- <h1 class="dates">{{ nextStay.checkin }} - {{ nextStay.checkout }}</h1> -->
      </section>
    </section>
    <img :src="nextStay.nextStay.imgUrls[0]" />
  </section>
</template>
<script>
export default {
  props: {
    nextStay: Object,
    stays: Object,
  },
}
</script>
