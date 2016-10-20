import newCar from '../../api/newCar'
import * as types from '../mutation-types'

export const getNewCarFilter = ({ commit }) => {
    commit(types.NEW_CAR_FILTER_RECEIVING)
  newCar.getNewCarFilter().then(e=>e.json()).then((filterList) => {
    filterList=filterList.data;
    commit(types.NEW_CAR_FILTER_RECEIVE_SUCCESS,{filterList})
  }).catch(e=>{
    commit(types.NEW_CAR_FILTER_RECEIVE_FAILED,e)
  })
}
export const getNewCarList = ({ commit },hah) => {
  let searchStrings;
   return new Promise((resolve, reject) => {
    //  commit(types.NEW_CAR_RECEIVING)
   newCar.getNewCarList(searchStrings).then(e=>e.json()).then((carList) => {
     resolve()
     carList=carList.data;
     commit(types.NEW_CAR_RECEIVE_SUCCESS,{carList})
   }).catch(e=>{
     reject()
     commit(types.NEW_CAR_RECEIVE_FAILED,e)
   })
   })
}
export const updateNewCarChosenFilter = ({ commit ,state},updateItem) => {
  commit(types.NEW_CAR_ADD_CHOSEN_FILTER,updateItem)
}
export const deleteNewCarChosenFilter = ({ commit },deleteItem) => {
  commit(types.NEW_CAR_DELETE_CHOSEN_FILTER,{deleteItem})
}
export const resetNewCarChosenFilter = ({ commit }) => {
  commit(types.NEW_CAR_RESET_CHOSEN_FILTER)
}
export const updateNewCarChosenNav = ({ commit },activeNav) => {
  commit(types.NEW_CAR_UPDATE_ACTIVE_NAV,activeNav)
}
