<template>
  <div class="details-layout">
    <main v-if="stay" class="stay-details">
      <!-- stay-review -->
      <section class="stay-review flex column">
        <h1>{{ stay.name }}</h1>
        <section class="flex space-between">
          <div class="flex">
            <span>⭐4.9</span>
            <span>.</span>
            <span>2 reviews</span>
            <span>.</span>
            <span>🥇 Superhost</span>
            <span>.</span>
            <span>Barcelona, Spain</span>
          </div>

          <div class="flex">
            <span>💿Share</span>
            <span>♥Save</span>
          </div>
        </section>
      </section>
      <!-- Img-container -->
      <section class="img-container">
        <img class="main-img" src="../../imgs_test/ido_test.jpg" alt="img" />
        <img class="img-1" src="../../imgs_test/ido_test.jpg" alt="img" />
        <img class="img-2" src="../../imgs_test/ido_test.jpg" alt="img" />
        <img class="img-3" src="../../imgs_test/ido_test.jpg" alt="img" />
        <img class="img-4" src="../../imgs_test/ido_test.jpg" alt="img" />
      </section>

      <!-- Details-container -->
      <section class="details-container">
        <div class="stay-ferrites">
          <div class="ferrites-header">
            <div class="header-text">
              <h3>Entire amazing views hosted by Marina E Mickael</h3>
              <p>5 guests · 5 bedrooms · 10 beds · 3 baths</p>
            </div>
            <img src="../../imgs_test/ido_test.jpg" />
          </div>
          <div class="ferrites-main">
            <div class="line">
              <img src="../../ferrites_imgs/superhost.svg" />
              <div class="text">
                <h4>Nazife is a Superhost</h4>
                <p>
                  Superhosts are experienced, highly rated hosts who are committed to providing
                  great stays for guests.
                </p>
              </div>
            </div>
            <div class="line">
              <img src="../../ferrites_imgs/checkin.svg" />
              <div class="text">
                <h4>Great check-in experience</h4>
                <p>100% of recent guests gave the check-in process a 5-star rating.</p>
              </div>
            </div>

            <div class="line">
              <img src="../../ferrites_imgs/location.svg" />
              <div class="text">
                <h4>Free cancellation for 48 hours.</h4>
              </div>
            </div>
          </div>

          <div class="aircover">
            <h2>aircover</h2>
            <p>
              Every booking includes free protection from Host cancellations, listing inaccuracies,
              and other issues like trouble checking in.
            </p>
            <a href="">Learn more</a>
          </div>

          <div class="ameneties">
            <h2>What this place offers</h2>
            <div class="offers">
              <div class="offer">
                <p>♥</p>
                <p>Internet</p>
              </div>
              <div class="offer">
                <p>♥</p>
                <p>Air conditioning</p>
              </div>
              <div class="offer">
                <p>♥</p>
                <p>Kitchen</p>
              </div>
              <div class="offer">
                <p>♥</p>
                <p>Smoking allowed</p>
              </div>
              <div class="offer">
                <p>♥</p>
                <p>Elevator</p>
              </div>
            </div>
          </div>
        </div>

        <DetailsOrderBox />
      </section>
    </main>
  </div>
</template>

<script>
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'
import { storageService } from '../services/async-storage.service.js'
export default {
  name: '',
  data() {
    return {
      stay: null,
    }
  },
  methods: {},
  computed: {},
  created() {
    const { stayId } = this.$route.params
    storageService.get('stay', stayId).then((stay) => {
      this.stay = stay
    })
  },
  mounted() {
    const currRoute = this.$route.path
    if (currRoute === '/stay') {
      document.getElementById('main-app').classList.value = 'main-container details-grid'
    }
  },
  components: {
    DetailsOrderBox,
  },
}
</script>

<style></style>
