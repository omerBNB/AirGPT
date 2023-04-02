<template>
  <Component :labels="labels" :is="detailsComponent" />
</template>

<script>
import StayDetailsDesktop from '../views/StayDetailsDesktop.vue'
import StayDetailsMobile from '../views/StayDetailsMobile.vue'
import { stayService } from '../services/stay.service.js'

export default {
  name: 'StayDetails',
  components: {
    StayDetailsDesktop,
    StayDetailsMobile,
  },

  data() {
    return {
      width: window.innerWidth,
      labels: null,
    }
  },

  created() {
    window.addEventListener('resize', this.getDimensions)
    this.labels = stayService.labels()
  },

  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth
    },
  },

  computed: {
    detailsComponent() {
      return this.width > 744 ? 'StayDetailsDesktop' : 'StayDetailsMobile'
    },
  },
}
</script>
