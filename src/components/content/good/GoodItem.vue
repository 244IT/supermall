<template>
  <div class="goods" @click="ToDetail">
    <img v-lazy="getImg" :key="getImg" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
	export default {
    props: {
      goods: {
        type: Object,
      }
    },
    mounted: function () {
    },
    methods: {
      /* 跳转详情页 */
      ToDetail() {

      },
      /* 监听图片加载完成 */
      imageLoad() {
        this.$chh.$emit('imageLoad')
      }
    },
    computed: {
      getImg() {
        return this.goods.img || this.goods.image || this.goods.show.img
      }
    }
	}
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    width: 48%;
    position: relative;
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>