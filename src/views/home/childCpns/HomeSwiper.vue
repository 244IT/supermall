<template>
  <swiper >
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'common/swiper/Swiper'
import SwiperItem from 'common/swiper/SwiperItem'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>