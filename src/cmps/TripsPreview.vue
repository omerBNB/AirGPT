<template>
    <section class="trips-preview grid">
        <NextStayPreview v-if="nextStay" class="mini-card next-stay flex" :nextStay="nextStay" :stays="stays" />
        <!-- <PrevStayPreview v-else-if="prevStays && prevStays.length" class="mini-card prev-stay flex" :prevStay="prevStay"
            :stays="stays" /> -->
        <!-- <section class="prev-stays">
            <p> Where you've been</p>
            <section class="flex">
                <PrevStaysPreview class="stay-in-prev-stays flex" v-for="stay in prevStays" :key="stay._id"
                    :stayToPreview="stay" :stays="stays" />

            </section>
        </section> -->
        <section class="mini-card wishlist">
            <WishListCarousel :stays="wishlist" />
            <RouterLink class="link" to="/wishlist">Go to wishlist</RouterLink>
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
        stays: Object,
        orders: Object,
        wishlist: Object
    },
    computed: {
        nextStay() {
            return this.stays[0]
            // return null
            const nextStay = this.orders.filter((o) => + o.stay.checkout > Date.now())
            nextStay = nextStay.sort((a, b) => { return a.checkout - b.checkout })
            nextStay = this.stays.find(s => s._id === nextStay[0].stay._id)
            return nextStay
        },
        prevStay() {
            const prevStay = this.orders.filter((o) => + o.stay.checkout < Date.now())
            prevStay = prevStay.sort((a, b) => { return b.checkout - a.checkout })
            prevStay = this.stays.find(s => s._id === prevStay[0].stay._id)
            return prevStay
        },
        prevStays() {
            const prevStay = this.orders.filter((o) => + o.stay.checkout < Date.now())
            prevStay = prevStay.sort((a, b) => { return b.checkout - a.checkout })
            return prevStay
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