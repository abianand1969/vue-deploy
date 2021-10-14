import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import Search from '../components/layout/Search.vue'

import ProductDashboard from '../components/products/ProductDashboard.vue'
import AddProduct from '../components/products/AddProduct.vue'
import EditProduct from '../components/products/EditProduct.vue'
import Buy from '../components/products/Buy.vue'
import OrderHistory from '../components/orders/OrderHistory.vue'
import Profile from '../components/users/Profile.vue'
import Details from '../components/products/Details.vue'



const routes = [{
        path: '/',
        redirect: { name: 'Home' }
        // name: 'Home',
        // component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        redirect: { name: 'Login' }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/products',
        name: 'ProductDashboard',
        component: ProductDashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/addProduct',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/editProduct/:id',
        name: 'EditProduct',
        component: EditProduct,
        props: true
    },
    {
        path: '/products/:id',
        name: 'Details',
        component: Details,
        props: true
    },
    {
        path: '/buy',
        name: 'Buy',
        component: Buy,
        props: true
    },
    {
        path: '/orderhistory',
        name: 'OrderHistory',
        component: OrderHistory,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: 'About',
        //lazy loading component This would help to reduce overall vue bundle size
        // but do it if you want
        component: () =>
            import ('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//route guard
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //access the loggedin status from vuex store and decide the route access
        if (store.getters.isLoggedIn) {
            next()
            return
        }

        next('/login')
    } else {
        next()
    }
})

export default router