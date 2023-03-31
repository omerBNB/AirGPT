<template>
    <section v-if="nextStay" class="flex">
        <section>
            <h1 class="main-header">Your next stay</h1>
            <section class="info flex flex-column">
                <h1 class="header">{{ nextStay.name }}</h1>
                <h1>{{ nextStay.loc.city }}, {{ nextStay.loc.country }}</h1>
                <h1 class="dates">{{ nextStay.checkIn }}</h1>
            </section>
        </section>
        <img :src="nextStay.imgUrls[0]">
    </section>
</template>
<script>
export default {
    props: {
        nextStay: Object,
        stays: Object
    },
    computed: {
        time() {
            return new Intl.DateTimeFormat('en-GB',
                { dateStyle: 'short', timeStyle: 'short', timeZone: 'Israel' })
                .format(+this.nextStays[0].checkOut)
        },
    },
}
</script>