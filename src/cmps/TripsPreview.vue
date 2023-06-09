<template>
    <section v-if="stays.length && orders.length" class="trips-preview grid">
        <NextStayPreview v-if="nextStay" class="mini-card next-stay flex" :nextStay="nextStay" :stays="stays" />
        <PrevStayPreview v-else-if="prevStay" class="mini-card prev-stay flex" :prevStay="prevStay" />
        <section class="prev-stays">
            <p> Where you've been</p>
            <section class="main-container-stay-in-prev-stays flex">
                <PrevStaysPreview class="stay-in-prev-stays flex" v-for="stay in prevStays" :key="stay._id"
                    :stayToPreview="stay" />
            </section>
        </section>
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
        stays: Array,
        orders: Array,
        wishlist: Array
    },
    computed: {
        nextStay() {
            // get all the next dates
            const nextOrders = this.orders.filter((o) => {
                const [day, month, year,] = o.checkout.split('/')
                const checkout = new Date(`${year}-${month}-${day}`)
                return checkout > new Date()
            })
            // sort them from new to old
            if (nextOrders.length) {
                nextOrders.sort((a, b) => {
                    if (String(new Date(a.checkin)) > String(new Date(b.checkin))) return -1
                    if (String(new Date(a.checkin)) < String(new Date(b.checkin))) return 1
                    return 0
                })

                if (this.stays.length) return {
                    nextStay: this.stays.find(s => s._id === nextOrders[0].stay._id),
                    checkin: nextOrders[0].checkin,
                    checkout: nextOrders[0].checkout,
                    status: nextOrders[0].status
                }
            }
            else return null
        },
        prevOrders() {
            // get all the past dates
            const prevOrders = this.orders.filter((o) => {
                const [day, month, year,] = o.checkout.split('/')
                const checkout = new Date(`${year}-${month}-${day}`)
                return checkout < new Date()
            })
            // sort them from old to new 
            if (prevOrders.length) {
                prevOrders.sort((a, b) => {
                    if (String(new Date(a.checkout)) > String(new Date(b.checkout))) return 1
                    if (String(new Date(a.checkout)) < String(new Date(b.checkout))) return -1
                    return 0
                })
                return prevOrders
            }
            else return null
        },
        prevStays() {
            let prevOrders = this.prevOrders
            if (this.nextStay) prevOrders = prevOrders.slice(0, 4)
            else prevOrders = prevOrders.slice(1, 5)

            let prevStays = this.stays.filter(s => prevOrders.find(o => o.stay._id === s._id))
            if (prevStays.length) {
                let prevStaysToPreview = prevStays.map(stay => {
                    let idx = prevOrders.findIndex(o => o.stay._id === stay._id)
                    return {
                        prevStay: stay,
                        checkin: prevOrders[idx].checkin,
                        checkout: prevOrders[idx].checkout,
                    }
                })
                prevStaysToPreview.sort((a, b) => {
                    if (String(new Date(a.checkout)) > String(new Date(b.checkout))) return 1
                    if (String(new Date(a.checkout)) < String(new Date(b.checkout))) return -1
                    return 0
                })
                return prevStaysToPreview
            }
            else return null
        },
        prevStay() {
            if (this.prevOrders.length) {
                if (this.stays.length) return {
                    prevStay: this.stays.find(s => s._id === this.prevOrders[0].stay._id),
                    checkin: this.prevOrders[0].checkin,
                    checkout: this.prevOrders[0].checkout,
                }
            }
            else return null
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