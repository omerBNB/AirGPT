<template>
  <section class="inner-header-container-mobile">
    <button class="go-back-mobile" @click="onCloseModal">X</button>
    <section class="all-inner-header-mobile-btns">
    <InnerHeaderWhereMobile
        :acitveModalInner="acitveModalInner"
        :innerHeaderFilter="innerHeaderFilter"
        @setActiveModalWhere="setActiveModalWhere" />
      <InnerHeaderDateSelectionMobile
        :acitveModalInner="acitveModalInner"
        :innerHeaderFilter="innerHeaderFilter"
        @setActiveModalDates="setActiveModalDates" />
      <InnerHeaderSearchMobile
        :acitveModalInner="acitveModalInner"
        :innerHeaderFilter="innerHeaderFilter"
        @setActiveModalsearch="setActiveModalsearch"
        @searchDestination="searchDestination" /> 
    </section>
    </section>  
</template>

<script>
import { ref } from 'vue'
import InnerHeaderWhereMobile from './InnerHeaderWhereMobile.vue'
import InnerHeaderDateSelectionMobile from './InnerHeaderDateSelectionMobile.vue'
import InnerHeaderSearchMobile from './InnerHeaderSearchMobile.vue'
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
    onCloseModal(){
      this.$emit('closeModal')
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
      this.$router.push({
        path: '/stay/explore',
        query: {
          where: this.innerHeaderFilter.where,
          checkin: this.innerHeaderFilter.range.start.toDateString().substring(4, 16),
          checkout: this.innerHeaderFilter.range.end.toDateString().substring(4, 16),
          adults: this.innerHeaderFilter.guests.adults,
          children: this.innerHeaderFilter.guests.children,
          infants: this.innerHeaderFilter.guests.infants,
          pets: this.innerHeaderFilter.guests.pets,
        },
      })
    },
  },
  computed: {},
  created() {
    this.acitveModalInner = this.activeModal
  },

  components: {
    InnerHeaderWhereMobile,
    InnerHeaderDateSelectionMobile,
    InnerHeaderSearchMobile,
  },
  emits: ['closeModal'],
}
</script>
