import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vuex from 'vuex'
import axios from 'axios'
// import auth from './store/auth'
// import count from './store/count'
// import config from './store/config'

import store from './store'


// const store = new Vuex.Store({
//     modules: {
//         auth,
//         count,
//         config
//     }
// })

const app = createApp(App)
    // app.provide('store', store)
app.use(router)
app.use(store)


// app.config.globalProperties.$store = store
app.config.globalProperties.$http = axios;
const token = localStorage.getItem('token')
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}
app.mount('#app')