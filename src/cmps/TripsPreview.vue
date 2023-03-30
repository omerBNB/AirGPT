<template>
    <section class="trips-preview grid">
        <section class="mini-card wishlist">
            <WishListCarousel :stays="user.wishList" />
            <RouterLink class="link" to="/wishlist">Go to wishlist</RouterLink>
        </section>
        <NextStayPreview v-if="nextStays && nextStays.length" class="mini-card next-stay flex" :nextStays="nextStays"
            :stays="stays" />
        <PrevStayPreview v-else-if="prevStays && prevStays.length" class="mini-card prev-stay flex" :prevStays="prevStays"
            :stays="stays" />
        <section class="prev-stays">
            <p> Where you've been</p>
            <section class="flex">
                <PrevStaysPreview class="stay-in-prev-stays flex" v-for="stay in prevStays" :key="stay._id"
                    :stayToPreview="stay" :stays="stays" />

            </section>
        </section>
    </section>
</template>

<script>
import NextStayPreview from '../cmps/NextStayPreview.vue'
import PrevStayPreview from '../cmps/PrevStayPreview.vue'
import PrevStaysPreview from '../cmps/PrevStaysPreview.vue'
import WishListCarousel from '../cmps/WishListCarousel.vue'
export default {
    props: {
        user: Object,
        stays: Object
    },
    computed: {
        nextStays() {
            // return null
            return this.user.trips.length ? this.user.trips.filter(stay => +stay.checkout > Date.now()) : null
        },
        prevStays() {
            return this.user.trips.length ? this.user.trips.filter(stay => + stay.checkout < Date.now()) : null
        },
    },
    components: {
        NextStayPreview,
        PrevStayPreview,
        PrevStaysPreview,
        WishListCarousel
    }
}
</script>