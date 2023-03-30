<template>
  <div
    class="inner-header-search-btn-container"
    @click="setActiveModalsearch('search')"
    :class="{ isActive: acitveModalInner === 'search' }">
    <button class="inner-header-dates-btn-search" ref="search">
      <div>Who</div>
      <div :class="innerHeaderFilter.guests.adults ? 'bold-inner-search' : ''">
        {{ guestsTxtCut }}
      </div>
    </button>
    <button class="inner-header-search-btn big" @click="searchDestination">
      <div data-icon="true" data-testid="little-search-icon">
        <svg
          viewBox="7 0 32 32"
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
    <section class="search-inner-header-cotainer" v-if="acitveModalInner === 'search'">
      <div>
        <h2>Adults</h2>
        <p class="search-inner-header-cotainer-p">Ages 13 or above</p>
      </div>
      <div class="flex-inner-search-btns">
        <button
          class="add-guest-button"
          :class="innerHeaderFilter.guests.adults ? '' : 'disabled'"
          @click.stop="handleGuests('adults', -1)">
          <span class="_8ovatg"
            ><svg
              viewBox="-24 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28"></path>
            </svg>
          </span>
        </button>
        <span class="add-guest-span">{{ innerHeaderFilter.guests.adults }}</span>
        <button class="add-guest-button" @click.stop="handleGuests('adults', 1)">
          <span class="_8ovatg"
            ><svg
              class="svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28m-14-14v28"></path>
            </svg>
          </span>
        </button>
      </div>
      <div>
        <h2>Children</h2>
        <p class="search-inner-header-cotainer-p">Ages 2-12</p>
      </div>
      <div class="flex-inner-search-btns">
        <button
          class="add-guest-button"
          :class="+innerHeaderFilter.guests.children ? '' : 'disabled'"
          @click.stop="handleGuests('children', -1)">
          <span class="_8ovatg"
            ><svg
              viewBox="-23 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28"></path>
            </svg>
          </span>
        </button>
        <span class="add-guest-span">{{ innerHeaderFilter.guests.children }}</span>
        <button class="add-guest-button" @click.stop="handleGuests('children', 1)">
          <span class="_8ovatg"
            ><svg
              class="svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28m-14-14v28"></path>
            </svg>
          </span>
        </button>
      </div>
      <div>
        <h2>Infants</h2>
        <p class="search-inner-header-cotainer-p">Under 2</p>
      </div>
      <div class="flex-inner-search-btns">
        <button
          class="add-guest-button"
          :class="+innerHeaderFilter.guests.infants ? '' : 'disabled'"
          @click.stop="handleGuests('infants', -1)">
          <span class="_8ovatg"
            ><svg
              viewBox="-23 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28"></path>
            </svg>
          </span>
        </button>
        <span class="add-guest-span">{{ innerHeaderFilter.guests.infants }}</span>
        <button class="add-guest-button" @click.stop="handleGuests('infants', 1)">
          <span class="_8ovatg"
            ><svg
              class="svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28m-14-14v28"></path>
            </svg>
          </span>
        </button>
      </div>
      <div>
        <h2>Pets</h2>
        <p class="plus-animals search-inner-header-cotainer-p">Bringing a service animal?</p>
      </div>
      <div class="flex-inner-search-btns">
        <button
          class="add-guest-button"
          :class="+innerHeaderFilter.guests.pets ? '' : 'disabled'"
          @click.stop="handleGuests('pets', -1)">
          <span class="_8ovatg"
            ><svg
              viewBox="-23 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28"></path>
            </svg>
          </span>
        </button>
        <span class="add-guest-span">{{ innerHeaderFilter.guests.pets }}</span>
        <button class="add-guest-button" @click.stop="handleGuests('pets', 1)">
          <span class="_8ovatg"
            ><svg
              class="svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <path d="m2 16h28m-14-14v28"></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    acitveModalInner: String,
    innerHeaderFilter: Object,
  },
  data() {
    return {
      searchQuery: this.$route.query,
    }
  },
  methods: {
    setActiveModalsearch(btnName) {
      this.$emit('setActiveModalsearch', btnName)
    },
    handleGuests(guestType, diff) {
      if (!this.innerHeaderFilter.guests[guestType] && diff === -1) return
      this.innerHeaderFilter.guests[guestType] = +this.innerHeaderFilter.guests[guestType] + diff
    },
    searchDestination() {
      this.$emit('searchDestination')
    },
  },
  computed: {
    guestsTxtCut() {
      const count = 10
      let text
      const textAdults = this.innerHeaderFilter.guests.adults? 
      +this.innerHeaderFilter.guests.adults +
          +this.innerHeaderFilter.guests.children +
          +this.innerHeaderFilter.guests.infants +
          ' guests'
        : 'Add guests'
      const textInfants = this.innerHeaderFilter.guests.infants? ', ' + +this.innerHeaderFilter.guests.infants + ' infants' : ''
      text = textAdults + textInfants
      return text.slice(0, count) + (text.length > count ? "..." : "");
    },
  },
  created() {
    if (this.$route.query) {
      const { adults, children, infants, pets } = this.$route.query
      this.innerHeaderFilter.guests = { adults, children, infants, pets }
      if (!this.innerHeaderFilter.guests.adults) {
        this.innerHeaderFilter.guests.adults = 0
        this.innerHeaderFilter.guests.children = 0
        this.innerHeaderFilter.guests.infants = 0
        this.innerHeaderFilter.guests.pets = 0
      }
    }
  },
  components: {},
  emits: ['setActiveModalsearch', 'searchDestination'],
}
</script>
