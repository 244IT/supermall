<template>
  <div class="tab-control">
    <div class="tab-control-item" 
        v-for="(item, index) in titles" 
        :key="index" 
        :class="{active: activeIndex === index}"  
        @click="itemClick(index)">
      <span >{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
      activeIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index
      this.$emit('itemClick', this.activeIndex)
    }
  },
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;/*文字居中，但没有文字时也显示*/
  line-height: 40px; 
  background-color: #fff;
}
.tab-control-item{
  flex: 1;

}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-tint);
}
.active span{
  border-bottom: 2px var(--color-tint) solid;
}
</style>