<template>
  <div class="recommends">
    <div class="recommends-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommends{
  display: flex;
  padding: 10px 0px 20px 0px;
  font-size: 12px;
  text-align: center;
  border-bottom: 8px #eee solid
}
.recommends-item{
  flex: 1
}
.recommends-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>