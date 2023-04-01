<template>
  <LineChart :chartData="testData" :options="options" />
</template>

<script lang="ts">
import { LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'Chart',
  components: { LineChart },
  props: {
    currUserStays: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      userStays: null,
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
        plugins: {
          legend: { display: false },
          // legend: { position: 'bottom' },
        },
      },
    }
  },

  mounted() {
    if (this.currUserStays && this.currUserStays.length > 0) {
      this.userStays = this.currUserStays
      this.getYearsAndAvgs()
    }
  },
  methods: {
    getYearsAndAvgs() {
      const years = []
      const vals = []

      // First, let's create an object where the keys are the years and the values are arrays of review values for that year.
      const yearlyAvgs = this.userStays.reduce((acc, stay) => {
        const year = new Date(stay.reviews[0].at).getFullYear()
        const reviews = stay.reviews.map((review) => review.rate)
        if (!acc[year]) {
          acc[year] = reviews
        } else {
          acc[year] = acc[year].concat(reviews)
        }
        return acc
      }, {})

      // Now, let's loop through the yearlyAvgs object and calculate the average review for each year.
      for (const year in yearlyAvgs) {
        years.push(parseInt(year))
        const sum = yearlyAvgs[year].reduce((a, b) => a + b, 0)
        const avg = sum / yearlyAvgs[year].length
        vals.push(avg)
      }
      // Finally, let's sort the arrays by year.
      // const sortedIndices = years.map((_, i) => i).sort((a, b) => years[a] - years[b])
      console.log('years', years)
      console.log('vals', vals)
      this.testData.labels = years
      this.testData.datasets[0].data = vals

      // update the chart
      // this.$nextTick(() => {
      // this.renderChart()
      // })
    },
    // renderChart() {
    //   if (this.$refs.chart) {
    //     this.$refs.chart.render()
    //   }
    // },
  },
}
</script>
