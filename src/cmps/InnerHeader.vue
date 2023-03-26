<template>
  <section class="flex-inner-header">
    <section class="inner-header-container">
      <InnerHeaderWhere
        :acitveModalInner="acitveModalInner"
        :innerHeaderFilter="innerHeaderFilter"
        @setActiveModalWhere="setActiveModalWhere" />
      <div class="border-inner-header"></div>
      <InnerHeaderDateSelection
      :acitveModalInner="acitveModalInner"
        :innerHeaderFilter="innerHeaderFilter"
        @setActiveModalDates="setActiveModalDates"/>
      <div class="border-inner-header"></div>
      <InnerHeaderSearchVue
      :acitveModalInner="acitveModalInner"
        :innerHeaderFilter="innerHeaderFilter"
        @setActiveModalsearch="setActiveModalsearch"
        @searchDestination="searchDestination"/>
    </section>
  </section>
</template>

<script>
import { ref } from 'vue'
import InnerHeaderWhere from './InnerHeaderWhere.vue'
import InnerHeaderDateSelection from './InnerHeaderDateSelection.vue'
import InnerHeaderSearchVue from './InnerHeaderSearch.vue'
export default {
  name: '',
  props: {
    activeModal: String,
  },
  data() {
    return {
      isActive: false,
      value: ref(new Date()),
      acitveModalInner: this.activeModal,
      expanded: null,
      innerHeaderFilter: {
        where: '',
        range: { start: null, end: null },
        guests: { adults: 0, children: 0, infants: 0, pets: 0 },
      },
      // date:null
    }
  },
  methods: {
    showWhere() {
      this.isActive = true
    },
    setActiveModalWhere(btnName, whereto) {
      this.acitveModalInner = btnName
      this.innerHeaderFilter.where = whereto
    },
    setActiveModalDates(btnName) {
      this.acitveModalInner = btnName
    },
    setActiveModalsearch(btnName) {
      this.acitveModalInner = btnName
    },
    filterByUserPick() {
      console.log('innerHeaderFilter', this.innerHeaderFilter)
    },
    searchDestination() {
      this.$emit('closeModal')
      this.$router.push(
        `/stay/explore?where=${
          this.innerHeaderFilter.where
        }&checkin=${this.innerHeaderFilter.range.start
          .toDateString()
          .substring(4, 11)}&checkout=${this.innerHeaderFilter.range.end
          .toDateString()
          .substring(4, 11)}&adults=${this.innerHeaderFilter.guests.adults}&children=${
          this.innerHeaderFilter.guests.children
        }&infants=${this.innerHeaderFilter.guests.infants}&pets=${
          this.innerHeaderFilter.guests.pets
        }`
      )
    },
  },
  computed: {},
  created() {
    this.acitveModalInner = this.activeModal
  },
  components: {
    InnerHeaderWhere,
    InnerHeaderDateSelection,
    InnerHeaderSearchVue
  },
  emits: ['closeModal'],
}
</script>
