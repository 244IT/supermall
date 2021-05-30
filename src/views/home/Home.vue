<template>
  <div id="home">
    <home-nav-bar />
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends" />
    <home-population/>
    <tab-control :tabList="tabList"/>
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script>
import TabControl from 'content/tabControl/TabControl'

import HomeNavBar from './childCpns/HomeNavBar'
import HomeSwiper from './childCpns/HomeSwiper'
import HomeRecommend from './childCpns/HomeRecommend'
import HomePopulation from './childCpns/HomePopulation'

import { getHomeMultidata, getHomeData } from 'network/home.js'




export default {
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopulation,
    TabControl
  },
  data() {   
    return {
      banners: [], // 轮播图
      recommends: [], // 推荐
      tabList: ['流行', '新款', '精选'],
      good: {
        'pop': { page: 0, list: [] },
      }
    }
  },
  /* -----------------------------页面生命周期------------------------ */
  created() {
    // 获取首页数据
    this.getHomeMultidata()
  },

  /* -----------------------------页面方法---------------------------- */
  methods: {
    /* 获取首页数据 */
    async getHomeMultidata() {
      const result = await getHomeMultidata()

      this.banners = result.data.banner.list
      this.recommends =  result.data.recommend.list
    }

  }
}
</script>

<style>
  #home{
    padding-top: 44px;
  }
</style>