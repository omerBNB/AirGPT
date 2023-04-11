<template>
    <section v-if="stayToPreview" class="stay-in-prev-stays">
        <img :src="stayToPreview.prevStay.imgUrls[0]" />
        <section class="info">
            <h1 class="header"> {{ stayToPreview.prevStay.loc.city }}, {{ stayToPreview.prevStay.loc.country }}</h1>
            <h1>{{ stayToPreview.prevStay.name }}</h1>
            <h1 class="dates">{{ stayToPreview.checkin }} - {{ stayToPreview.checkout }}</h1>
        </section>
    </section>
</template>
<script>
export default {
    props: {
        stayToPreview: Object,
    },
}
</script>