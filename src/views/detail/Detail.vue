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
      <li>37sss</li>
      <li>38sss</li>
      <li>39sss</li>
      <li>40sss</li>
      <li>41sss</li>
      <li>42sss</li>
      <li>43sss</li>
      <li>44sss</li>
      <li>45sss</li>
      <li>46sss</li>
      <li>47sss</li>
      <li>48sss</li>
      <li>49sss</li>
      <li>50sss</li>
      <li>51sss</li>
      <li>52sss</li>
      <li>53sss</li>
      <li>54sss</li>
      <li>55sss</li>
      <li>56sss</li>
      <li>57sss</li>
      <li>58sss</li>
      <li>59sss</li>
      <li>60sss</li>
      <li>61sss</li>
      <li>62sss</li>
      <li>63sss</li>
      <li>64sss</li>
      <li>65sss</li>
      <li>66sss</li>
      <li>67sss</li>
      <li>68sss</li>
      <li>69sss</li>
      <li>70sss</li>
      <li>71sss</li>
      <li>72sss</li>
      <li>73sss</li>
      <li>74sss</li>
      <li>75sss</li>
      <li>76sss</li>
      <li>77sss</li>
      <li>78sss</li>
      <li>79sss</li>
      <li>80sss</li>
      <li>81sss</li>
      <li>82sss</li>
      <li>83sss</li>
      <li>84sss</li>
      <li>85sss</li>
      <li>86sss</li>
      <li>87sss</li>
      <li>88sss</li>
      <li>89sss</li>
      <li>90sss</li>
      <li>91sss</li>
      <li>92sss</li>
      <li>93sss</li>
      <li>94sss</li>
      <li>95sss</li>
      <li>96sss</li>
      <li>97sss</li>
      <li>98sss</li>
      <li>99sss</li>
      <li>100sss</li>
    </ul>
    </scroll>
    
  </div>
</template>
<script>
import DetailNavbar from 'views/detail/detailNavbar/DetailNavbar'
import DetailSwiper from 'views/detail/detailNavbar/DetailSwiper'
import DetailBaseInfo from 'views/detail/detailNavbar/DetailBaseInfo'
import DetailShopInfo from 'views/detail/detailNavbar/DetailShopInfo'

import { getDetailGoods, Goods } from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      banners: [],
      goodInfo: {},
      shopInfo: {}
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
        //console.log(data)
        //取出轮播图数据，保存在banners中
        this.banners.push(...data.itemInfo.topImages)
        //取出商品详情所需的数据，统一保存在goodInfo中
        this.goodInfo = new Goods(data.itemInfo, data.columns, data.shopInfo)
        console.log(this.goodInfo)
        //请求店铺信息
        this.shopInfo = data.shopInfo
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