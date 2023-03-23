<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="label in labels" :key="label.key">
            <div class="flex flex-column">
                <img :src="label.url">
                <h3 class="label-title">{{ label.key }}</h3>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
  
<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default ({
    name: 'LabelsPreview',
    props: { labels: Object },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
    }),
})
</script>
  