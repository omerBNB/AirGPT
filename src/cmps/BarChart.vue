<template>
  <BarChart :chartData="testData" :options="options" />
  <pre>{{ this.orders }}</pre>
</template>

<script lang="ts">
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'Chart',
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      testData: {
        labels: ['Tel-Aviv', 'Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [
          {
            data: [100, 130, 40, 60, 70, 5],
            backgroundColor: ['darkseagreen', 'orange', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
          },
        ],
      },
      options: {
        plugins: {
          // legend: { display: false }
          legend: { position: 'bottom' },
        },
      },
    }
  },
  mounted() {
    // get all approved orders
    // const approvedOrders = getApprovedOrders()
    // get the last approved month
    // check total price in this month
    // check total for every last 5 month (before the last month)
    // if there's no month = write 0 money
  },
  components: { BarChart },
}
</script>
