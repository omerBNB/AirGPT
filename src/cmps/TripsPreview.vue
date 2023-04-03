<template>
<<<<<<< HEAD
  <section v-if="stays.length" class="trips-preview grid">
=======
  <section class="trips-preview grid" v-if="stays.length">
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
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
<<<<<<< HEAD
          :stayToPreview="stay" />
=======
          :stayToPreview="stay"
          :stays="stays" />
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
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
<<<<<<< HEAD
    stays: Object,
    orders: Object,
    wishlist: Object,
  },
  computed: {
    nextStay() {
=======
    stays: Array,
    orders: Array,
    wishlist: Object,
  },
  mounted() {
    console.log('this.stays', this.stays)
  },
  computed: {
    nextStay() {

>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
      // return null
      const nextStays = this.orders?.filter((o) => {
        const [day, month, year] = o.checkout.split('/')
        const checkout = new Date(`${year}-${month}-${day}`)
        return checkout > new Date()
      })
      if (nextStays.length) {
        nextStays.sort((a, b) => new Date(a.checkin) - new Date(b.checkin))
        let nextStayToPreview = {
<<<<<<< HEAD
          nextStay: this.stays.find((s) => s._id === nextStays[0].stay._id),
          checkin: nextStays[0].checkin,
          checkout: nextStays[0].checkout,
        }
=======
          // nextStay: this.stays.find((s) => s._id === nextStays[0].stay._id),
          nextStay:this.stays[0],
          checkin: nextStays[0].checkin,
          checkout: nextStays[0].checkout,
        }
                  console.log('this.stays',this.stays)

        console.log('nextStayToPreview', nextStays[0])
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
        return nextStayToPreview
      } else return null
    },
    prevStay() {
      // get all the past date
<<<<<<< HEAD
=======
      console.log(this.stays)
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
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
<<<<<<< HEAD
          prevStay: this.stays.find((s) => s._id === prevStays[0].stay._id),
          checkin: prevStays[0].checkin,
          checkout: prevStays[0].checkout,
        }
=======
          // prevStay: this.stays.find((s) => s._id === prevStays[0].stay._id),
          prevStay: prevStays[0],
          checkin: prevStays[0].checkin,
          checkout: prevStays[0].checkout,
        }

>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
        return prevStayToPreview
      } else return null
    },
    prevStays() {
<<<<<<< HEAD
      console.log('hello you', this.stays)
      const newStays = this.orders.filter((o) => {
=======
      console.log('this.stys', this.stays)

      const prevStays = this.orders.filter((o) => {
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
        const [day, month, year] = o.checkout.split('/')
        const checkout = new Date(`${year}-${month}-${day}`)
        return checkout < new Date()
      })
      // sort them from new to old
<<<<<<< HEAD
      newStays.sort((a, b) => {
=======
      prevStays.sort((a, b) => {
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
        if (String(new Date(a.checkout)) > String(new Date(b.checkout))) return 1
        if (String(new Date(a.checkout)) < String(new Date(b.checkout))) return -1
        return 0
      })
<<<<<<< HEAD
      console.log('staysssss', newStays)
      const trying = newStays.filter((currStay) => {
        return this.stays.find((s) => s._id === currStay.stay._id)
      })
      console.log('walabala', trying)
=======
      return prevStays.map((currStay) => this.stays.find((s) => s._id === currStay.stay._id))
>>>>>>> f5299c19ebbfa1a38b1629d37bd759b4dbd3037c
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
