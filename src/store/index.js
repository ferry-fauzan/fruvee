import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numb: 0,
        user: '',
        product: []
    },
    getters: {
        getProduct(state) {
            return state.product
        }
    },
    mutations: {
        addProduct(state, data) {
            state.product.push(data)
        },
        addNumb(state) {
            state.numb++
        },
        addUser(state, data) {
            state.user = data
        }
    },
    actions: {
        addProduct({ commit }, data) {
            commit('addProduct', data)
        },
        getUser({ commit }) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => commit('addUser', json))
        }
    },
    modules: {}
})