<template>
    <section>
        <p>Your next stay:</p>
        <img :src="nextStays[0].imgUrls[0]">
    </section>
</template>
<script>
export default {
    props: { nextStays: Array },
}
</script>