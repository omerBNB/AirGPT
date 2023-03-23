<template>
  <main class="reviews-container">
    <section class="reviews-rate flex">
      <span
        ><svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; height: 14px; width: 14px; margin-bottom: 1px; fill: currentcolor">
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fill-rule="evenodd"></path></svg
      ></span>
      5.0 • 9 reviews
    </section>

    <section class="rating grid">
      <p>Cleanliness</p>
      <progress max="5" value="4"></progress>

      <p>Communication</p>
      <progress max="5" value="4"></progress>

      <p>Check-in</p>
      <progress max="5" value="4"></progress>

      <p>Accuracy</p>
      <progress max="5" value="4"></progress>

      <p>Location</p>
      <progress max="5" value="4"></progress>

      <p>Value</p>
      <progress max="5" value="4"></progress>
    </section>
  </main>
</template>

<script>
export default {
  name: 'DetailsReviews',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
}
</script>

<style></style>
