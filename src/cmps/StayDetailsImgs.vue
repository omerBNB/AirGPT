<template>
  <section class="img-container">
    <img class="main-img" :src="stay.imgUrls[0]" alt="img" />
    <!-- <img v-for="img in stay.imgUrls" :src="img" /> -->
    <img :src="stay.imgUrls[0]" />
    <img :src="stay.imgUrls[1]" />
    <img :src="stay.imgUrls[2]" />
    <img :src="stay.imgUrls[3]" />
  </section>
</template>

<script>
export default {
  name: 'StayDetailsImgs',
  props: {
    stay: {
      type: Object,
      required: true,
    },
  },
}
</script>
