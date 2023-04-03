<template>
  <Component :is="detailsComponent" />
</template>

<script>
import StayDetailsDesktop from '../views/StayDetailsDesktop.vue'
import StayDetailsMobile from '../views/StayDetailsMobile.vue'

export default {
  name: 'StayDetails',
  components: {
    StayDetailsDesktop,
    StayDetailsMobile,
  },

  data() {
    return {
      width: window.innerWidth,
    }
  },

  created() {
    window.addEventListener('resize', this.getDimensions)
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
