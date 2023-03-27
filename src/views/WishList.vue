<template>
    <section>
        <h1>WishList</h1>
        <WishListPreview v-for="stay in loggedInUser.wishList" :key="stay._id" :stay="stay" />
    </section>
</template>

<script>
import WishListPreview from '../cmps/WishListPreview.vue'
export default {
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
    },
    components: { WishListPreview }
}
</script>