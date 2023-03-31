<template>
    <section v-if="stayToPreview" class="stay-in-prev-stays">
        <img :src="stayToPreview.imgUrls[0]" />
        <section class="info">
            <h1 class="header"> {{ stayToPreview.loc.city }}, {{ stayToPreview.loc.country }}</h1>
            <h1>{{ stayToPreview.name }}</h1>
            <!-- <h1 class="dates">{{ nextStay.checkin }} - {{ nextStay.checkout }}</h1> -->
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