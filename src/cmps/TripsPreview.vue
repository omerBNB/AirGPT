<template>
    <section class="trips-preview grid">
        <section class="mini-card wishlist">
            <p>Wishlist</p>
            <RouterLink to="/wishlist">Go to wishlist</RouterLink>
        </section>
        <section class="mini-card message">
            <p>Message</p>
            <RouterLink to="/message">Go to message</RouterLink>
        </section>
        <NextStayPreview v-if="nextStays && nextStays.length" class="mini-card next-stay flex" :nextStays="nextStays" />
        <PrevStayPreview v-else-if="prevStays && prevStays.length" class="mini-card prev-stay flex"
            :prevStays="prevStays" />
        <section class="prev-stays">
            <p> Where you've been</p>
            <section class="flex">
                <PrevStaysPreview class="stay-in-prev-stays flex" v-for="stay in prevStays" :key="stay._id" :stay="stay" />
            </section>
        </section>
    </section>
</template>

<script>
import NextStayPreview from '../cmps/NextStayPreview.vue'
import PrevStayPreview from '../cmps/PrevStayPreview.vue'
import PrevStaysPreview from '../cmps/PrevStaysPreview.vue'
export default {
    props: { user: Object },
    computed: {
        nextStays() {
            // return null
            return this.user.trips.length ? this.user.trips.filter(stay => +stay.checkOut > Date.now()) : null
        },
        prevStays() {
            return this.user.trips.length ? this.user.trips.filter(stay => +stay.checkOut < Date.now()) : null
        },
    },
    components: {
        NextStayPreview,
        PrevStayPreview,
        PrevStaysPreview
    }
}
</script>