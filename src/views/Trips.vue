<template>
    <section class="trips">
        <TripsPreview v-if="loggedInUser" :user="loggedInUser" :stays="stays" :orders="orders" :wishlist="wishlist" />
    </section>
</template>

<script>
import TripsPreview from '../cmps/TripsPreview.vue'
export default {
    created() {
        this.filterBy.buyerId = this.loggedInUser._id
        this.$store.dispatch({ type: 'loadStays' })
        this.$store.dispatch({ type: 'loadOrders', filterBy: this.filterBy })
    },

    data() {
        return {
            filterBy: {
                buyerId: ''
            }
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        orders() {
            return this.$store.getters.orders
        },
        stays() {
            const stays = this.$store.getters.stays
            return stays.filter(s => this.orders.find(o => o.stay._id === s._id))
        },
        wishlist() {
            const stays = this.$store.getters.stays
            return (stays.filter((s) => s.likedByUsers.find((u) => + u._id === +this.loggedInUser._id)))
        }
    },
    components: { TripsPreview }
}
</script>