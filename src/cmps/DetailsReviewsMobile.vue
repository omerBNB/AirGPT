<template>
  <main v-if="currStay" class="reviews-container">
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
