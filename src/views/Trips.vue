<template>
    <section class="trips">
        <TripsPreview v-if="loggedInUser" :user="loggedInUser" />
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