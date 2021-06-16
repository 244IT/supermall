import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Detail = () => import('../views/detail/Detail')

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
    {
        path: '/detail/:id',
        component: Detail
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router