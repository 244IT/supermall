<template>
  <div id="home">
    <home-nav-bar />
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends" />
    <home-population :goodLists="goodLists"/>
    <tab-control :tabList="tabList" @onTab="onTab"/>
    <!-- <good-list :goodsList=""/> -->
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>
</template>

<script>
import TabControl from 'content/tabControl/TabControl'
import GoodList from 'content/good/GoodList'

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
    TabControl,
    GoodList
  },
  data() {   
    return {
      banners: [], // 轮播图
      recommends: [], // 推荐
      tabList: ['流行', '新款', '精选'],
      good: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: []},
        'sell': { page: 0, list: []},
      },
      goodType: 'pop'
    }
  },
  computed: {
    goodLists() {
      return this.good[this.goodType].list
    }
  },
  /* -----------------------------页面生命周期------------------------ */
  created() {
    // 获取首页数据
    this.getHomeMultidata()
    // 获取流行,新款，精选商品数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  methods: {
    /* -----------------------------------页面事件--------------------------------------- */
    /* 选择商品类别 */
    onTab(index) {
      const type = ['pop', 'new', 'sell']
      this.goodType = type[index]
    },

    /* -----------------------------------网络请求--------------------------------------- */
    /* 获取首页数据 */
    async getHomeMultidata() {
      const result = await getHomeMultidata()

      this.banners = result.data.banner.list
      this.recommends =  result.data.recommend.list
    },
    /* 获取商品数据 */
    async getHomeData(type) {
      const page = ++this.good[type].page
      const result = await getHomeData(type, page)
      console.log(result)
      this.good[type].list = result.data.list
    }
  },

  
}
</script>

<style>
  #home{
    padding-top: 44px;
  }
</style>