<template>
  <section class="calendar-container">
    <section class="calendar-header flex">
      <div class="date-txt flex">
        <h3>Select dates</h3>
        <p>Add your travel dates for exact pricing</p>
      </div>
      <div class="checkin-checkout flex">
        <div class="check-in flex">
          <h4>CHECK IN</h4>
          <!-- CHANGE TYPE TO DATE -->
          <input value="Add date" type="text" />
        </div>
        <div class="check-out flex">
          <h4>CHECK OUT</h4>
          <!-- CHANGE TYPE TO DATE -->
          <input value="Add date" type="text" />
        </div>
      </div>
    </section>

    <VDatePicker
      class="calendar"
      :step="1"
      v-model.range="range"
      :columns="columns"
      :color="selectedColor"
      :attributes="attributes" />

    <div class="btns flex">
      <button class="clear-dates">Clear dates</button>
      <button class="close-btn">Close</button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useScreens } from 'vue-screen-utils'
export default {
  name: 'DetailsCalendar',
  data() {
    return {
      date1: new Date(),
      columns: null,
      range: null,
      selectedColor: ref('gray'),
      date: ref(new Date()),
      attributes: [
        // This is a single attribute
        {
          // An optional key can be used for retrieving this attribute later,
          // and will most likely be derived from your data object
          // key: Any,
          // Attribute type definitions
          content: 'red', // Boolean, String, Object
          highlight: true, // Boolean, String, Object
          // dot: true, // Boolean, String, Object
          // bar: true, // Boolean, String, Object
          // popover: { ... }, // Only objects allowed
          // Your custom data object for later access, if needed
          // customData: { ... },
          // We also need some dates to know where to display the attribute
          // We use a single date here, but it could also be an array of dates,
          //  a date range or a complex date pattern.
          // dates: new Date(),
          // Think of `order` like `z-index`
          // order: 0,
        },
      ],
    }
  },
  methods: {},
  computed: {},
  created() {
    const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
    this.columns = mapCurrent({ lg: 2 }, 2)
  },
  components: {},
}
</script>

<style>
.calendar .vc-arrow {
  width: 50px;
}
</style>
