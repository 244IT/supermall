<template>
  <div class="back" @click="onBackTop">
      <img src="~assets/img/common/top.png"/>
  </div>
</template>

<script>
export default {
    methods: {
        onBackTop() {
            this.$emit('backTop')
        }
    },
}
</script>

<style scoped>
    .back{
        position: fixed;
        bottom: 50px;
        right: 10px;
    }
    .back img{
        height: 44px;
    }
</style>