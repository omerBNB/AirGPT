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
          <BarChart />
        </div>

        <div>
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
          <h1>Reservations</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quibusdam rerum itaque
            obcaecati asperiores dolorum tenetur consequatur accusantium cum commodi optio sapiente
            aliquam doloribus nesciunt quas unde, voluptatibus incidunt quisquam pariatur harum
            consequuntur illum. Asperiores facere at pariatur dicta hic!
          </p>
        </div>
      </section>
    </section>
    <ul class="right-side">
      <li class="reservation-title">Reservation</li>
      <li>sds</li>
      <li>sds</li>
    </ul>
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
