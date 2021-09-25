import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import Search from '../components/layout/Search.vue'
import AnimalDashboard from '../components/animals/AnimalDashboard.vue'
import Addanimal from '../components/animals/Addanimal.vue'
import Editanimal from '../components/animals/Editanimal.vue'

const routes = [{
        path: '/',
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
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/dashboard',
        name: 'AnimalDashboard',
        component: AnimalDashboard,
        meta: {
            isAuthenticated: true
        }
    },
    {
        path: '/addanimal',
        name: 'Addanimal',
        component: Addanimal
    },
    {
        path: '/editanimal/:id',
        name: 'Editanimal',
        component: Editanimal,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(rec => rec.meta.isAuthenticated)) {
        let user = localStorage.getItem('isLoggedin');
        if (user === 'true') {
            next()
        } else {
            next({ name: 'Login' })
        }
    } else {
        next()
    }
})

export default router