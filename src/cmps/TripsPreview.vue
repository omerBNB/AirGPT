<template>
    <section class="trips-preview grid">
        <section class="wishlist">Wishlist</section>
        <section class="message">Message</section>
        <NextStayPreview v-if="nextStays" class="mini-card next-stay flex" :nextStays="nextStays" />
        <PrevStayPreview v-else class="prev-stay" />
        <section class="prev-stays">Where have'ed you been</section>
    </section>
</template>

<script>
import NextStayPreview from '../cmps/NextStayPreview.vue'
import PrevStayPreview from '../cmps/PrevStayPreview.vue'
export default {
    props: { user: Object },
    computed: {
        nextStays() {
            return this.user.stayList.length ? this.user.stayList.filter(stay => !stay.isDone) : null
        },
    },
    components: {
        NextStayPreview,
        PrevStayPreview
    }
}
</script>