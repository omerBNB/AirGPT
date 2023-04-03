<template>
  <section v-if="stays.length" class="trips-preview grid">
    <NextStayPreview
      v-if="nextStay"
      class="mini-card next-stay flex"
      :nextStay="nextStay"
      :stays="stays" />
    <PrevStayPreview v-else-if="prevStay" class="mini-card prev-stay flex" :prevStay="prevStay" />
    <section class="prev-stays">
      <p>Where you've been</p>
      <section class="main-container-stay-in-prev-stays flex">
        <PrevStaysPreview
          class="stay-in-prev-stays flex"
          v-for="stay in prevStays"
          :key="stay?._id"
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
import { stayService } from '../services/stay.service'
export default {
  props: {
    user: Object,
    stays: Object,
    orders: Object,
    wishlist: Object,
  },
  computed: {
    nextStay() {
      // return null
      const nextStays = this.orders?.filter((o) => {
        const [day, month, year] = o.checkout.split('/')
        const checkout = new Date(`${year}-${month}-${day}`)
        return checkout > new Date()
      })
      if (nextStays.length) {
        nextStays.sort((a, b) => new Date(a.checkin) - new Date(b.checkin))
        let nextStayToPreview = {
          nextStay: this.stays.find((s) => s._id === nextStays[0].stay._id),
          checkin: nextStays[0].checkin,
          checkout: nextStays[0].checkout,
        }
        return nextStayToPreview
      } else return null
    },
    prevStay() {
      // get all the past date
      const prevStays = this.orders?.filter((o) => {
        const [day, month, year] = o.checkout.split('/')
        const checkout = new Date(`${year}-${month}-${day}`)
        return checkout < new Date()
      })
      // sort them from new to old
      if (prevStays.length) {
        prevStays.sort((a, b) => {
          if (String(new Date(a.checkout)) > String(new Date(b.checkout))) return 1
          if (String(new Date(a.checkout)) < String(new Date(b.checkout))) return -1
          return 0
        })
        const prevStayToPreview = {
          prevStay: this.stays.find((s) => s._id === prevStays[0].stay._id),
          checkin: prevStays[0].checkin,
          checkout: prevStays[0].checkout,
        }
        return prevStayToPreview
      } else return null
    },
    prevStays() {
      console.log('hello you', this.stays)
      const newStays = this.orders.filter((o) => {
        const [day, month, year] = o.checkout.split('/')
        const checkout = new Date(`${year}-${month}-${day}`)
        return checkout < new Date()
      })
      // sort them from new to old
      newStays.sort((a, b) => {
        if (String(new Date(a.checkout)) > String(new Date(b.checkout))) return 1
        if (String(new Date(a.checkout)) < String(new Date(b.checkout))) return -1
        return 0
      })
      console.log('staysssss', newStays)
      const trying = newStays.filter((currStay) => {
        return this.stays.find((s) => s._id === currStay.stay._id)
      })
      console.log('walabala', trying)
    },
  },
  components: {
    NextStayPreview,
    PrevStayPreview,
    PrevStaysPreview,
    WishListCarousel,
  },
}
</script>
