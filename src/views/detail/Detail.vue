<template>
    <div id="detail">
        <detail-nav-bar />
        <scroll class="content" ref="scroll" :probeType="3" :pullUpload="true" @scroll="scroll" @pullingUp="pullingUp">
            <detail-swiper ref="base" :images="topImages" @detailSwiperImageLoad="detailSwiperImageLoad"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-good-info :detail-info="detailInfo" @detailGoodImageLoad="detailGoodImageLoad"></detail-good-info>
        </scroll>
    </div>
</template>

<script>

import Scroll from 'common/scroll/Scroll'

import DetailNavBar from './childCpns/DetailNavBar'
import DetailSwiper from './childCpns/DetailSwiper'
import DetailBaseInfo from './childCpns/DetailBaseInfo'
import DetailShopInfo from './childCpns/DetailShopInfo'
import DetailGoodInfo from './childCpns/DetailGoodInfo'

import { getDetail, Goods, Shop, GoodsParam } from 'network/detail.js'
import { debounce } from '@/common/utils'

export default {
    components: {
        Scroll,
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodInfo
    },
    data() {
        return{
            id: '', // 商品id
            goods: {}, // 商品信息
            topImages: [], // 轮播信息
            shop: {}, // 店铺信息
            detailInfo: {}, // 商品信息
            refresh: null
        }
    },
    created() {
        console.log('created')
        this._initData()

        // 获取商品详情页数据
        this.getDetail()
    },
    methods: {
        /* -----------------------------------页面事件-------------------------------------- */
        /* 滚动 */
        scroll() {

        },
        /* 上拉加载 */
        pullingUp() {

        },

        /* 轮播图片加载完成 */
        detailSwiperImageLoad() {
            this._refreshScrollHeight()
        },
        /* 商品信息图片加载完成 */
        detailGoodImageLoad() {
            this.refresh()
        },
        /* -----------------------------------网路请求-------------------------------------- */
        /* 获取商品详情页数据 */
        async getDetail() {
            const res = await getDetail(this.id)
            // 2.1.获取结果
            const data = res.result;     
            // 2.2.获取轮播信息
            this.topImages = data.itemInfo.topImages;
            // 2.3.商品基本信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // 2.4.获取店铺信息
            this.shop = new Shop(data.shopInfo);
            // 2.5.获取商品信息
            this.detailInfo = data.detailInfo
            // 2.6.保存参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        },
        /* -----------------------------------页面方法--------------------------------------- */
        /* 初始化数据 */
        _initData() {
            this.id = this.$route.params.id  
            this.refresh = debounce(this._refreshScrollHeight, 300)
        },
        /* 重新计算scroll高度 */
        _refreshScrollHeight() {
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
    #detail {
        height: 100vh;
        position: relative;
        z-index: 2;
        background-color: #fff;
    }

    .content {
        position: absolute;
        top: 44px;
        bottom: 60px;
    }
</style>