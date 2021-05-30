<template>
  <ul class="list">
    <li class="list-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <span>{{item.title}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .list{
    display: flex;
    justify-content: space-around;
    padding: 10px 0 28px;
    border-bottom: 10px solid #eee;;
    background-color: #FFF;
    box-sizing: border-box;
  }
  .list-item{
    list-style: none;
  }
  .list-item a{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>