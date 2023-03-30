<template>
  <section v-if="this.loggedInUser" class="reservation flex">
    <section class="left-side-reservation">
      <section class="row flex">
        <div class="box">
          <h1>Revenue / month</h1>
          <BarChart :orders="this.orders" />
        </div>

        <div class="box">
          <h1>Reservations / listing</h1>
          <ChartPie />
        </div>
      </section>

      <section class="row flex">
        <div class="box">
          <h1>Reservations status</h1>
          <div class="flex space-between">
            <p>Pending</p>
            <p>{{ pendingCount }}</p>
          </div>
          <div class="flex space-between">
            <p>Approved</p>
            <p>{{ approvedCount }}</p>
          </div>
          <div class="flex space-between">
            <p>Rejected</p>
            <p>{{ rejectedCount }}</p>
          </div>
          <!-- <div class="flex space-between">
            <p>Completed</p>
            <p>2</p>
          </div> -->
        </div>

        <div class="box">
          <h1>Something</h1>
          <LineChart />
        </div>
      </section>
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
        <article v-for="order in this.loggedInUser.orders" class="card">
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
            @click="changeOrderStatus(order._id, 'approve')"
            class="btn approve-btn">
            Approve
          </button>
          <button
            v-if="order.status === 'pending'"
            @click="changeOrderStatus(order._id, 'reject')"
            class="btn reject-btn">
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
      loggedInUser: null,
      orders: null,
    }
  },
  methods: {
    changeOrderStatus(orderId, newStatus) {
      // const idx = this.orders.findIndex((order) => order._id === orderId)
      // this.orders[idx].status = newStatus
      this.$store.dispatch({ type: 'updateOrder', orderId, newStatus })
    },
  },

  mounted() {
    const loggedInUser = this.$store.getters.loggedinUser
    this.loggedInUser = loggedInUser
    console.log('this.loggedInUser:', this.loggedInUser)
    this.orders = this.loggedInUser.orders
    console.log('this.orders:', this.orders)
  },
  created() {},

  computed: {
    pendingCount() {
      const pending = this.orders.filter((order) => order.status === 'pending')
      return pending.length
    },

    approvedCount() {
      const approved = this.orders.filter((order) => order.status === 'approved')
      return approved.length
    },

    rejectedCount() {
      const rejected = this.orders.filter((order) => order.status === 'rejected')
      return rejected.length
    },
    // completedCount() {
    //   const completed = this.orders.filter((order) => order.status === 'completed')
    //   return completed.length
    // },
  },
  components: {
    ChartPie,
    BarChart,
    LineChart,
  },
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
  --el-scrollbar-bg-color: #8e957d;
  --el-scrollbar-hover-opacity: 0.7;
  --el-scrollbar-hover-bg-color: var(--el-text-color-secondary);
}

.el-scrollbar__view {
  background-color: pink;
}
</style>
