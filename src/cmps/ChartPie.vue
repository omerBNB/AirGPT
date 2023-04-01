<template>
  <DoughnutChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'PieChart',

  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      testData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#FFBFA9', '#FFACAC', '#FFEBB4', '#97B0C4', '#FBFFB1'],
          },
        ],
      },
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const names = []
      const vals = []
      this.orders.forEach((order) => {
        console.log('order', order.stay.name)
        if (names.includes(order.stay.name)) {
          // find the idx and count it ++
          const idx = names.findIndex((name) => order.stay.name === name)
          vals[idx]++
        } else {
          // add it and push count=1
          names.push(order.stay.name)
          vals.push(1)
        }
      })
      this.testData.labels = names
      this.testData.datasets[0].data = vals
    },
  },
  computed: {
    // getAllToys() {
    //   return this.$store.getters.getAllToys
    // },
  },
  watch: {
    orders: {
      handler() {
        this.setData()
      },
      deep: true,
    },
  },
  components: { DoughnutChart },
}
</script>
