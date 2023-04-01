<template>
  <section class="dates-modal">
    <button
      class="flex-mobile-first-btn"
      v-if="acitveModalInner !== 'search'"
      @click="setActiveModalsearch('search')">
      <h3 class="where-h3">who</h3>
      <h3>{{ guestsTxtCut }}</h3>
    </button>
    <section class="search-inner-header-cotainer-mobile" v-if="acitveModalInner === 'search'">
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
  </section>
  <button
    class="inner-header-search-btn-mobile"
    v-if="acitveModalInner === 'search'"
    @click="searchDestination">
    Search
  </button>
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
      const textAdults = this.innerHeaderFilter.guests.adults
        ? +this.innerHeaderFilter.guests.adults +
          +this.innerHeaderFilter.guests.children +
          +this.innerHeaderFilter.guests.infants +
          ' guests'
        : 'Add guests'
      const textInfants = this.innerHeaderFilter.guests.infants
        ? ', ' + +this.innerHeaderFilter.guests.infants + ' infants'
        : ''
      text = textAdults + textInfants
      return text.slice(0, count) + (text.length > count ? '...' : '')
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
