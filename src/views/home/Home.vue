<template>
  <div id="home">
    <home-nav-bar />
    <tab-control :tabList="tabList" @onTab="onTab" ref="tabControl1" v-show="isFixed"/>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpload="true" @scroll="scroll" @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend :recommends="recommends" />
      <home-population :goodLists="goodLists"/>
      <tab-control :tabList="tabList" @onTab="onTab" ref="tabControl2"/>
      <good-list :goodsList="goodLists" @toDetail="toDetail"/>
    </scroll>
    <back-top @backTop="onBackTop" v-show="isShowTop"/>
  </div>
</template>

<script>
import Scroll from 'common/scroll/Scroll'

import TabControl from 'content/tabControl/TabControl'
import GoodList from 'content/good/GoodList'
import BackTop from 'content/backTop/BackTop'

import HomeNavBar from './childCpns/HomeNavBar'
import HomeSwiper from './childCpns/HomeSwiper'
import HomeRecommend from './childCpns/HomeRecommend'
import HomePopulation from './childCpns/HomePopulation'

import { getHomeMultidata, getHomeData } from 'network/home.js'
import { debounce } from '@/common/utils'

const backTopPosition = 2000
export default {
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopulation,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data() {   
    return {
      banners: [], // 轮播图
      recommends: [], // 推荐
      tabList: ['流行', '新款', '精选'],
      good: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      goodType: 'pop', // 当前选择的类型
      isShowTop: false, // 是否显示返回顶部按钮
      tabOffsetTop: 0, // tab距离顶部的距离
      isFixed: false,
      pageY: 0, // 滚动距离
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
  mounted() {
    this._listenImageLoad()
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.pageY)
  },
  deactivated() {
    // 保存滚动距离
    this.pageY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /* -----------------------------------页面事件--------------------------------------- */
    /* 选择商品类别 */
    onTab(res) {
      const type = ['pop', 'new', 'sell']
      this.goodType = type[res.index]
      this.$refs.tabControl1.tabIndex = res.index
      this.$refs.tabControl2.tabIndex = res.index
    },
    /* 点击返回顶部 */
    onBackTop() {
      console.log('点击返回顶部')
      this.$refs.scroll.scrollTo(0, 0, 300)
    },  
    /* 监听scroll滚动 */
    scroll(pos) {
      // 是否显示返回顶部按钮
      this.isShowTop = -pos.y > backTopPosition

      // 是否吸顶
      this.isFixed = -pos.y > this.tabOffsetTop 
    },  
    /* 下拉加载 */
    async pullingUp() {
      await this.getHomeData(this.goodType)
      this.$refs.scroll.finishPullUp()
    },

    /* 监听轮播图片加载完成 */
    swiperImageLoad() {
      console.log('轮播图加载完成')
      // 获取tab距离顶部的距离
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    /* 跳转详情 */
    toDetail(item) {
      this.$router.push(`/detail/${item.item.iid}`)
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
      this.good[type].list.push(...result.data.list)
    },
    /* ------------------------------------页面方法-------------------------------------- */
    /* 监听图片加载完成 */
    _listenImageLoad() {
      this.$chh.$on('imageLoad', debounce(this.$refs.scroll.refresh))
    },
    
  },
  
}
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>