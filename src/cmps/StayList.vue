<template>
  <section class="cards-layout grid">
    <StayPreview v-for="stay in stays" :key="stay._id" :stay="stay" @updateWishList="$emit('updateWishList', stay)" />
  </section>
</template>

<script>
import StayPreview from '../cmps/StayPreview.vue'
export default {
  name: 'StayList',
  props: { stays: Array },
  components: {
    StayPreview,
  },
  emits: ['updateWishList'],
}
</script>