<template>
  <div id="app">
    
    <main-tabbar/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabbar from 'content/mainTabbar/MainTabbar.vue'

export default {
  name: 'App',
  components: {
    MainTabbar,
  },
}
</script>

<style>
  @import './assets/css/base.css';

  .box{
    background-color: #f6f6f6;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);
  }
</style>
