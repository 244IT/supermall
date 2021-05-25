<template>
    <tabbar>
        <tabbar-item link="/home">
            <img slot="tabbar-img" src="~/assets/img/tabbar/home.svg" />
            <img slot="active-tabbar-img" src="~/assets/img/tabbar/home_active.svg" />
            <span slot="tabbar-text">首页</span>
        </tabbar-item>
        <tabbar-item link="/category">
            <img slot="tabbar-img" src="~/assets/img/tabbar/category.svg" />
            <img slot="active-tabbar-img" src="~/assets/img/tabbar/category_active.svg" />
            <span slot="tabbar-text">分类</span>
        </tabbar-item>
        <tabbar-item link="/shopcart">
            <img slot="tabbar-img" src="~/assets/img/tabbar/cart.svg" />
            <img slot="active-tabbar-img" src="~/assets/img/tabbar/cart_active.svg" />
            <span slot="tabbar-text">购物车</span>
        </tabbar-item>
        <tabbar-item link="/profile">
            <img slot="tabbar-img" src="~/assets/img/tabbar/profile.svg" />
            <img slot="active-tabbar-img" src="~/assets/img/tabbar/profile_active.svg" />
            <span slot="tabbar-text">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import Tabbar from 'common/tabbar/Tabbar'
import TabbarItem from 'common/tabbar/TabbarItem'
export default {
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {
        }
    }
}
</script>

<style>

</style>