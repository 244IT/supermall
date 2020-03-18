<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper',
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
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('imageLoad')
        this.isLoad = true
      }
    }
  },
}
</script>
<style scoped>

</style>