<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="label in labels" :key="label.key">
            <div :class="{ 'label flex flex-column': true, 'isActive': activeModalInner === label.key }" @click="$emit('setFilterBy', label.key);
            setActiveModal(label.key);">
                <img :src="label.url">
                <p>{{ label.key }}</p>
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

export default {
    name: 'LabelsPreview',
    props: { labels: Object },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {

                0: {
                    itemsToShow: 3,
                    itemsToScroll: 5,
                    snapAlign: 'center',
                },
                300: {
                    itemsToShow: 5,
                    itemsToScroll: 5,
                    snapAlign: 'center',
                },
                500: {
                    itemsToShow: 7,
                    itemsToScroll: 10,
                    snapAlign: 'center',
                },
                700: {
                    itemsToShow: 10,
                    itemsToScroll: 10,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 15,
                    itemsToScroll: 15,
                    snapAlign: 'start',
                },
            },
            activeModalInner: null,
        }
    },
    methods: {
        setActiveModal(labelKey) {
            this.activeModalInner = labelKey
        },
    },
    emits: ['setFilterBy']
}
</script>

<style>
.carousel__slide.carousel__slide--visible {
    width: 0;
}
</style>