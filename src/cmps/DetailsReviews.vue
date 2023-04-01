<template>
  <main v-if="currStay" class="reviews-container">
    <section class="reviews-header">
      <section class="reviews-rate flex">
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
              fill-rule="evenodd"></path>
          </svg>
        </span>
        <span class="bold-font">{{ currStay.rate }}</span>
        <span> • </span>
        <span
          ><a class="bold-font" href="">{{ reviewsNum }}</a></span
        >
      </section>

      <section class="rating grid">
        <p>Cleanliness</p>
        <div class="progress-bar flex">
          <progress max="5" value="4"></progress>
          <span>4</span>
        </div>

        <p>Communication</p>
        <div class="progress-bar flex">
          <progress max="5" value="4"></progress>
          <span>4</span>
        </div>

        <p>Check-in</p>
        <div class="progress-bar flex">
          <progress max="5" value="3"></progress>
          <span>5</span>
        </div>

        <p>Accuracy</p>
        <div class="progress-bar flex">
          <progress max="5" value="2"></progress>
          <span>2</span>
        </div>

        <p>Location</p>
        <div class="progress-bar flex">
          <progress max="5" value="5"></progress>
          <span>5</span>
        </div>

        <p>Value</p>
        <div class="progress-bar flex">
          <progress max="5" value="3"></progress>
          <span>3</span>
        </div>
      </section>
    </section>
    <section>
      <!-- Guest Reviews -->
      <section class="guest-reviews-container">
        <article v-for="review in currStay.reviews" class="review flex">
          <div class="mini-user-details flex">
            <img :src="review.by.imgUrl" />
            <div>
              <h4>{{ review.by.fullname }}</h4>
              <span>{{
                new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(
                  new Date(review.at)
                )
              }}</span>
            </div>
          </div>
          <div>
            <p>{{ review.txt }}</p>
          </div>
        </article>
      </section>
      <!--  -->
    </section>
  </main>
</template>

<script>
export default {
  name: 'DetailsReviews',
  props: {
    stay: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currStay: null,
    }
  },
  methods: {},
  computed: {
    reviewsNum() {
      if (this.stay.reviews.length === 1) return '1 review'
      else if (!this.stay.reviews.length) return 'no reviews'
      return this.stay.reviews.length + ' reviews'
    },

    formatReviewDate(review) {},
  },
  created() {
    this.currStay = this.stay
  },
  components: {},
}
</script>

<style></style>
