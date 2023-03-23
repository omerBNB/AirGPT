<template>
  <div class="details-layout">
    <main v-if="stay" class="stay-details">
      <!-- Stay-review -->
      <section class="stay-review flex column">
        <h1>{{ stay.name }}</h1>
        <section class="flex space-between">
          <div class="flex">
            <span
              ><svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 14px;
                  width: 14px;
                  margin-bottom: 1px;
                  fill: currentcolor;
                ">
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"></path></svg
            ></span>
            <span>4.9</span>
            <span>•</span>
            <span class="underline">2 reviews</span>
            <span>•</span>
            <span>🥇 Superhost</span>
            <span>•</span>
            <span>Barcelona, Spain</span>
          </div>

          <div class="flex">
            <span
              ><svg
                class="save-svg"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  fill: none;
                  stroke: currentcolor;
                  stroke-width: 2;
                  overflow: visible;
                  height: 16px;
                  width: 16px;
                ">
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                  <path d="M16 3v23V3z"></path>
                  <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                </g></svg
            ></span>
            <span>Share</span>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2;
                  overflow: visible;
                ">
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z\"></path></svg
            ></span>
            <span>Save</span>
          </div>
        </section>
      </section>

      <!-- Img-component -->
      <StayDetailsImgs :stay="stay" />

      <!-- Details-container -->
      <section class="details-container">
        <!-- ferrites -->
        <div class="stay-ferrites">
          <div class="ferrites-header">
            <div class="header-text">
              <h3>Entire amazing views hosted by {{ stay.host.fullname }}</h3>
              <p>5 guests • 5 bedrooms • 10 beds • 3 baths</p>
            </div>
            <img :src="stay.host.imgUrl" />
          </div>
          <div class="ferrites-main">
            <div class="line">
              <img src="../../src/imgs/ferrites_imgs/superhost.svg" />
              <div class="text">
                <h4>{{ stay.host.fullname }} is a Superhost</h4>
                <p>
                  Superhosts are experienced, highly rated hosts who are committed to providing
                  great stays for guests.
                </p>
              </div>
            </div>
            <div class="line">
              <img src="../../src/imgs/ferrites_imgs/checkin.svg" />
              <div class="text">
                <h4>Great check-in experience</h4>
                <p>100% of recent guests gave the check-in process a 5-star rating.</p>
              </div>
            </div>

            <div class="line">
              <img src="../../src/imgs/ferrites_imgs/location.svg" />
              <div class="text">
                <h4>Free cancellation for 48 hours.</h4>
              </div>
            </div>
          </div>

          <!-- aircover -->
          <section class="aircover">
            <!-- <img src="../../imgs_test/aircover_logo.webp" alt="" srcset="" /> -->
            <img src="../../src/imgs/aircover_logo/aircover_logo.webp" alt="aircover" />
            <p>
              Every booking includes free protection from Host cancellations, listing inaccuracies,
              and other issues like trouble checking in.
            </p>
            <a href="">Learn more</a>
          </section>
          <!-- ameneties -->
          <section class="ameneties">
            <h3>What this place offers</h3>
            <div class="offers grid">
              <div v-for="amenitie in stay.amenities" class="offer">
                <img :src="'../../src/imgs/amenities/' + amenitie.toLowerCase() + '.svg'" />
                <p>{{ amenitie }}</p>
              </div>
            </div>
          </section>
        </div>

        <DetailsOrderBox />
      </section>
    </main>
    <DetailsReviews />
    <!-- <section>Reviews</section> -->
  </div>
</template>

<script>
import DetailsOrderBox from '../cmps/DetailsOrderBox.vue'
import StayDetailsImgs from '../cmps/StayDetailsImgs.vue'
import DetailsReviews from '../cmps/DetailsReviews.vue'
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
    if (currRoute.includes('stay')) {
      document.getElementById('main-app').classList.value = 'main-container details-grid'
    }
  },
  components: {
    DetailsOrderBox,
    StayDetailsImgs,
    DetailsReviews,
  },
}
</script>

<style></style>
