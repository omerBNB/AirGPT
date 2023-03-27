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
          : 'Add dates'
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
          : 'Add dates'
      }}
    </div>
  </button>
  <section
    class="calender-container"
    v-if="acitveModalInner === 'checkin' || acitveModalInner === 'checkout'">
    <!-- <el-calendar class="calendar-inner-section-1" v-model="value" />
          <el-calendar class="calendar-inner-section-2" v-model="value" /> -->
    <VDatePicker
      class="calendar"
      :value="date2"
      @input="date2 = $event"
      v-model.range="innerHeaderFilter.range"
      :columns="columns"
      @click.stop="setActiveModalDates('checkout')" />
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

<style></style>
