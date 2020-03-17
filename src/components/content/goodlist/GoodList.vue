<template>
  <div class="goods-item">
    <good-list-item :goodItem="goodList"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from './GoodListItem'
export default {
  name: 'GoodList',
  components: {
    GoodListItem
  },
  props: {
    goodList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
  
</style>