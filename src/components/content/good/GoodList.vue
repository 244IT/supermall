<template>
    <div class="list">
        <goods-item v-for="(item, index) in goodsList" :key="index" :goods="item"></goods-item>
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

</style>