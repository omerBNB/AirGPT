<template>
    <LabelsPreview :labels="labels" />
</template>
  
<script>
import { stayService } from '../services/stay.service.local'
import LabelsPreview from '../cmps/LabelsPreview.vue'

export default {
    name: 'StayFilter',
    data() {
        return {
            labels: stayService.labels()
        }
    },
    methods: {},
    computed: {},
    created() {
    },
    components: {
        LabelsPreview,
    },
}
</script>