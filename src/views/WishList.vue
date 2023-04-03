<template>
    <section class="wishlist-container">
        <header class="wishlist-header">
            <h1>Wishlist</h1>
        </header>
        <section class="stays-wishlist-container grid" v-if="wishlist && wishlist.length">
            <WishListPreview v-for="stay in wishlist" :key="stay._id" :stay="stay" />
        </section>
        <p v-else v-loading="loading" class="loading"></p>
    </section>
</template>

<script>
import WishListPreview from '../cmps/WishListPreview.vue'
import { ref } from 'vue'
export default {
    created() {
        this.$store.dispatch({ type: 'loadStays' })
    },
    data() {
        return {
            loading: ref(true)
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        stays() {
            return this.$store.getters.stays
        },
        wishlist() {
            return (this.stays.filter((s) => s.likedByUsers.find((u) => u._id === this.loggedInUser._id)))
        }
    },
    mounted() {
        document.getElementById('main-app').classList.value = `main-container ${this.$route.name}-grid`
    },
    components: { WishListPreview }
}
</script>