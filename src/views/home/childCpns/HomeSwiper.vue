<template>
  <swiper >
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
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
  data() {
    return {
      flag: false
    }
  },
  props: {
    banners: {
      type: Array
    }
  },
  methods: {
    /* -----------------------------------组件事件--------------------------------- */
    /* 监听图片加载完成 */
    swiperImageLoad() {
      if(this.flag) return
      this.$emit('swiperImageLoad')
      this.flag = true
    }
  },
}
</script>

<style scoped>
</style>