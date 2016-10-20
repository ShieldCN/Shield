import * as types from '../mutation-types'

const state = {
        filterList: {},
        filterNavList: [{
            type: 'brand',
            name: '品牌'
        }, {
            type: 'price',
            name: '价格'
        }, {
            type: 'more',
            name: '更多'
        }, {
            type: 'sort',
            name: '默认排序'
        }],
        carList: [],
        chosenFilterList: {},
        cacheFilterList: {},
        searchStrings: '',
        activeNav: {},
        isLoading: false,
        pageIndex: 0
    }
    //搜索条件变化时,pageIndex归 0 ;

const mutations = {
    //获取新车过滤条件
    [types.NEW_CAR_FILTER_RECEIVING](state) {

    },
    [types.NEW_CAR_FILTER_RECEIVE_SUCCESS](state, {
        filterList
    }) {
        state.filterList = filterList
    },
    [types.NEW_CAR_FILTER_RECEIVE_FAILED](state, e) {
        console.error(e)
    },
    //获取新车列表
    [types.NEW_CAR_RECEIVING](state) {
        state.isLoading = true;
    },
    [types.NEW_CAR_RECEIVE_SUCCESS](state, {
        carList
    }) {
        state.isLoading = false
        state.carList = carList

    },
    [types.NEW_CAR_RECEIVE_FAILED](state, e) {
        state.isLoading = false
        console.error(e)
    },
    //添加过滤条件
    [types.NEW_CAR_ADD_CHOSEN_FILTER](state,
        updateItem
    ) {
        if (updateItem.moreNav) {
            state.cacheFilterList.moreNav = state.cacheFilterList.moreNav || {};

            state.cacheFilterList.moreNav[updateItem.moreNav.type] = state.cacheFilterList.moreNav[updateItem.moreNav.type] || [];
            if (state.cacheFilterList.moreNav[updateItem.moreNav.type].length > 0) {
                for (let i in state.cacheFilterList.moreNav[updateItem.moreNav.type]) {
                    if (state.cacheFilterList.moreNav[updateItem.moreNav.type][i].key === updateItem.moreNav.key) {
                        state.cacheFilterList.moreNav[updateItem.moreNav.type].splice(i, 1);
                        return true;
                    }
                }
                state.cacheFilterList.moreNav[updateItem.moreNav.type].push(updateItem.moreNav)
            } else {
                state.cacheFilterList.moreNav[updateItem.moreNav.type].push(updateItem.moreNav)
            }
        } else {
            state.cacheFilterList = Object.assign({}, state.cacheFilterList, updateItem)
        }
    },
    [types.NEW_CAR_DELETE_CHOSEN_FILTER](state, {
        deleteItem
    }) {
        switch (deleteItem.type) {
            case 'brand':
                delete state.chosenFilterList.brandNav
                break;
            case 'serial':
                  delete state.chosenFilterList.brandNav.serial
                break;
            case 'price':
                delete state.chosenFilterList.priceNav
                break;
            case 'sort':
                delete state.chosenFilterList.sortNav
                break;
            default: //more里面的在这里处理
                state.chosenFilterList.moreNav[deleteItem.type].forEach((item, index) => {
                    if (deleteItem.type === item.type) {
                        state.chosenFilterList.moreNav[deleteItem.type].splice(index, 1);
                    }
                })

        }
        state.chosenFilterList = {...state.chosenFilterList
            }
            // state.chosenFilterList = filterList
    },
    [types.NEW_CAR_RESET_CHOSEN_FILTER](state) {
        state.chosenFilterList = [];
    },
    [types.NEW_CAR_UPDATE_ACTIVE_NAV](state, activeNav) {
        state.activeNav = activeNav;
        //打开筛选框
        if (activeNav.type) {
            state.cacheFilterList = {...state.chosenFilterList
            };
            return
        }
        //关闭筛选框
        if (activeNav.isNeedUpdate) { //需要更新筛选条件
            state.chosenFilterList = {...state.cacheFilterList
            };
            state.searchStrings=transformToString(state.chosenFilterList)
            alert(state.searchStrings)
            return
        }
        //不需要更新筛选条件
        state.cacheFilterList = {...state.chosenFilterList
        };

    }

}
function transformToString(data) {
  for(let item in data){
    console.log(item)
  }
  // priceNav,moreNav,sortNav,brandNav
    // let keyValueList = {
    //         'sort': 'a', //排序
    //         'brand': 'b', //brand
    //         'serial': 's', //serial
    //         'displacement': 'j', //排量
    //         'price': 'p', //价格
    //         'transmission': 'g', //变速箱
    //         'seat': 'z', //座位
    //         'color': 'c', //颜色
    //         'style': 'f', //风格
    //         'classification': 't', //分类
    //     },
    //     searchString = '';
    // data.forEach((item) => {
    //     searchString = searchString + keyValueList[item.type] + item.key;
    // });
    // return searchString;
}


export default {
    state,
    mutations
}
