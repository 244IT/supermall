<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="scrollClick" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="itemClick"></tab-control>
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
      currentType: 'pop',
      isShowBackTop: true
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
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    //事件相关
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
    },
    scrollClick(position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
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
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  .tab-control{
    top: 44px;
    position: sticky;
    z-index: 1;
  }
  .scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }
</style>