import shop from '../../api/shop'
import * as types from '../mutation-types'


export const checkout = ({ commit, state }, products) => {
  const savedCartItems = [...state.cart.added]
  commit(types.CHECKOUT_REQUEST)
  shop.buyProducts(
    products,
    () => commit(types.CHECKOUT_SUCCESS),
    () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  )
}

export const getAllProducts = ({ commit }) => {
  shop.getProducts(products => {
    commit(types.RECEIVE_PRODUCTS, { products })
  })
}
