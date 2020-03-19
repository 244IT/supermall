<template>
    <ul class="goods-container">
      <li class="goods-item" v-for="(item, index) in goodItem" :key="index" @click="itemClick(index)">
        <img :src="item.show.img" @load="imageLoad"/>
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'GoodListItem',
  props: {
    goodItem: {
      
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    },
    itemClick(index) {
      this.$router.push('/detail/' + this.goodItem[index].iid )
    }
  },
}
</script>
<style scoped>
  .goods-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    list-style: none;
  }

  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
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
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>