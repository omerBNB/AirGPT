<template>
    <section>
        <p>Your next stay:</p>
        <img :src="nextStay.imgUrls[0]">
    </section>
</template>
<script>
export default {
    props: { nextStays: Array },
    computed: {
        time() {
            return new Intl.DateTimeFormat('en-GB',
                { dateStyle: 'short', timeStyle: 'short', timeZone: 'Israel' })
                .format(+this.nextStays[0].checkOut)
        },
        nextStay() {
            return this.nextStays.reduce((prev, current) => (prev.checkOut < current.checkOut) ? prev : current)
        },
    },
}
</script>