<template>
  <div class="nav" :style="{ 'background-color': backgroundColor}">
    <div class="left"><slot name="name"></slot></div>
    <div class="center" :style="{ 'color': color }"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: { // 导航栏背景色
      type: String,
      default: '#FFF'
    },
    color: { // 字体颜色
      type: String,
      default: '#FFF'
    }
  }
}
</script>

<style>
  .nav{
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 44px;
  }
  .center{
    flex: 1;
    text-align: center;
  }

  .left, .right{
    width: 60px;
  }
</style>