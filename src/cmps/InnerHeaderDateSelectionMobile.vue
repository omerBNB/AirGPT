<template>
   <section class="dates-modal">
    <button class="flex-mobile-first-btn" v-if="acitveModalInner !== 'checkin'"  @click="setActiveModalDates('checkin')">
      <h3 class="where-h3">when</h3>
      <h3>{{innerHeaderFilter.range.start? innerHeaderFilter.range.start.toDateString().substring(4, 11) + '- ' + innerHeaderFilter.range.end.toDateString().substring(4, 11) : 'Add dates'}}</h3>
    </button>
  <section
    class="calender-container-mobile"
    v-if="acitveModalInner === 'checkin'">
    <VDatePicker
      class="calendar1-mobile"
      :value="date2"
      @input="date2 = $event"
      v-model.range="innerHeaderFilter.range"
      :columns="columns"
      :color="selectedColor" />
      <button class="mobile-next-btn"  @click="setActiveModalDates('search')">
        Next
      </button>
  </section>
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
      searchQuery: this.$route.query,
      selectedColor: 'gray',
      when: ''
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
    this.columns = mapCurrent({ lg: 1 }, 1)
  },
  components: {},
  emits: ['setActiveModalDates'],
}
</script>

<style >

</style>
