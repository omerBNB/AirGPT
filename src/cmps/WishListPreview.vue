<template>
    <!-- <pre>{{ stay }}</pre> -->
    <section class="img-container" @click="details()">
        <img class="main-img" :src="stay.imgUrls[0]" />
        <img :src="stay.imgUrls[1]" />
        <img :src="stay.imgUrls[2]" />
    </section>
</template>
<script>
export default {
    props: { stay: Object },
    methods: {
        details() {
            const {
                where = '',
                checkin = '',
                checkout = '',
                adults = '0',
                children = '0',
                infants = '0',
                pets = '0',
            } = this.$route.query

            this.$router.push({
                path: `/stay/${this.stay._id}`,
                query: { where, checkin, checkout, adults, children, infants, pets },
            })
        },
    },
    mounted() {
        console.log(this.$route.name)
        const currRoute = this.$route.path
        if (currRoute.includes('wishList')) {
            document.getElementById('main-app').classList.value = 'main-container wishList-grid'
        }
    },
    created(){
        console.log('hi')
    }
}
</script>