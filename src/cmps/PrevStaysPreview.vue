<template>
    <section v-if="stayToPreview" class="stay-in-prev-stays">
        <img :src="stayToPreview.imgUrls[0]" />
        <section class="info">
            <h1 class="header"> {{ stayToPreview.loc.city }}, {{ stayToPreview.loc.country }}</h1>
            <h1>{{ stayToPreview.name }}</h1>
            <h1 class="dates">{{ getDates }}</h1>
            <!-- <h1 class="dates">{{ nextStay.checkin }} - {{ nextStay.checkout }}</h1> -->
        </section>
    </section>
</template>
<script>
import { utilService } from '../services/util.service'
export default {
    props: {
        stayToPreview: Object,
    },
    computed: {
        getDates() {
            return `
            ${utilService.getRandomIntInclusive(1, 30)}
            /${utilService.getRandomIntInclusive(1, 6)}
            /23 - ${utilService.getRandomIntInclusive(1, 30)}
            /${utilService.getRandomIntInclusive(6, 12)}
            /23
            `
        }
    },
}
</script>