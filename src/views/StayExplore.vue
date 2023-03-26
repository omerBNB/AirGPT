<template>
  <div>
    <CarouselFilter @setFilterBy="setFilterBy" />
    <StayList :stays="stays" />
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service.local'
// import { getActionRemoveStay, getActionUpdateStay, getActionAddStayMsg } from '../store/stay.store'
import StayList from '../cmps/StayList.vue'
import CarouselFilter from './CarouselFilter.vue'

export default {
  created() {
    this.filterByUserSpecs = this.$route.query
    this.$store.dispatch({ type: 'searchByUserSpecs', filterUserSpecs: this.filterByUserSpecs })
  },
  data() {
    return {
      stayToAdd: stayService.getEmptyStay(),
      filterByUserSpecs: null
    }
  },
  mounted() {
    const currRoute = this.$route.query
    if (currRoute === '/') {
      document.getElementById('main-app').classList.value = 'main-container'
    }
  },
  methods: {
    async addStay() {
      try {
        await this.$store.dispatch({ type: 'addStay', stay: this.stayToAdd })
        showSuccessMsg('stay added')
        this.stayToAdd = stayService.getEmptyStay()
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot add stay')
      }
    },
    async removeStay(stayId) {
      try {
        await this.$store.dispatch(getActionRemoveStay(stayId))
        showSuccessMsg('stay removed')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot remove stay')
      }
    },
    async updateStay(stay) {
      try {
        stay = { ...stay }
        stay.price = +prompt('New price?', stay.price)
        await this.$store.dispatch(getActionUpdateStay(stay))
        showSuccessMsg('stay updated')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot update stay')
      }
    },
    async addStayMsg(stayId) {
      try {
        await this.$store.dispatch(getActionAddStayMsg(stayId))
        showSuccessMsg('stay msg added')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot add stay msg')
      }
    },
    printStayToConsole(stay) {
      console.log('stay msgs:', stay.msgs)
    },
    setFilterBy(filter) {
      this.$store.dispatch({ type: "setFilterBy", filter });
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    stays() {
      return this.$store.getters.stays
    },
  },
  components: {
    StayList,
    CarouselFilter,
  },
}
</script>