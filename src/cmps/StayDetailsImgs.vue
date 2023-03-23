<template>
  <section class="img-container">
    <img class="main-img" :src="stay.imgUrls[0]" alt="img" />
    <img v-for="img in stay.imgUrls" :src="img" />
  </section>
</template>

<script>
export default {
  name: 'StayDetailsImgs',
  props: {
    stay: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
}
</script>

<style></style>
