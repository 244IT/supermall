<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item"/>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false //保存isLoad状态
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    
  },
}
</script>
<style scoped>
.detailSwiper{
    height: 300px;
    overflow: hidden;
  }
</style>