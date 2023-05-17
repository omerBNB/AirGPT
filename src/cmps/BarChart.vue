<template>
  <BarChart :chartData="chartData" :options="options" />
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
      chartData: {
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
    // calcRevenueMonth() {
    //   /// Get the current user's orders
    //   const approvedOrders = this.orders.filter((order) => order.status === 'approved')

    //   approvedOrders.sort((orderA, orderB) => {
    //     if (new Date(orderA.checkout) > new Date(orderB.checkout)) return 1
    //     if (new Date(orderA.checkout) < new Date(orderB.checkout)) return -1
    //     return 0
    //   })

    //   const totalPerMonth = approvedOrders.reduce((result, order) => {
    //     const month = this.getMonthFromDate(order.checkout)
    //     console.log('month:', month)
    //     result[month] = result[month] || { totalPrice: 0 }
    //     result[month].totalPrice += order.totalPrice
    //     return result
    //   }, {})

    //   const monthNames = [] //['January  ,'March']'
    //   const revenues = [] //  [  200    ,  435]

    //   for (const month in totalPerMonth) {
    //     const monthName = this.getFormattedMonthName(month)
    //     monthNames.push(monthName)
    //     revenues.push(totalPerMonth[month].totalPrice)
    //   }

    //   //  Set Month names and revenues in the Chart:
    //   this.chartData.labels = monthNames
    //   this.chartData.datasets[0].data = revenues
    // },

    // getFormattedMonthName(monthNum) {
    //   return new Date(2000, +monthNum - 1).toLocaleString('default', { month: 'long' })
    // },

    // getMonthFromDate(dateString) {
    //   const date = new Date(dateString)
    //   return date.getMonth() + 1 // add 1 to convert from 0-based index to 1-based index
    // },

    calcRevenueMonth() {
      /// Get the current user's orders
      const approvedOrders = this.orders.filter((order) => order.status === 'approved')

      approvedOrders.sort((orderA, orderB) => {
        if (new Date(orderA.checkout) > new Date(orderB.checkout)) return 1
        if (new Date(orderA.checkout) < new Date(orderB.checkout)) return -1
        return 0
      })

      const totalPerMonth = approvedOrders.reduce((result, order) => {
        const month = this.getMonthFromDate(order.checkout)
        result[month] = result[month] || { totalPrice: 0 }
        result[month].totalPrice += order.totalPrice
        return result
      }, {})

      const monthNames = [] //['January  ,'March']'
      const revenues = [] //  [  200    ,  435]

      for (const month in totalPerMonth) {
        const monthName = this.getFormattedMonthName(month)
        monthNames.push(monthName)
        revenues.push(totalPerMonth[month].totalPrice)
      }

      //  Set Month names and revenues in the Chart:
      this.chartData.labels = monthNames
      this.chartData.datasets[0].data = revenues
    },

    getFormattedMonthName(monthNum) {
      return new Date(2000, +monthNum - 1).toLocaleString('default', { month: 'long' })
    },

    getMonthFromDate(dateString) {
      const dateParts = dateString.split('/')
      const month = dateParts[1]
      return month
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
