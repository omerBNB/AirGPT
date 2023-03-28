<template>
    <section class="wishlist-container">
        <header class="wishlist-header">
            <h1>Wishlist</h1>
            <p v-if="!loggedInUser.wishList.length">Empty</p>
        </header>
        <section class="stays-wishlist-container flex">
            <WishListPreview v-for="stay in loggedInUser.wishList" :key="stay._id" :stay="stay" />
        </section>
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
    mounted() {
        document.getElementById('main-app').classList.value = `main-container ${this.$route.name}-grid`
    },
    components: { WishListPreview }
}
</script>