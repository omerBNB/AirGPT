<template>
    <carousel :items-to-show="1.5">
        <slide v-for="img in imgs" :key="img">
            <img :src="img">
        </slide>

        <template #addons>
            <Navigation />
            <pagination />
        </template>
    </carousel>
</template>
  
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'StayImgPreview',
    props: { imgs: Array },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>
  