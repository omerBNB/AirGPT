<template>
  <section class="search-inner-header-cotainer">
    <div>
      <h2>Adults</h2>
      <p class="search-inner-header-cotainer-p">Ages 13 or above</p>
    </div>
    <div class="flex-inner-search-btns">
      <button class="add-guest-button">
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
      <span class="add-guest-span">vbgf!</span>
      <button class="add-guest-button">
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
      <button class="add-guest-button">
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
      <span class="add-guest-span">fdf!</span>
      <button class="add-guest-button">
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
      <button class="add-guest-button">
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
      <span class="add-guest-span">fdfd</span>
      <button class="add-guest-button">
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
      <button class="add-guest-button">
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
      <span class="add-guest-span">dsds</span>
      <button class="add-guest-button">
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
    <button @click.stop="$emit('closeGuestModal')" class="close-modal">close</button>
  </section>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {}
  },

  computed: {},
  created() {},
  components: {},
  emits: ['closeGuestModal'],
}
</script>

<style scoped>
.search-inner-header-cotainer {
  position: absolute;
  top: 40%;
  right: 20px;
  padding: 2px 15px;
  width: 110%;
  height: 400px;
  border-radius: 5px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.search-inner-header-cotainer div {
  padding: 0px;
  height: 65px;
}
.search-inner-header-cotainer .close-modal {
  display: flex;
  align-items: center;
  background-color: black;
  height: 5px;
  padding: 10px;
  width: max-content;
}
</style>
