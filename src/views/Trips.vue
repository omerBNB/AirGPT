<template>
    <section class="trips">
        <p>Trips</p>
        <TripsPreview />
        <section class="next-trips">Next trips</section>
        <section class="wishlist">Wishlist</section>
        <section class="message">Message</section>
        <section class="prev-stays">Prev stays</section>
    </section>
</template>

<script>
import TripsPreview from '../cmps/TripsPreview.vue'
export default {
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
    },
    components: { TripsPreview }
}
</script>