<template>
    <el-carousel :autoplay="false" :trigger="'click'" :loop="false">
        <el-carousel-item v-for="(img, index) in imgs" :key="index">
            <img @click="$emit('details')" :src="img">
        </el-carousel-item>
    </el-carousel>
</template> 

<script>
export default {
    name: 'StayImgPreview',
    props: { imgs: Array },
    emits: ['details', 'updateWishList']
}
</script>