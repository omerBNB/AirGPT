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
  
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>