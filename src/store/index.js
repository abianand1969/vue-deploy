import auth from './auth'
import config from './config'
import count from './count'
import Vuex from 'vuex'

const store = new Vuex.Store({
    modules: {
        auth,
        count,
        config
    }
})

export default store