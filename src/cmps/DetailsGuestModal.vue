<template>
  <section class="search-inner-header-cotainer">
    <!-- Adults -->
    <div>
      <h2>Adults</h2>
      <p class="search-inner-header-cotainer-p">Ages 13 or above</p>
    </div>
    <div class="flex-inner-search-btns">
      <button @click="updateGuest('adults', -1)" class="add-guest-button">
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
      <span class="add-guest-span">{{ this.guests.adults || 0 }}</span>
      <button @click="updateGuest('adults', 1)" class="add-guest-button">
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
    <!-- Children -->
    <div>
      <h2>Children</h2>
      <p class="search-inner-header-cotainer-p">Ages 2-12</p>
    </div>
    <div class="flex-inner-search-btns">
      <button
        @click="$emit('updateGuest', { guest: 'children', diff: -1 })"
        class="add-guest-button">
        <span class="_8ovatg"
          ><svg
            viewBox="-0 0 32 32"
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
      <span class="add-guest-span">{{ this.guests.children || 0 }}</span>
      <button
        @click="$emit('updateGuest', { guest: 'children', diff: 1 })"
        class="add-guest-button">
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

    <!-- Infants -->
    <div>
      <h2>Infants</h2>
      <p class="search-inner-header-cotainer-p">Under 2</p>
    </div>
    <div class="flex-inner-search-btns">
      <button
        @click="$emit('updateGuest', { guest: 'infants', diff: -1 })"
        class="add-guest-button">
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
      <span class="add-guest-span">{{ this.guests.infants || 0 }}</span>
      <button @click="$emit('updateGuest', { guest: 'infants', diff: 1 })" class="add-guest-button">
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

    <!-- Pets -->
    <div>
      <h2>Pets</h2>
      <p class="plus-animals search-inner-header-cotainer-p">Bringing a service animal?</p>
    </div>
    <div class="flex-inner-search-btns">
      <button @click="$emit('updateGuest', { guest: 'pets', diff: -1 })" class="add-guest-button">
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
      <span class="add-guest-span">{{ this.guests.pets || 0 }}</span>
      <button @click="$emit('updateGuest', { guest: 'pets', diff: 1 })" class="add-guest-button">
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

    <a @click.stop="$emit('closeGuestModal', this.guestsNum)" class="close-modal">close</a>
  </section>
</template>

<script>
export default {
  name: 'DetailsGuestModal',
  props: {
    guests: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      guestsNum: {},
    }
  },
  methods: {
    updateGuest(guest, diff) {
      this.$emit('updateGuest', { guest, diff })
    },
  },

  mounted() {
    let total = 0
    for (const guest in this.guests) {
      total += this.guests[guest]
    }
    this.guestsNum = total
  },
  emits: ['closeGuestModal', 'updateGuest'],
}
</script>

<style scoped>
.search-inner-header-cotainer {
  position: absolute;
  top: 15.3em;
  right: 20px;
  padding: 2px 15px;
  width: 110%;
  height: 400px;
  padding: 0.8em 1.3em;
  border-radius: 5px;
  grid-template-rows: 1fr 1fr 1fr 1fr 0.3fr;
  align-items: center;
}

.search-inner-header-cotainer div {
  /* padding: 1em; */
  height: 65px;
}
.search-inner-header-cotainer .close-modal {
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 5px;
  padding: 10px;
  width: max-content;
  grid-column: 2;
  margin: auto;
  text-decoration: underline;
  font-size: 1.5em;
  font-family: Airbnb_Cereal-Medium;
  cursor: pointer;
}

.flex-inner-search-btns {
  align-items: center;
}
.flex-inner-search-btns > span {
  height: 15px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>
