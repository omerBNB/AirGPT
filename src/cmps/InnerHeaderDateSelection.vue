<template>
  <button
    class="inner-header-dates-btn"
    ref="checkin"
    @click="setActiveModalDates('checkin')"
    :class="{ isActive: acitveModalInner === 'checkin' }">
    <div>Check in</div>
    <div :class="innerHeaderFilter.range.start ? 'bold-inner-search' : ''">
      {{
        innerHeaderFilter.range.start
          ? this.innerHeaderFilter.range.start.toDateString().substring(4, 11)
          : (searchQuery.checkin? searchQuery.checkin.substring(0, 6) : 'Add dates')
      }}
    </div>
  </button>
  <div class="border-inner-header"></div>
  <button
    class="inner-header-dates-btn"
    @click="setActiveModalDates('checkout')"
    :class="{ isActive: acitveModalInner === 'checkout' }">
    <div ref="checkout">Check out</div>
    <div :class="innerHeaderFilter.range.end ? 'bold-inner-search' : ''">
      {{
        innerHeaderFilter.range.end
          ? this.innerHeaderFilter.range.end.toDateString().substring(4, 11)
          : (searchQuery.checkout? searchQuery.checkout.substring(0, 6) : 'Add dates')
      }}
    </div>
  </button>
  <section
    class="calender-container"
    v-if="acitveModalInner === 'checkin' || acitveModalInner === 'checkout'">
    <VDatePicker
      class="calendar"
      :value="date2"
      @input="date2 = $event"
      v-model.range="innerHeaderFilter.range"
      :columns="columns"
      @click.stop="setActiveModalDates('checkout')" />

      <!-- <VDatePicker
      v-model="date"
      class="calendar"
      :step="1"
      v-model.range="range"
      :columns="columns"
      :color="selectedColor"
      :attributes="attributes" /> -->
  </section>
</template>

<script>
import { useScreens } from 'vue-screen-utils'
export default {
  name: '',
  props: {
    acitveModalInner: String,
    innerHeaderFilter: Object,
  },
  data() {
    return {
      date2: new Date(),
      columns: null,
      searchQuery: this.$route.query
    }
  },
  methods: {
    setActiveModalDates(btnName) {
      this.$emit('setActiveModalDates', btnName)
    },
  },
  computed: {},
  created() {
    const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
    this.columns = mapCurrent({ lg: 2 }, 2)
  },
  components: {},
  emits: ['setActiveModalDates'],
}
</script>

<style scoped>
.calendar .vc-arrow {
  width: 50px;
}
.vc-highlight-content-solid {
  background-color: #ec1515;
  /* background-color: #222; */
  scale: 1.2;
}
.vc-highlight-content-solid:hover {
  /* background-color: #222; */
  background-color: #e40808;
  scale: 1.2;
}
.--vc-gray-200 {
  background-color: palevioletred;
}
</style>
