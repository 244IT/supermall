<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .tabbar{
        position: fixed;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        height: 49px;
        background-color: #f6f6f6;
        border-top: 1px solid #eee;
        box-shadow: 0px -1px 1px rgba(150,150,150,.08);
    }
</style>