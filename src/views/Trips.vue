<template>
    <section class="trips">
        <TripsPreview v-if="loggedInUser" :user="loggedInUser" :stays="stays" />
    </section>
</template>

<script>
import TripsPreview from '../cmps/TripsPreview.vue'
export default {
    created() {
        this.$store.dispatch({ type: 'loadStays' })
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        stays() {
            return this.$store.getters.stays
        },
    },
    components: { TripsPreview }
}
</script>