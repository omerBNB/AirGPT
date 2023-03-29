<template>
    <section class="stay-in-prev-stays">
        <img :src="stay.imgUrls[0]" />
        <section class="info">
            <h1> {{ stay.loc.city }}, {{ stay.loc.country }}</h1>
            <h3>{{ stay.name }}</h3>
            <h1>{{ stay.checkIn }}</h1>
        </section>
    </section>
</template>
<script>
export default {
    props: { stay: Object },
}
</script>