<template>
  <div class="details-layout">
    <main class="stay-details">
      <!-- stay-review -->
      <section class="stay-review flex column">
        <h1>Great location in Barcelona</h1>
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
              <span>🚽</span>
              <div class="text">
                <h4>Dedicated workspace</h4>
                <p>A private room with wifi that's well-suited for working.</p>
              </div>
            </div>
            <div class="line">
              <span>🚽</span>
              <div class="text">
                <h4>Dedicated workspace</h4>
                <p>A private room with wifi that's well-suited for working.</p>
              </div>
            </div>

            <div class="line">
              <span>🚽</span>
              <div class="text">
                <h4>Dedicated workspace</h4>
                <p>A private room with wifi that's well-suited for working.</p>
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
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {
    DetailsOrderBox,
  },
}
</script>

<style></style>
