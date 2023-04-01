<template>
    <section class="labels">
        <CarouselFilterPreview :labels="labels" @setFilterBy="setFilterBy" />
    </section>
</template>
  
<script>
import { stayService } from '../services/stay.service.local'
import CarouselFilterPreview from '../cmps/CarouselFilterPreview.vue'

export default {
    name: 'StayFilter',
    data() {
        return {
            labels: stayService.labels(),
            filter: {
                label: ''
            }
        }
    },
    methods: {
        setFilterBy(key) {
            this.filter.label = key
            this.$emit('setFilterBy', this.filter)
        }
    },
    computed: {},
    created() {
    },
    components: {
        CarouselFilterPreview,
    },
    emits: ['setFilterBy']
}
</script>