<template>
  <!-- 头部导航 -->
  <nav-bar :backgroundColor="'#FFF'">
    <div slot="left" class="nav-left" @click="onBack">
        <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="nav-center">
        <span v-for="(item, index) of navList" :key="index" :class="{'active': navIndex === index}" @click="onNav(index)">{{item}}</span>
    </div>
  </nav-bar>
</template>


<script>
import NavBar from 'common/navbar/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
        navIndex: 0,
        navList: ['商品', '参数', '评论', '推荐']
    }
  },
  methods: {
      onNav(index) {
          this.navIndex = index
      },
      /* 返回 */
      onBack() {
        this.$router.go(-1)
      }
  },
}
</script>

<style scoped>
    .nav-center{
        display: flex;
        justify-content: center;
        line-height: 49px;
    }

    .nav-center span{
        flex: 1;
        color: #222;
        font-size: 14px;
    }

    .active{
        color: rgb(255,102,153)!important;
    }

    .nav-left{
        margin-left: 10px;
        line-height: 49rpx;
    }
</style>