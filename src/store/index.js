import Vue from 'vue'
import Vuex from 'vuex'
import { todoStore } from './todostore'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        todos: todoStore
    }
});