<template>
    <section class="trips">
        <TripsPreview v-if="loggedInUser && stays && stays.length" :user="loggedInUser" :stays="stays" :orders="orders"
            :wishlist="wishlist" />
        <p v-else v-loading="loading" class="loading"></p>
    </section>
</template>

<script>
import { ref } from 'vue'
import TripsPreview from '../cmps/TripsPreview.vue'
export default {
    async created() {
        this.filterBy.buyerId = this.loggedInUser._id
        this.stays = await this.$store.dispatch({ type: 'loadStays' })
        this.$store.dispatch({ type: 'loadOrders', filterBy: this.filterBy })
    },

    data() {
        return {
            filterBy: {
                buyerId: '',
            },
            stays: null,
            loading: ref(true)
        }
    },
    mounted() {
        document.getElementById('main-app').classList.value = `main-container ${this.$route.name}-grid`
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        orders() {
            return this.$store.getters.orders
        },
        // stays() {
        //   return this.$store.getters.stays
        //   // return stays.filter(s => this.orders.find(o => o.stay._id === s._id))
        // },
        wishlist() {
            const stays = this.$store.getters.stays
            return stays.filter((s) => s.likedByUsers.find((u) => u._id === this.loggedInUser._id))
        },
    },
    components: { TripsPreview },
}
</script>
