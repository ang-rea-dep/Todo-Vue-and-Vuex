import Vue from 'vue'
import Vuex from 'vuex'
import { counterStore } from './counterstore'
import { todoStore } from './todostore'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        counter: counterStore,
        todos: todoStore
    }
});