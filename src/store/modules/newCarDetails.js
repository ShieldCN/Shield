import * as types from '../mutation-types'

const state = {
    detailsList: {}
}


const mutations = {
    [types.NEW_CAR_RECEIVE_DETAILS](state, {
        detailsList
    }) {
        state.detailsList = detailsList
    }
}


export default {
    state,
    mutations
}
