<template>
    <section class="flex">
        <section>
            <h1 class="main-header">Your prev stay</h1>
            <section class="info flex flex-column">
                <h1 class="header">{{ prevStay.name }}</h1>
                <h1>{{ prevStay.loc.city }}, {{ prevStay.loc.country }}</h1>
                <h1 class="dates">{{ prevStay.checkIn }}</h1>
            </section>
        </section>
        <img :src="prevStay.imgUrls[0]">
    </section>
</template>
<script>
export default {
    props: { prevStays: Array },
    computed: {
        time() {
            return new Intl.DateTimeFormat('en-GB',
                { dateStyle: 'short', timeStyle: 'short', timeZone: 'Israel' })
                .format(+this.nextStays[0].checkOut)
        },
        prevStay() {
            return this.prevStays.reduce((prev, current) => (prev.checkOut < current.checkOut) ? prev : current)
        },
    },
}
</script>