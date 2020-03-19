<template>
  <div>
    <nav-bar>
      <div slot="left" class="left">
        <img class="backImg" src="~assets/img/common/back.svg" @click="imgClick"/>
      </div>
      <div slot="center" class="nav-container">
        <div class="nav-item" :class="{active: currentIndex == index}" @click="clickActive(index)" v-for="(item, index) in title" :key="index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavbar',
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    clickActive(index) {
      this.currentIndex = index
    },
    imgClick() {
      this.$router.go(-1)
    }
  },
}
</script>
<style scoped>
.nav-container{
  display: flex;
  font-size: 13px;
}
.nav-item{
  flex: 1;
}
.backImg{
  margin-top: 10px;
}
.left{
  height: 30px;
  float: left;
}
.active{
  color: var(--color-tint);
}
</style>