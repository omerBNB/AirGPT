<template>
    <section class="flex-inner-header">
  <section class="inner-header-container">
    <button class="where-to-btn" @click="isActived" :class="class">
      <form action="">
        <div>Where</div>
        <input class="where-to-input" type="search" placeholder="Search destinations" />
      </form>
    </button>
    <div class="border-inner-header"></div>
    <button class="inner-header-dates-btn">
      <div>Check in</div>
      <div>Add dates</div>
    </button>
    <div class="border-inner-header"></div>
    <button class="inner-header-dates-btn">
      <div>Check out</div>
      <div>Add dates</div>
    </button>
    <div class="border-inner-header"></div>
    <div class="inner-header-search-btn">
      <button class="inner-header-dates-btn">
        <div>Who</div>
        <div>Add guests</div>
      </button>
      <button class="inner-header-search-btn big">
        <div data-icon="true" data-testid="little-search-icon">
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
              stroke-width: 5.33333;
              overflow: visible;
            ">
            <g fill="none">
              <path
                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
            </g>
          </svg>
        </div>
        <div>Search</div>
      </button>
    </div>
  </section>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    isActived() {
      this.isActive = true
    },
  },
  computed: {
    class() {
      return {
        isActive: this.isActive === true,
      }
    },
  },
  created() {},
  components: {},
}
</script>
