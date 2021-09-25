import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reactive } from "vue";
// import store from "./store";

const store = {
    debug: true,

    state: reactive({
        isAuthenticated: false
    }),

    setIsAuthenticated(newValue) {
        if (this.debug) {
            console.log("setIsAuthenticated triggered with", newValue);
        }

        this.state.isAuthenticated = newValue;
    },

    clearLoggedin() {
        if (this.debug) {
            console.log("clearMessageAction triggered");
        }

        this.state.isAuthenticated = "";
    },
}

const app = createApp(App)
app.provide('store', store)
app.use(router)
    // app.config.globalProperties.$store = store
app.mount('#app')