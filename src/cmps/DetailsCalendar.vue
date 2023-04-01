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
          <input v-model="this.date.start" type="text" />
        </div>
        <div class="check-out flex">
          <h4>CHECK OUT</h4>
          <!-- CHANGE TYPE TO DATE -->
          <input v-model="this.date.end" type="text" />
        </div>
      </div>
    </section>

    <VDatePicker
      v-model="date"
      class="calendar"
      :step="1"
      v-model.range="range"
      :columns="columns"
      :color="selectedColor"
      :attributes="attributes" />

    <div class="btns flex">
      <button class="clear-dates bold-font">Clear dates</button>
      <button @click="$emit('closeModal', this.date)" class="close-btn bold-font">Close</button>
    </div>
  </section>
</template>

<script>
import { useScreens } from 'vue-screen-utils'
export default {
  name: 'DetailsCalendar',
  props: {
    checkin: {
      type: null || String,
      required: true,
    },
    checkout: {
      type: null || String,
      required: true,
    },
  },
  data() {
    return {
      columns: null,
      range: null,
      date: {
        start: null,
        end: null,
      },

      selectedColor: 'gray',

      attributes: [
        // This is a single attribute
        {
          // An optional key can be used for retrieving this attribute later,
          // and will most likely be derived from your data object
          // key: Any,
          // Attribute type definitions
          content: 'black', // Boolean, String, Object
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

  created() {
    const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
    this.columns = mapCurrent({ lg: 2 }, 2)

    if (this.checkin && this.checkout) {
      this.date.start = this.checkin
      this.date.end = this.checkout
    }
  },

  watch: {
    date() {
      console.log('this.date', this.date)
      setTimeout(() => this.$emit('closeModal', this.date), 200)
    },
  },
}
</script>

<style>
.calendar .vc-arrow {
  width: 45px;
  height: 10px;
}
.vc-highlight-content-solid {
  background-color: #222;
  scale: 1.2;
}
.vc-highlight-content-solid:hover {
  background-color: #222;
  scale: 1.4;
}
.--vc-gray-200 {
  background-color: palevioletred;
}
.--vc-highlight-outline-bg {
  background: #2e2a2a;
}
.--vc-highlight-outline-content-color {
  background-color: #ffffff;
}
.--vc-day-content .vc-focusable .vc-focus .vc-attr .vc-attr .--vc-highlight-content-outline {
  background-color: violet;
}

.vc-container button,
.vc-container [role='button']:hover {
  transition: 0.1s;
  background-color: #161414;
  scale: 1.3;
  color: white;
}

.vc-container button,
.vc-container [role='button'] {
  cursor: pointer;
  margin: 0.5em;
}
.vc-arrow.vc-prev.vc-focus {
  background-color: #ffffff;
  color: black;
}
.vc-arrow.vc-next.vc-focus {
  background-color: #ffffff;
  color: black;
}
</style>
