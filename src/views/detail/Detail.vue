<template>
  <div class="detail">
    <detail-navbar class="detailNavbar" @navClick="navClick" ></detail-navbar>
    <scroll ref="scroll" class="content" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :banners="banners" ></detail-swiper>
      <detail-base-info :goods="goodInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-image-info  :detail-info="detaiImgInfo"></detail-image-info>
      <detail-params-info ref="params" :param-info="paramInfo"></detail-params-info>
      <good-list ref="recommend" :goodList="recommend"></good-list>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import DetailNavbar from 'views/detail/detailNavbar/DetailNavbar'
import DetailSwiper from 'views/detail/detailNavbar/DetailSwiper'
import DetailBaseInfo from 'views/detail/detailNavbar/DetailBaseInfo'
import DetailShopInfo from 'views/detail/detailNavbar/DetailShopInfo'
import DetailImageInfo from 'views/detail/detailNavbar/DetailImageInfo'
import DetailParamsInfo from 'views/detail/detailNavbar/DetailParamsInfo'
import DetailCommentInfo from 'views/detail/detailNavbar/DetailCommentInfo'
import DetailBottomBar from 'views/detail/detailNavbar/DetailBottomBar'
import GoodList from 'components/content/goodlist/GoodList'
import BackTop from 'components/content/backTop/BackTop' //回到顶部

import { getDetailGoods, Goods, getDetailRecommend } from 'network/detail.js'
import { debounce } from 'common/utils.js'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottomBar,
    BackTop
  },
  data() {
    return {
      iid: null,
      banners: [],
      goodInfo: {},
      shopInfo: {},
      detaiImgInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [], //距离顶部的高度保存
      getThemeTopY: null,
      isShowBackTop: false, //控制返回顶部组件的显示隐藏
    }
  },
  created() {
    //获取iid值
    this.iid = this.$route.params.id
    //发送数据请求
    // 请求详情数据
    this.getDetailGoods(this.iid)

    // 请求推荐商品数据
    getDetailRecommend().then(res => {
      this.recommend = res.data.data.list
    })

    this.getThemeTopY = debounce(() => {
      this.$nextTick(() => {
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)
      })
    }, 300) 
  },
  mounted() {
    this.getThemeTopY()
  },
  methods: {
    //网络请求相关
    getDetailGoods(id) {
      getDetailGoods(id).then(res => {
        const data = res.data.result

        //取出轮播图数据，保存在banners中
        this.banners.push(...data.itemInfo.topImages)
        //取出商品详情所需的数据，统一保存在goodInfo中
        this.goodInfo = new Goods(data.itemInfo, data.columns, data.shopInfo)
        //请求店铺信息
        this.shopInfo = data.shopInfo
        //取出详情页信息
        this.detaiImgInfo = data.detailInfo
        //取出参数信息
        this.paramInfo = data.itemParams
        // 取出评论信息
        if(data.rate.list.length !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      }) 
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200)
      console.log(this.$refs)
    },
    // 监听页面滚动
    contentScroll(position) {
      // console.log(position)

      this.isShowBackTop = (-position.y) > 1000
    },
    // 回到顶部
    backTop() {
      console.log(this)
      this.$refs.scroll.scrollTo(0, 0)
    },
  },
}
</script>
<style scoped>
  .detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 1;
  }

  .content{
    background-color: #fff;
    height: calc(100% - 44px)
  }
  
  .detailNavbar{
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
</style>