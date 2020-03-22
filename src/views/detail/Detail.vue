<template>
  <div class="detail">
    <detail-navbar class="detailNavbar"></detail-navbar>
    <scroll class="content">
      <detail-swiper :banners="banners" ></detail-swiper>
      <detail-base-info :goods="goodInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <ul>
      <li>1sss</li>
      <li>2sss</li>
      <li>3sss</li>
      <li>4sss</li>
      <li>5sss</li>
      <li>6sss</li>
      <li>7sss</li>
      <li>8sss</li>
      <li>9sss</li>
      <li>10sss</li>
      <li>11sss</li>
      <li>12sss</li>
      <li>13sss</li>
      <li>14sss</li>
      <li>15sss</li>
      <li>16sss</li>
      <li>17sss</li>
      <li>18sss</li>
      <li>19sss</li>
      <li>20sss</li>
      <li>21sss</li>
      <li>22sss</li>
      <li>23sss</li>
      <li>24sss</li>
      <li>25sss</li>
      <li>26sss</li>
      <li>27sss</li>
      <li>28sss</li>
      <li>29sss</li>
      <li>30sss</li>
      <li>31sss</li>
      <li>32sss</li>
      <li>33sss</li>
      <li>34sss</li>
      <li>35sss</li>
      <li>36sss</li>
    </ul>
    </scroll>
    
  </div>
</template>
<script>
import DetailNavbar from 'views/detail/detailNavbar/DetailNavbar'
import DetailSwiper from 'views/detail/detailNavbar/DetailSwiper'
import DetailBaseInfo from 'views/detail/detailNavbar/DetailBaseInfo'
import DetailShopInfo from 'views/detail/detailNavbar/DetailShopInfo'
//import DetailImageInfo from 'views/detail/detailNavbar/DetailShopInfo'

import { getDetailGoods, Goods } from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    //DetailImageInfo
  },
  data() {
    return {
      iid: null,
      banners: [],
      goodInfo: {},
      shopInfo: {},
      imagesInfo: {}
    }
  },
  created() {
    //获取iid值
    this.iid = this.$route.params.id
    //发送数据请求
    this.getDetailGoods(this.iid)
  },
  methods: {
    //网络请求相关
    getDetailGoods(id) {
      getDetailGoods(id).then(res => {
        const data = res.data.result

        console.log(data)
        //取出轮播图数据，保存在banners中
        this.banners.push(...data.itemInfo.topImages)
        //取出商品详情所需的数据，统一保存在goodInfo中
        this.goodInfo = new Goods(data.itemInfo, data.columns, data.shopInfo)
        console.log(this.goodInfo)
        //请求店铺信息
        this.shopInfo = data.shopInfo
        //取出详情页图片
        
      }) 
    }
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