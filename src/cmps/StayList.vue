<template>
  <section class="cards-layout grid">
    <StayPreview v-for="stay in stays" :key="stay._id" :stay="stay" @updateWishList="$emit('updateWishList', stay)" />
    <!-- <p>${{ stay.price?.toLocaleString() }}</p>
        <button @click="removeStay(stay._id)">x</button>
        <button @click="updateStay(stay)">Update</button>
        <hr />
        <button @click="addStayMsg(stay._id)">Add stay msg</button>
        <button @click="printStayToConsole(stay)">Print msgs to console</button> -->
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