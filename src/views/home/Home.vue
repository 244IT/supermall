<template>
  <div id="home">
    <!-- 头部导航 -->
    <nav-bar :backgroundColor="'#FF5777'">
      <div slot="center">购物街</div>
    </nav-bar>
    <div>首页</div>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
  #home{
    padding-top: 44px;
  }
</style>