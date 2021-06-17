<template>
  <div>
    <swiper class="detail-swiper" v-if="images.length">
      <swiper-item class="item" v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" @load="swiperImageLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'

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
            images: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            /* 轮播图片加载完毕 */
            swiperImageLoad() {
                if(this.flag) return
                this.$emit('swiperImageLoad')
                this.flag = true
            }
        }
	}
</script>

<style scoped>
  .item {
    text-align: center;
    height: 300px;
  }
</style>
