<template>
    <div class="labels">
        <LabelsPreview :labels="labels" @setFilterBy="setFilterBy" />
    </div>
</template>
  
<script>
import { stayService } from '../services/stay.service.local'
import LabelsPreview from '../cmps/LabelsPreview.vue'

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
        LabelsPreview,
    },
    emits: ['setFilterBy']
}
</script>