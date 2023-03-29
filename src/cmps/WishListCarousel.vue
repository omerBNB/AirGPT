<template>
    <el-carousel :height="'18em'" :interval="4000">
        <el-carousel-item v-for="stay in stays" :key="stay._id">
            <img :src="stay.imgUrls[0]" />
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    props: { stays: Object },
}
</script>

<style scoped>
.el-carousel__item {
    border-radius: 10px;
}

.el-carousel__item img {
    object-fit: cover;
    height: 18em;
    width: 22em;
}
</style>