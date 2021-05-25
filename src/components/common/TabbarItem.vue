<template>
  <div class="tabbar-item" @click="toPath">
      <div class="tabbar-item-img" v-if="!isActive"><slot name="tabbar-img"></slot></div>
      <div class="tabbar-item-img" v-else><slot name="active-tabbar-img"></slot></div>
      <div class="tabbar-item-text" :style="active"><slot name="tabbar-text"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String
        },
        activeColor: {
            type: String,
            default: '#FF5777'
        }
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.link)
        },
        active() {
            return this.isActive ? { color: this.activeColor } : {}
        }
    },
    methods: {
        /* 跳转 */
        toPath() {
            this.$router.replace(this.link)
        }
    }
}
</script>

<style>
    .tabbar-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 3px;
        font-size: 14px;
        box-sizing: border-box;
    }

    .tabbar-item-img > img{
        height: 26px;
        width: 26px;
    }
</style>