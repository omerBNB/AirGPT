<template>
  <section class="reservation flex">
    <section class="left-side">
      <section class="reservation-header flex">
        <img class="host-img" src="../imgs/imgs_test/ido_test.jpg" alt="profile-img" />
        <div class="host-info">
          <h1 class="fullname">Ido Tsehori</h1>
          <p class="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam blanditiis sequi,
            impedit sint aliquid consequuntur qui ratione illum ab!
          </p>
        </div>
      </section>

      <section class="row second-row flex">
        <div>
          <h1>Revenue / month</h1>
          <!-- <BarChart /> -->
        </div>

        <div class="reservations-listing">
          <h1>Reservations / listing</h1>
          <ChartPie />
        </div>
      </section>

      <section class="row third-row flex">
        <div>
          <h1>Reservations status</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quibusdam rerum itaque
            obcaecati asperiores dolorum tenetur consequatur accusantium cum commodi optio sapiente
            aliquam doloribus nesciunt quas unde, voluptatibus incidunt quisquam pariatur harum
            consequuntur illum. Asperiores facere at pariatur dicta hic!
          </p>
        </div>

        <div>
          <h1>Reviews</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quibusdam rerum itaque
            obcaecati asperiores dolorum tenetur consequatur accusantium cum commodi optio sapiente
            aliquam doloribus nesciunt quas unde, voluptatibus incidunt quisquam pariatur harum
            consequuntur illum. Asperiores facere at pariatur dicta hic!
          </p>
        </div>
      </section>
    </section>
    <section class="right-side">
      <article class="reservation-title">Reservation</article>
      <article class="subtitle card flex">
        <p>guest</p>
        <p>check in</p>
        <p>check out</p>
        <p>check out</p>
        <p>name</p>
        <p>price</p>
        <p>Buttons</p>
      </article>

      <article class="card">
        <div class="flex align-center">
          <img src="../imgs/imgs_test/yuval.jpg" />
          <h3>Yuval</h3>
        </div>
        <p>03/15/2023</p>
        <p>03/23/2023</p>
        <p>Lemon Garden</p>
        <p>$1,112.00</p>
        <p>Approved</p>
        <button class="btn approve-btn">Approve</button>
        <button class="btn reject-btn">Reject</button>
      </article>

      <article class="card">
        <div class="flex align-center">
          <img src="../imgs/imgs_test/omer.jpg" />
          <h3>Omer</h3>
        </div>
        <p>03/12/2023</p>
        <p>03/11/2024</p>
        <p>Lala Land</p>
        <p>$1,233.00</p>
        <p>Completed</p>
        <button class="btn approve-btn">Approve</button>
        <button class="btn reject-btn">Reject</button>
      </article>

      <article class="card">
        <div class="flex align-center">
          <img src="../imgs/imgs_test/inon.jpg" />
          <h3>Inon</h3>
        </div>
        <p>03/15/2025</p>
        <p>03/23/2026</p>
        <p>lululu po</p>
        <p>$2000.00</p>
        <p>Completed</p>
        <button class="btn approve-btn">Approve</button>
        <button class="btn reject-btn">Reject</button>
      </article>

      <article class="card">
        <div class="flex align-center">
          <img src="../imgs/imgs_test/ido.jpg" />
          <h3>Ido</h3>
        </div>
        <p>10/15/2022</p>
        <p>03/23/2023</p>
        <p>Palala</p>
        <p>$126.00</p>
        <p>Rejected</p>
        <button class="btn approve-btn">Approve</button>
        <button class="btn reject-btn">Reject</button>
      </article>
    </section>
  </section>
</template>

<script>
import ChartPie from '../cmps/ChartPie.vue'
import BarChart from '../cmps/BarChart.vue'
export default {
  name: 'Reservation',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {
    ChartPie,
    BarChart,
  },
}
</script>

<style></style>