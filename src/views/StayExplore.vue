<template>
  <div>
    <CarouselFilter @setFilterBy="setFilterBy" />
    <h5 class="stay-explore-h5" v-if="stays.length">Over {{ stays.length }} homes</h5>
    <StayList :stays="stays" :detailsRouteParams="this.$route.query" @updateWishList="updateWishList"/>
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service'
// import { getActionRemoveStay, getActionUpdateStay, getActionAddStayMsg } from '../store/stay.store'
import StayList from '../cmps/StayList.vue'
import CarouselFilter from './CarouselFilter.vue'

export default {
  created() {
    this.filter.where = this.$route.query.where
    this.$store.dispatch({ type: 'loadStays', filter: this.filter })
  },
  data() {
    return {
      stayToAdd: stayService.getEmptyStay(),
      filter: {
                label: '',
                where: ''
            }
    }
  },
  mounted() {
    const currRoute = this.$route.name
    if (currRoute === 'StayExplore') {
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
    updateWishList(stay) {
      let stayToUpdate = JSON.parse(JSON.stringify(stay))
      const user = {
        _id: this.loggedInUser._id,
        fullname: this.loggedInUser.fullname
      }
      if (!stayToUpdate.likedByUsers.find((u) => u._id === user._id)) stayToUpdate.likedByUsers.push(user)
      else {
        let idx = stayToUpdate.likedByUsers.findIndex((u) => +u._id === +user._id)
        stayToUpdate.likedByUsers.splice(idx, 1)
      }
      this.$store.dispatch({ type: "saveStay", stay: stayToUpdate })
    },
    printStayToConsole(stay) {
      console.log('stay msgs:', stay.msgs)
    },
    setFilterBy(filter) {
      this.$store.dispatch({ type: 'loadStays', filter })
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
  watch: {
    $route() {
      if (this.$route.query !== this.filter.userSpecs) {
        this.filter.userSpecs = this.$route.query
        this.$store.dispatch({ type: 'loadStays', filter: {label: '', where: this.filter.userSpecs.where} })
      }
    },
  },
  components: {
    StayList,
    CarouselFilter,
  },
}
</script>
