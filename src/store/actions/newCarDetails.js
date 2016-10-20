import newCar from '../../api/newCar'
import * as types from '../mutation-types'

export const getNewCarDetails = ({ commit },caseNum) => {
  newCar.getNewCarDetails(caseNum).then(e=>e.json()).then((detailsList) => {
    detailsList=detailsList.data;
    commit(types.NEW_CAR_RECEIVE_DETAILS,{detailsList})
  })
}
