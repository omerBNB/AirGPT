<template>
    <section>
        <p>Your previous stay:</p>
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