<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control  :titles="['流行', '新款', '精选']" @itemClick="itemClick" class="relative" ref="tabControl1" v-show="isTabControllShow"></tab-control>
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="scrollClick" @pullingUp="loadMore">
      <home-swiper :banners="banners" @imageLoad="spImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control  :titles="['流行', '新款', '精选']" @itemClick="itemClick"  ref="tabControl2"></tab-control>
      <good-list :goodList="showGoods"></good-list>
      
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodList from 'components/content/goodlist/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from 'network/home.js'

import HomeSwiper from 'views/home/childComps/HomeSwiper'
import HomeRecommend from 'views/home/childComps/HomeRecommend'
import HomeFeature from 'views/home/childComps/HomeFeature'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page:0, list:[]
        },
        'new': {
          page:0, list:[]
        },
        'sell': {
          page:0, list:[]
        }
      },
      currentType: 'pop', //保存当前的商品类型
      isShowBackTop: false, //控制返回顶部组件的显示隐藏
      tabOffsetTop: 0, //保存tabBack的offsetTop值
      isTabControllShow: false, //保存替换的tabControl是否显示
      sizeY: 0
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 50)
    //3.监听item中图片加载完成
    this.$bus.$on('imageLoad',() => {
      refresh()
    })
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.sizeY, 0)
    
  },
  deactivated() {
    this.sizeY = this.$refs.scroll.scroll.y
  },
  methods: {
    //防抖函数
    debounce(fun, delay) {
      let timer = null

      return function(...arg){
        if(timer){
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fun.apply(this, arg)
        }, delay)
      }
    },
    //事件相关函数
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    itemClick(index) {
      switch(index){
        case 0: 
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.activeIndex = index
      this.$refs.tabControl2.activeIndex = index
    },
    scrollClick(position) {
      this.isShowBackTop = (-position.y) > 1000
      
      //决定tabControl是否吸顶(position: fixed)
      this.isTabControllShow = (-position.y) > this.tabOffsetTop
      
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
    },
    //监听轮博图的完成，取得tabCrol的offSetTop值
    spImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    //网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        //console.log(res.data.data)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
}
</script>
<style scoped>
  #home{
    /* padding-top: 44px; */
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    right: 0px; */
  }
  
  /* .tab-control{ 吸顶效果无效
    top: 44px;
    position: sticky;
    z-index: 1;
  } */
  .scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }

  .relative{
    position: relative;
    z-index: 1;
  }
</style>