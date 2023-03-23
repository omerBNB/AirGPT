<template>
  <section class="stay-card">
    <StayImgPreview :imgs="stay.imgUrls" />
    <h1 class="stay-name">{{ stay.name }}</h1>
    <h1>{{ stay.loc.city }}, {{ stay.loc.country }}</h1>
    <h1>{{ stay.capacity }} bads</h1>
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
    return {}
  },
  methods: {},
  computed: {},
  created() { },
  components: { StayImgPreview },
}
</script>