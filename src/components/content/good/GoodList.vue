<template>
    <div class="list">
        <good-item v-for="(item, index) in goodsList" :key="index" :goods="item" @click.native="toDetail(item)"></good-item>
    </div>
</template>

<script>
  import GoodItem from './GoodItem'

  export default {
    components: {
      GoodItem
    },
    props: {
      goodsList: {
        type: Array,
        default: []
      }
    },
    methods: {
      /* 点击商品跳转详情 */
      toDetail(item) {
        console.log('点击')
        this.$emit('toDetail', { item })
      }
    },
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

  }
</style>