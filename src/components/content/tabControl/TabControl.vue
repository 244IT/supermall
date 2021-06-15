<template>
  <ul class="tab">
    <li class="tab-item"
        :class="[tabIndex === index ? 'active' : '']" 
        v-for="(item, index) in tabList" 
        :key="index"
        @click="onTab(index)">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array
    }
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    /* 选中tab */ 
    onTab(index) {
      console.log('选择')
      this.tabIndex = index

      this.$emit('onTab', { index })
    },
  }
}
</script>

<style scoped>
  .tab{
    position: sticky;
    z-index: 1;
    top: 44px;
    display: flex;
    justify-content: space-between;
    color: #222;
    background-color: #FFF;
  }

  .tab-item{
    position: relative;
    flex: 1;
    text-align: center;
    list-style: none;
    line-height: 40px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active::after{
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 40px;
    margin: 0 auto;
    background-color: var(--color-high-text);
    border-radius: 1px;
  }
</style>