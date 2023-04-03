<template>
  <section>
    <CarouselFilter @setFilterBy="setFilterBy" />
    <StayList v-if="stays && stays.length" :stays="stays" @updateWishList="updateWishList" />
    <p v-else v-loading="loading" class="loading"></p>
  </section>
</template>

<script>
import { ref } from 'vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service'
import StayList from '../cmps/StayList.vue'
import CarouselFilter from '../views/CarouselFilter.vue'
export default {
  created() {
    this.$store.dispatch({ type: 'loadStays' })
  },
  data() {
    return {
      stayToAdd: stayService.getEmptyStay(),
      loading: ref(true)
    }
  },
  mounted() {
    const currRoute = this.$route.path
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
      this.$store.dispatch({ type: 'loadStays', filter })
    },
    updateWishList(stay) {
      let stayToUpdate = JSON.parse(JSON.stringify(stay))
      const user = {
        _id: this.loggedInUser._id,
        fullname: this.loggedInUser.fullname,
      }
      if (!stayToUpdate.likedByUsers.find((u) => u._id === user._id)) {
        stayToUpdate.likedByUsers.push(user)
        // showSuccessMsg('Added To Wishlist')
      } else {
        let idx = stayToUpdate.likedByUsers.findIndex((u) => +u._id === +user._id)
        stayToUpdate.likedByUsers.splice(idx, 1)
        // showErrorMsg('Removed From Wishlist')
      }
      this.$store.dispatch({ type: 'saveStay', stay: stayToUpdate })
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