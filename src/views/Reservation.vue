<template>
  <section v-if="this.loggedInUser && this.currUserOrders" class="reservation flex">
    <section class="left-side-reservation">
      <div class="box total">
        <h1>Total</h1>
        <p>{{ this.totalMoney }}$</p>
      </div>
      <div class="box line">
        <h1>Revenue / month</h1>
        <BarChart style="height: 50%" :total="total" :orders="this.currUserOrders" />
      </div>

      <div class="box pie">
        <h1>Reservations / listing</h1>
        <ChartPie style="height: 80%" :orders="this.currUserOrders" />
      </div>

      <div class="box status">
        <h1>Reservations status</h1>
        <div class="flex space-between">
          <p>Pending</p>
          <p style="color: orange">{{ pendingCount }}</p>
        </div>
        <div class="flex space-between">
          <p>Approved</p>
          <p style="color: green">{{ approvedCount }}</p>
        </div>
        <div class="flex space-between">
          <p>Rejected</p>
          <p style="color: red">{{ rejectedCount }}</p>
        </div>
      </div>

      <div class="box reviews">
        <h1>Reviews avarge pre year</h1>
        <LineChart v-if="this.currUserStays" :currUserStays="this.currUserStays" style="height: 70%" />
      </div>
    </section>

    <section class="right-side-reservation">
      <article class="subtitle grid">
        <p>Guest</p>
        <p>Check in</p>
        <p>Check out</p>
        <p>Stay Name</p>
        <p>Price</p>
        <p>Status</p>
        <p></p>
      </article>
      <el-scrollbar style="height: 100%">
        <article v-for="order in this.currUserOrders" class="card">
          <div class="img-guest flex align-center">
            <img :src="order.buyer.imgUrl" />
            <h3>{{ order.buyer.fullname }}</h3>
          </div>
          <p>{{ order.checkin }}</p>
          <p>{{ order.checkout }}</p>
          <p>{{ order.stay.name }}</p>
          <p>${{ order.totalPrice }}</p>
          <p>{{ order.status }}</p>

          <button v-if="order.status === 'pending'" @click="changeOrderStatus(order, 'approve')" class="btn approve-btn">
            Approve
          </button>
          <button v-if="order.status === 'pending'" @click="changeOrderStatus(order, 'reject')" class="btn reject-btn">
            Reject
          </button>
        </article>
      </el-scrollbar>
    </section>
  </section>
</template>

<script>
import ChartPie from '../cmps/ChartPie.vue'
import BarChart from '../cmps/BarChart.vue'
import LineChart from '../cmps/LineChart.vue'
export default {
  name: 'Reservation',
  data() {
    return {
      total: {},
      loggedInUser: null,
      currUserOrders: null,
      currUserStays: null,
      totalMoney: 0,
    }
  },

  async created() {
    this.loggedInUser = this.$store.getters.loggedinUser

    const orders = await this.$store.dispatch({ type: 'loadOrders', filterBy: '' })
    // this.currUserOrders = orders.filter((order) => order.hostId === this.loggedInUser._id)
    this.currUserOrders = orders
    // console.log('this.currUserOrders:', this.currUserOrders)
    const stays = await this.$store.dispatch({ type: 'loadStays', filterBy: '' })
    this.currUserStays = stays.filter((stay) => stay.host._id === this.loggedInUser._id)

    this.calcTotalMoney()
  },

  mounted() { },

  methods: {
    calcTotalMoney() {
      const approvedOrder = this.currUserOrders.filter((order) => order.status === 'approve')
      this.totalMoney = approvedOrder.reduce((acc, order) => {
        return acc + order.totalPrice
      }, 0)
    },
    async changeOrderStatus(order, newStatus) {
      const currOrder = JSON.parse(JSON.stringify(order))
      currOrder.status = newStatus
      const newOrder = await this.$store.dispatch({ type: 'updateOrder', order: currOrder })
      console.log('newOrder:', newOrder)
      const targetOrder = this.currUserOrders.find((order) => order._id === newOrder._id)
      targetOrder.status = newOrder.status

      this.calcTotalMoney()
    },
  },

  computed: {
    pendingCount() {
      const pending = this.currUserOrders.filter((order) => order.status === 'pending')
      console.log('pending', pending)
      return pending.length
    },

    approvedCount() {
      const approved = this.currUserOrders.filter((order) => order.status === 'approve')
      return approved.length
    },

    rejectedCount() {
      const rejected = this.currUserOrders.filter((order) => order.status === 'reject')
      return rejected.length
    },

    getAllUserOrders() {
      return (this.currUserOrders = this.$store.getters.orders.filter(
        (order) => order.hostId === this.loggedInUser._id
      ))
      // this.currUserOrders = this.$store.getters.orders
    },
  },
  components: {
    ChartPie,
    BarChart,
    LineChart,
  },
  // watch: {
  //   currUserOrders() {
  //     this.calcTotalMoney()
  //   },
  // },
}
</script>

<!-- <section class="reservation-header flex">
        <img class="host-img" src="../imgs/imgs_test/ido_test.jpg" alt="profile-img" />
        <div class="host-info">
          <h1 class="fullname">Ido Tsehori</h1>
          <p class="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam blanditiis sequi,
            impedit sint aliquid consequuntur qui ratione illum ab!
          </p>
        </div>
      </section> -->

<style scoped>
.el-scrollbar {
  --el-scrollbar-opacity: 0.3;
  --el-scrollbar-bg-color: #f4305482;
  --el-scrollbar-hover-opacity: 0.7;
  --el-scrollbar-hover-bg-color: var(--el-text-color-secondary);
}
</style>

<!-- past html: -->
<!-- 
<section class="right-side-reservation">
  <article class="subtitle grid">
    <p>Guest</p>
    <p>Check in</p>
    <p>Check out</p>
    <p>Stay Name</p>
    <p>Price</p>
    <p>Status</p>
    <p></p>
  </article>
  <el-scrollbar style="height: 100%">
    <article v-for="order in this.currUserOrders" class="card">
      <div class="img-guest flex align-center">
        <img :src="order.buyer.imgUrl" />
        <h3>{{ order.buyer.fullname }}</h3>
      </div>
      <p>{{ order.checkin }}</p>
      <p>{{ order.checkout }}</p>
      <p>{{ order.stay.name }}</p>
      <p>${{ order.totalPrice }}</p>
      <p>{{ order.status }}</p>

      <button
        v-if="order.status === 'pending'"
        @click="changeOrderStatus(order, 'approve')"
        class="btn approve-btn">
        Approve
      </button>
      <button
        v-if="order.status === 'pending'"
        @click="changeOrderStatus(order, 'reject')"
        class="btn reject-btn">
        Reject
      </button>
    </article>
  </el-scrollbar>
</section>
</section> -->

<!-- past css: -->
<!-- .left-side-reservation {
  padding: 0;
  display: flex;
  flex-direction: column;

  height: 100%;
  .row {
    padding: 0;
    height: 100%;

    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: #0000001f 0 6px 16px;
      padding: 0em 0.5em;
      border-radius: 15px;
      width: 100%;
      height: 100%;

      h1 {
        text-align: center;
        font-size: 1em;
      }
    }
  }
} -->
