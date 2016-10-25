/*import isArray from 'lodash.isarray';
export const checkoutStatus = state => state.cart.checkoutStatus

export const allProducts = state => state.products.all

export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}
 */

/*---------新车列表 START----------*/
/*//获取新车所有的过滤条件
export const getNewCarFilterList=state=>{
  return state.newCarList.filterList||[];
}
//获取新车列表
export const getLoadStatus=state=>{
  return state.newCarList.isLoading;
}
//获取新车列表
export const getNewCarList=state=>{
  return state.newCarList.carList||{};
}
//获取选中的筛选条件
export const getNewCarChosenFilterList=state=>{
  return state.newCarList.chosenFilterList||{};
}
//获取选中的筛选条件
export const getNewCarCacheFilterList=state=>{
  return state.newCarList.cacheFilterList||{};
}
//获取激活的过滤条件导航
export const getNewCarActiveNav=state=>{
  return state.newCarList.activeNav||{};
}
//获取导航列表
export const getNewCarFilterNavList=state=>{
  return state.newCarList.filterNavList||[];
}
*/
/*---------新车列表 END----------*/

/*---------新车列表 START----------*/
// export const getNewCarDetails=state=>{
//   return state.newCarDetails.detailsList||[];
// }
/*---------新车列表 END----------*/
