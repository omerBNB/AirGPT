<template>
  <div class="listing-stay-preview" >
    <img class="listing-preview-img" :src="stay.imgUrls[0]" alt="" />
    <h4 class="listing-stay-preview-h4">{{ stay.name }}</h4>
  </div>
  <RouterLink class="listing-preview-btn" :to="`stay/edit/${stay._id}`"> Update Stay </RouterLink>
    <h4 class="listing-preview-inner-h4">{{ stay.capacity }}</h4>
    <h4 class="listing-preview-inner-h4">{{ stay.equipment.bedroomNum }}</h4>
    <h4 class="listing-preview-inner-h4">{{ formatPrice }}</h4>
    <h4 class="listing-preview-inner-h4">{{ stay.loc.city }}, {{ stay.loc.country }}</h4>

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
