<template>
    <carousel :itemsToShow="1">
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
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default ({
    name: 'StayImgPreview',
    props: { imgs: Array },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
})
</script>
  
<style>
.carousel__item {
    min-height: 200px;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
  