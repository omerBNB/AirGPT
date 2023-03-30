<template>
    <section class="stay-in-prev-stays">
        <img :src="stay.imgUrls[0]" />
        <section class="info">
            <h1 class="header"> {{ stay.loc.city }}, {{ stay.loc.country }}</h1>
            <h1>{{ stay.name }}</h1>
            <h1 class="dates">{{ stay.checkIn }} - {{ new Intl.DateTimeFormat('en-GB',
                { dateStyle: 'short', timeZone: 'Israel' })
                .format(stay.checkOut) }}</h1>
        </section>
    </section>
</template>
<script>
export default {
    props: { stay: Object },
}
</script>