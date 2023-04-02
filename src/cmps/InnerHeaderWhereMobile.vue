<template>
  <section class="where-modal">
    <button class="flex-mobile-first-btn" v-if="acitveModalInner !== 'where'"  @click="setActiveModalWhere('where')">
      <h3 class="where-h3">Where</h3>
      <h3> {{this.where? this.where : 'i am flexible'}}</h3>
    </button>
    <button
      v-if="acitveModalInner === 'where'"
      class="where-to-btn-mobile"
      ref="where"
      @click="setActiveModalWhere('where')"
      :class="{ isActive: acitveModalInner === 'where' }">
      <form action="" class="where-to-form-mobile">
        <label>Where to?</label>
        <input
          @input="searchBy"
          class="w-50 m-2"
          size="large"
          type="search"
          placeholder="Search destination"
          :v-model="innerHeaderFilter.where ? innerHeaderFilter.where : searchQuery.where" />
      </form>
      <section class="grid stay-where-search">
        <div>
          <section class="chose-mainland">
            <div @click.stop="setActiveModalWhere('checkin', '')">
              <img
                class="mainland-img"
                src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"
                alt="" />
              <div class="region-mainland-choice" @click="">I'm flexible</div>
            </div>
            <div @click.stop="setActiveModalWhere('checkin', 'Europe')">
              <img
                class="mainland-img"
                src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832796/jmoewtj22cydhrxv8igw.webp"
                alt="" />
              <div class="region-mainland-choice">Europe</div>
            </div>
            <div @click.stop="setActiveModalWhere('checkin', 'France')">
              <img
                class="mainland-img"
                src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832694/iyey3ugv4rrfebpqq4ri.jpg"
                alt="" />
              <div class="region-mainland-choice">France</div>
            </div>
            <div @click.stop="setActiveModalWhere('checkin', 'United States')">
              <img
                class="mainland-img"
                src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832626/rmbkbzyewogvanzfehex.jpg"
                alt="" />
              <div class="region-mainland-choice">United States</div>
            </div>
            <div @click.stop="setActiveModalWhere('checkin', 'United Kingdom')">
              <img
                class="mainland-img"
                src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832717/cxz8hpbk9uuotl3arwni.jpg"
                alt="" />
              <div class="region-mainland-choice">United Kingdom</div>
            </div>
            <div @click.stop="setActiveModalWhere('checkin', 'South America')">
              <img
                class="mainland-img"
                src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832771/vgliecdhjbr1pjdqdrl0.jpg"
                alt="" />
              <div class="region-mainland-choice">South America</div>
            </div>
          </section>
        </div>
      </section>
    </button>
  </section>
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
      filterByInnerHeader: '',
      searchQuery: '',
      where: ''
    }
  },
  methods: {
    setActiveModalWhere(btnName, whereTo) {
      this.$emit('setActiveModalWhere', btnName, whereTo)
      this.where = whereTo
    },
    searchBy(ev) {
      // console.log('searchQuery',innerHeaderFilter.where)
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ['setActiveModalWhere'],
}
</script>

<style></style>
