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
    // if (this.currUserStays && this.currUserStays.length > 0) {
    // console.log('this.currUserStays:', this.currUserStays)
    // this.userStays = this.currUserStays
    // this.getYearsAndAvgs()
    // }
  },

  methods: {
    getYearsAndAvgs() {
      const years = []
      const reviewsRate = []

      console.log('this.userStay', this.userStays)

      const yearsRateAvg = this.userStays.reduce((acc, stay) => {
        const year = new Date(stay.reviews[0].at).getFullYear() //15/10/2023
        const reviews = stay.reviews.map((review) => review.rate)

        // Short if that shit
        if (!acc[year]) {
          acc[year] = reviews
        } else {
          acc[year] = acc[year].concat(reviews)
        }
        return acc
      }, {})

      //  year:2015 rate:4.6 | year:2020 rate :3 .... }
      ////////////////////////////////////////////
      for (const year in yearsRateAvg) {
        years.push(parseInt(year))
        const sum = yearsRateAvg[year].reduce((a, b) => a + b, 0)
        const avg = sum / yearsRateAvg[year].length
        reviewsRate.push(avg)
      }

      console.log('years', years)
      console.log('reviewsRate', reviewsRate)

      // result  years [2015,2018]
      // result reviewsRate [4.4,2.8]

      // Set in Chart
      this.testData.labels = years
      this.testData.datasets[0].data = reviewsRate

      //////////////////////////////////////////
      // const sortedIndices = years.map((_, i) => i).sort((a, b) => years[a] - years[b])
    },
  },
}
</script>
