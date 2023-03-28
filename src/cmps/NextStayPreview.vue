<template>
    <section>
        <!-- mini-card next-stay space-between grid-item-1 -->
        <p>Your next stay:</p>
        <img :src="nextStays[0].imgUrls[0]">
        <!-- <pre>{{ nextStays }}</pre> -->
    </section>
</template>
<script>
export default {
    props: { nextStays: Array },
}
</script>