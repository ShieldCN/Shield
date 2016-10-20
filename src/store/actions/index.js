import * as cart from './cart'
import * as newCarList from './newCarList'
import * as newCarDetails from './newCarDetails'

export default{
  ...cart,
  ...newCarList,
  ...newCarDetails
}
