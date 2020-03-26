export const counterStore = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        incrementCounter(state, payload) {
            state.count += payload
        }
    },
    actions: {
        incrementAction({ commit }, payload) {
            commit('incrementCounter', payload)
        }
    },
    getters: {
        counter(state) {
            return state.count
        }
    }
}