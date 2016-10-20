

<template>
<div >
  <div class="search-filter" id="search-filter">
      <select-nav :list="list" :open-item.sync="openItem"></select-nav>
      <chosen-filter :list.sync="chosenFilters"></chosen-filter>
      <brand-select :is-show.sync="openItem.isShow" :show-type="openItem.type" :list="{brandList:filterList.b,hotSerials:filterList.ds}"></brand-select>
      <price-select :is-show.sync="openItem.isShow" :show-type="openItem.type" :list="filterList.p"></price-select>
      <more-select v-if="type==='new'" :type="type" :is-show.sync="openItem.isShow" :show-type="openItem.type" :list="{transmission:filterList.gb,style:filterList.s,seat:filterList.z,classification:filterList.t,displacement:filterList.di,color:filterList.c}"></more-select>
      <more-select v-if="type==='used'" :type="type" :is-show.sync="openItem.isShow" :show-type="openItem.type" :list="{transmission:filterList.gb,vehicleAge:filterList.y,seat:filterList.z,classification:filterList.t,displacement:filterList.di,color:filterList.c}"></more-select>
      <sort-select :is-show.sync="openItem.isShow" :show-type="openItem.type" :list="filterList.a"></sort-select>
  </div>
  <div v-show="openItem.isShow" class="search-filter-bg remove-overflow-hidden js-filter-close" @click="bgClick()" ></div>
</div>

</template>

<script>
import ChosenFilter from './ChosenFilter.vue';
import BrandSelect from './BrandSelect.vue';
import PriceSelect from './PriceSelect.vue';
import MoreSelect from './MoreSelect.vue';
import SortSelect from './SortSelect.vue';
import SelectNav from './SelectNav.vue';

export default {
    replace: true,
    //  b  品牌 , db  默认品牌 ,ds  默认车系 ,t  分类 ,di  排量 ,gb  变速箱
    // dr 驱动 ,z 座位数  fu , 燃料 ,p  价格 ,s  风格 ,c 颜色,a 排序
    //新车参数
    // 变速箱gb      风格s   座位z  分类t           排量di       颜色c
    // transmission  style  seat   classification displacement color
    //二手车参数
    // 变速箱gb      车龄   座位z  分类t           排量di       颜色c   是否认证
    // transmission  vehicleAge  seat   classification displacement color
    // computed: {
    //     ...mapGetters({
    //             isShow: 'getNewCarFiltersStatus',
    //             showType: 'getNewCarShowFilterType'
    //         }),
    //         list() {
    //           return  {
    //                 brandList: this.$store.getters.getNewCarFilterList.b,
    //                 hotSerials: this.$store.getters.getNewCarFilterList.ds
    //             }
    //         }
    // },
    props: {
        filterList: {
            type: Object,
            required: true,
            default: ()=>{
              return {}
            }
        },
        type: { //新车or二手车
            type: String,
            required: true
        }
    },
    data() {
        return {
            showType: '',
            chosenFilters: [],
            list: [{
                type: 'brand',
                name: '品牌',
                isShow: false
            }, {
                type: 'price',
                name: '价格',
                isShow: false
            }, {
                type: 'more',
                name: '更多',
                isShow: false
            }, {
                type: 'sort',
                name: '默认排序',
                isShow: false
            }],
            openItem: ''
        }

    },
    watch: {
        openItem() {
            console.dir(this.openItem.isShow)
        }
    },
    events: {
        updateBrandOrSerial(data) {
                let self = this;
                if (data) {
                    self.transformData(data);
                }
            },
            updatePrice(data) {
                let self = this;
                if (data) {
                    self.transformData(data);
                }
            },
            updateSort(data) {
                let self = this;
                if (data) {
                    self.transformData(data);
                    self.list[3].name = data[0].value;
                }
            },
            updateMore(data) {
                let self = this;
                if (data) {
                    self.transformData(data);
                }
            },
            changeChosenStatus(spliceItem) {
                let self = this;
                // self.$broadcast('changeChosenStatus', spliceItem);
                if (!spliceItem || spliceItem.type === 'sort') {
                    self.list[3].name = '默认排序'
                }
            },
            updateOpenFilter(type) {
                let self = this;
                // self.$broadcast('updateOpenFilter', type);
            }
    },
    methods: {
        switchType(type) {
                let self = this;
                self.showType = type;
            },
            transformData(data) {
                let self = this,
                    indexList = [],
                    returnData = [];
                data.forEach((dataItem) => {
                    self.chosenFilters.forEach((item, index) => {
                        if (dataItem.type === item.type) {
                            self.chosenFilters.splice(index, 1);
                        }
                    });
                });
                data.forEach((item, index) => {
                    if (item.key) {
                        returnData = returnData.concat(data.slice(index, index + 1));
                    }
                });
                self.chosenFilters = self.chosenFilters.concat(returnData);
                self.dispatch(self.chosenFilters);
            },
            dispatch(data) {
                let self = this;
                // self.$dispatch('updateSearchString', data);
            },
            bgClick() {
                let self = this;
                self.openItem.isShow = false;
                // self.$dispatch('selectOpenStatus', false);
            }



    },
    components: {
      ChosenFilter,
      BrandSelect,
      PriceSelect,
      MoreSelect,
      SortSelect,
      SelectNav
    }
}

</script>
