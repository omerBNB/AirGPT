<template>
    <p>TripsPreview</p>
</template>

<script>
export default {
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
    },
}
</script>