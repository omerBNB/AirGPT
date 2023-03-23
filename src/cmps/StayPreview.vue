<template>
  <section class="stay-card">
    <StayImgPreview :imgs="stay.imgUrls" />
    <h1 class="stay-name flex">
      {{ stay.name }}
      <p class="rate flex">{{ stay.reviews[0].rate }} ({{ stay.reviews.length }}) (stars)</p>
    </h1>
    <main>
      <p>{{ stay.loc.city }}, {{ stay.loc.country }}</p>
      <p>{{ stay.capacity }} bads</p>
    </main>
    <h1 class="cost"><span class="price">${{ stay.price }}</span> night</h1>
  </section>
</template>

<script>
import StayImgPreview from '../cmps/StayImgPreview.vue'
export default {
  name: 'StayPreview',
  props: {
    stay: Object,
  },
  data() {
    return {
      rate: ''
    }
  },
  components: { StayImgPreview },
}
</script>