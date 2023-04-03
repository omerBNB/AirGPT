<template>
  <BarChart :chartData="testData" :options="options" />
  <!-- <pre>{{ this.orders }}</pre> -->
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
    total: {
      type: Object,
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
            backgroundColor: ['darkseagreen', 'orange', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
          },
        ],
      },
      options: {
        // indexAxis: 'y',
        plugins: {
          legend: { display: false },
          // legend: { position: 'bottom' },
        },
      },
    }
  },
  created() {
    this.calcRevenueMonth()
  },
  mounted() {},

  methods: {
    calcRevenueMonth() {
      const approvedOrders = this.orders.filter((order) => order.status === 'approve')

      approvedOrders.sort((orderA, orderB) => {
        if (new Date(orderA.checkout) > new Date(orderB.checkout)) return 1
        if (new Date(orderA.checkout) < new Date(orderB.checkout)) return -1
        return 0
      })
      /// orders
      const total = {}
      const months = []

      for (let i = 0; i < approvedOrders.length; i++) {
        const dateParts = approvedOrders[i].checkout.split('/')
        // day/month/year
        let month = parseInt(dateParts[1]) // make it num
        if (!total[month]) {
          // if month doesnt excited make it
          total[month] = {
            totalPrice: approvedOrders[i].totalPrice,
            orderCount: 1,
          }
          months.push(month)
        } else {
          total[month].totalPrice += approvedOrders[i].totalPrice
          total[month].orderCount++
        }
        if (months.length >= 5) break
      }

      const names = [] //['1  ,3]'
      const vals = [] // [  200    ,  435]

      for (const month in total) {
        // set name
        const monthName = new Date(2000, +month - 1).toLocaleString('default', { month: 'long' })
        names.push(monthName)
        // set val
        vals.push(total[month].totalPrice)
      }

      //  labels and data outside the loop
      this.testData.labels = names
      this.testData.datasets[0].data = vals
    },
  },
  watch: {
    orders: {
      handler() {
        console.log('changed')
        this.calcRevenueMonth()
      },
      deep: true,
    },
  },
  components: { BarChart },
}
</script>
