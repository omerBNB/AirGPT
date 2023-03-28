<template>
  <div class="listing-stay-preview">
    <img class="listing-preview-img" :src="stay.imgUrls[0]" alt="" />
    <h4>{{ stay.name }} shoko moko</h4>
  </div>
  <button class="listing-preview-btn">Update Stay</button>
    <h4 >{{ stay.capacity }}</h4>
    <h4 >{{ stay.equipment.bedroomNum }}</h4>
    <h4 >{{ formatPrice }}</h4>
    <h4 >{{ stay.loc.city }}, {{ stay.loc.country }}</h4>

</template>

<script>
export default {
  name: '',
  props: { stay: Object },
  data() {
    return {}
  },
  methods: {
    
  },
  computed: {
    formatPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(this.stay.price)
    },
  },
  created() {
    console.log('stay', this.stay)
  },
  components: {},
}
</script>

<style></style>
