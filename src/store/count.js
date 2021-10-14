const count = {
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count += payload
        }
    },
    actions: {
        increment(context, incrementBy) {
            context.commit('increment', incrementBy)
        }
    },
    getters: {
        getCount(state) {
            return state.count
        }
    }
}

export default count