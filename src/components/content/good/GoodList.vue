<template>
    <div class="list">
        <good-item v-for="(item, index) in goodsList" :key="index" :goods="item"></good-item>
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