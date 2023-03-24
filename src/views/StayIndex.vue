<template>
  <div>
    <StayFilter @setFilterBy="setFilterBy" />
    <StayList :stays="stays" />
    <!-- <div class="container home">
      <ul class="stay-list">
        <li v-for="stay in stays" :key="stay._id">
          <p>
            {{ stay.vendor }}
          </p>
          <p>${{ stay.price?.toLocaleString() }}</p>
          <button @click="removeStay(stay._id)">x</button>
          <button @click="updateStay(stay)">Update</button>
          <hr />
          <button @click="addStayMsg(stay._id)">Add stay msg</button>
        <button @click="printStayToConsole(stay)">Print msgs to console</button>
      </li>
    </ul>
  </div> -->
    <!-- <form @submit.prevent="addStay()">
    <h2>Add stay</h2>
    <input type="text" v-model="stayToAdd.vendor" />
    <button>Save</button>
  </form> -->
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service.local'
// import { getActionRemoveStay, getActionUpdateStay, getActionAddStayMsg } from '../store/stay.store'
import StayList from '../cmps/StayList.vue'
import StayFilter from '../views/StayFilter.vue'
export default {
  created() {
    this.$store.dispatch({ type: 'loadStays' })
  },
  data() {
    return {
      stayToAdd: stayService.getEmptyStay(),
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
    StayFilter
  },
}
</script>