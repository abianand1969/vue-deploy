import axios from 'axios'
import config from './config'
const uri = config.apiUri;
const auth = {

    state: {
        status: null,
        token: localStorage.getItem('token') || '',
        user: null
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    getters: {
        // isLoggedIn: state => !!state.token,
        // authStatus: state => state.status,
        isLoggedIn(state) {
            return !!state.token
        },
        authStatus(state) {
            return state.status
        },
    },
    actions: {
        authenticate(context, { email: email, password: password }) {
            return new Promise((resolve, reject) => {
                context.commit('auth_request')
                axios({
                        url: `${uri}/auth/login`,
                        data: { email: email, password: password },
                        method: 'POST'
                    })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        context.commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        context.commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }

}
export default auth