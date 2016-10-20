import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import actions from './actions/index.js'
import modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: modules,
    strict: debug
})
