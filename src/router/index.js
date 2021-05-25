import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/profile')
const Category = () => import('../views/category/category')
const Shopcart = () => import('../views/shopcart/shopcart')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router