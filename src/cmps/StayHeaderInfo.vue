<template>
  <section class="stay-review flex column">
    <h1>{{ stay.name }}</h1>
    <section class="info-bar flex space-between align-center">
      <div class="info flex">
        <img src="../imgs/svg_symbols/black_star.svg" />
        <span class="bold-font">{{ stay.rate }}</span>
        <span>•</span>
        <span class="underline bold-font">{{ stay.reviews.length }} reviews</span>
        <span>•</span>
        <span v-if="stay.host.isSuperHost">🎖 Superhost •</span>
        <span class="bold-font">{{ stay.loc.city }}, {{ stay.loc.country }}</span>
      </div>

      <div class="btns flex">
        <div class="flex">
          <img src="../imgs/svg_symbols/share.svg" />
          <span class="underline bold-font">Share</span>
        </div>
        <div class="flex">
          <img src="../imgs/svg_symbols/heart.svg" />
          <span class="underline bold-font">Save</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'StayHeaderInfo',
  props: {
    stay: {
      type: Object,
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
