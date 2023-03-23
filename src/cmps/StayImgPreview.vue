<template>
    <el-carousel :interval="0" :loop="false">
        <el-carousel-item v-for="img in imgs" :key="img">
            <i class="fa-solid fa-heart"></i>
            <img :src="img">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default ({
    name: 'StayImgPreview',
    props: { imgs: Array },
})
</script>