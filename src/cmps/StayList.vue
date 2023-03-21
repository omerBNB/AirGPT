<template>
  <div class="container home">
    <ul class="stay-list">
      <li v-for="stay in stays" :key="stay._id">
        <StayPreview :stay="stay" />

        <!-- <p>${{ stay.price?.toLocaleString() }}</p>
        <button @click="removeStay(stay._id)">x</button>
        <button @click="updateStay(stay)">Update</button>
        <hr />
        <button @click="addStayMsg(stay._id)">Add stay msg</button>
        <button @click="printStayToConsole(stay)">Print msgs to console</button> -->
      </li>
    </ul>
  </div>
</template>

<script>
import StayPreview from '../cmps/StayPreview.vue'
export default {
  name: 'StayList',
  props: {
    stays: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
    console.log('this.stays', this.stays)
  },
  components: {
    StayPreview,
  },
}
</script>

<style></style>
