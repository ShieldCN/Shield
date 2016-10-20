

<template>

<div id="new-car-list">
    <bounce-loader :loading="isLoading"> </bounce-loader>

    <div style="overflow-y:hidden">
        <!-- <div id="newcar-list-header">
              <jyn-header jyn-title="新车案例列表" position="relative"> </jyn-header>
          </div>
          <div id="newcar-top-search">
              <car-top-search> </car-top-search>
          </div> -->
        <div id="newcar-search-filter" :class="{'car-list-positon':isSearchFixed||isPop}">
            <div class="search-filter" id="search-filter">
                <select-nav :list="navList" :chosen-filters="chosenFilters" :active-nav="activeNav"></select-nav>
                <chosen-filter :chosen-filters="chosenFilters"></chosen-filter>
                <brand-select :list="{brandList:filterList.b,hotSerials:filterList.ds}" :chosen-filters="cacheFilters.brandNav" :active-nav="activeNav"></brand-select>
                <price-select :list="filterList.p" :active-nav="activeNav" :chosen-filters="cacheFilters.priceNav"></price-select>
                <more-select type="new" :active-nav="activeNav" :chosen-filters="cacheFilters.moreNav" :list="{transmission:filterList.gb,style:filterList.s,seat:filterList.z,classification:filterList.t,displacement:filterList.di,color:filterList.c}"></more-select>
                <sort-select :list="filterList.a" :chosen-filters="cacheFilters.sortNav" :active-nav="activeNav"></sort-select>
            </div>
            <div v-show="activeNav.type" class="search-filter-bg remove-overflow-hidden js-filter-close" @click="bgClick()"></div>
        </div>
        <!-- <div v-show="isSearchFixed" style="height:1.4rem;width:100%"> </div> -->
        <scroll :on-refresh="refresh" :on-infinite="infinite">
            <car-list :list="carList.data" type="new"></car-list>
        </scroll>
    </div>

    <backtotop></backtotop>
</div>

</template>

<script>

import {
    mapGetters
}
from 'vuex'

import CarList from '../components/CarList.vue';
import JynHeader from '../components/Header.vue';
import CarTopSearch from '../components/CarTopSearch.vue';
import Backtotop from '../components/Backtotop.vue';
import BounceLoader from '../components/BounceLoader.vue';
import SelectNav from '../components/SelectNav.vue';
import PriceSelect from '../components/PriceSelect.vue';
import SortSelect from '../components/SortSelect.vue';
import BrandSelect from '../components/BrandSelect.vue';
import MoreSelect from '../components/MoreSelect.vue';
import ChosenFilter from '../components/ChosenFilter.vue';
import Scroll from '../components/Scroll.vue'


export default {
    name: 'new-car',
    components: {
        CarList,
        JynHeader,
        BounceLoader,
        CarTopSearch,
        Backtotop,
        SelectNav,
        PriceSelect,
        SortSelect,
        BrandSelect,
        MoreSelect,
        ChosenFilter,
        Scroll
    },
    data() {
        return {
            isSearchFixed: false,
            isPop: false,
        }
    },
    // data() {
    //     return {
    //         isShowLoader: false,
    //         newCarCaseList: [],
    //         //  b  品牌 , db  默认品牌 ,ds  默认车系 ,t  分类 ,di  排量 ,gb  变速箱
    //         // dr 驱动 ,z 座位数  fu , 燃料 ,p  价格 ,s  风格 ,c 颜色,a 排序
    //         filterList: {},
    //         isGetData: false,
    //         searchString: '',
    //         currentPageNumber: 0,
    //         paging: {},
    //         isPop: false,
    //         isSearchFixed: false,
    //         showType: '',
    //         chosenFilters: [],
    //         list: [{
    //             type: 'brand',
    //             name: '品牌',
    //             isShow: false
    //         }, {
    //             type: 'price',
    //             name: '价格',
    //             isShow: false
    //         }, {
    //             type: 'more',
    //             name: '更多',
    //             isShow: false
    //         }, {
    //             type: 'sort',
    //             name: '默认排序',
    //             isShow: false
    //         }],
    //         openItem: ''
    //     }
    // },
    computed: {
        ...mapGetters({
            filterList: 'getNewCarFilterList',
            chosenFilters: 'getNewCarChosenFilterList',
            cacheFilters: 'getNewCarCacheFilterList',
            navList: 'getNewCarFilterNavList',
            activeNav: 'getNewCarActiveNav',
            carList: 'getNewCarList',
            isLoading: 'getLoadStatus'
        }),
    },
    // preFetch: fetchFilter,
    beforeMount() {
        this.$store.dispatch('getNewCarFilter')
        this.$store.dispatch('getNewCarList')
    },
    methods: {
        bgClick() {
                this.$store.dispatch('updateNewCarChosenNav', {});
            },
            refresh(done) {
                //重新加载数据
                this.$store.dispatch('getNewCarList', {
                    pageIndex: 0
                }).then(() => {
                    done()
                })
            },
            infinite(done) {

                setTimeout(function() {
                    done()
                }, 2000)
            }
    }

}

</script>
