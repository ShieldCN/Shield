<template>
<div class="NewCarDetails">
    <div class="top">
        <div class="top-img" @click="showMorePic()"><img :src="filterList.headImage" id="new-car-details-top-img"></div>
        <div class="top-title">
            <div class="top-title-fl fl">{{filterList.name}}</div>
            <div class="top-title-fr fr ffcolor">￥{{filterList.price}}万</div>
        </div>
    </div>
    <!--车型描述-->
    <div class="cxms">
        <div class="basic-title">车型描述</div>
        <div class="cxms-content">{{filterList.caseDesc}}</div>
    </div>
    <!--亮点配置-->
    <div class="ldpz">
        <div class="basic-title font16">亮点配置</div>
        <div class="ldpz-content">
            <ul>
                <li v-for="itemcar in filterList.carHighlightConfigs">
                    <span class="iconfont"><img class="fl" :src="itemcar.icon.url"></span>
                    {{itemcar.name}}
                </li>
            </ul>
        </div>
    </div>
    <!--基本信息-->
    <div class="basic-info">
        <div class="basic-title">基本信息</div>
        <div class="basic-content">
            <ul class="intro"> 
                <li> <h4>{{filterList.carTypeCategoryText}}</h4> <p>车类型</p> </li> 
                <li> <h4>{{filterList.carColorName}}</h4> <p>颜色</p> </li> 
                <li> <h4>{{filterList.displacement}}</h4> <p>发动机</p> </li>
                <li id="js-car-standard"> <h4>{{filterList.fuelStandardText}}<i class="iconfont icon-detailwarning24"></i></h4> <p>环保标准</p> </li>
                <li> <h4>{{filterList.displacement}}</h4> <p>排量</p> </li>
                <li> <h4>{{filterList.driveTypeText}}</h4> <p>变速箱</p> </li>
            </ul>
            <div class="intro-btn" @click="goSpecification()">查看更多参数配置  >></div>           
        </div>
    </div>
    <!--车辆图片-->
    <div class="car-pictures">
        <div class="basic-title">车辆图片</div>
        <div class="car-piccon">
            <p>车身外观</p>
            <div class="car-picconlist" v-for="(itemimg, index) in filterList.images" v-if="index<3">
                <img :src="itemimg.url">
            </div>
            <div class="intro-btn" @click="showMorePic()">查看更多图片  >></div> 
              
        </div>
    </div>
    <!--推荐配置-->
    <div class="car-recommended">
        <div class="basic-title">推荐配置</div>
        <div class="recommended-con" v-for="itemrem in filterList.groups">
            <div class="recommended-left fl">
                {{itemrem.groupName}}
            </div>
            <div class="recommended-right fr">
                <ul>
                    <li v-for="i in itemrem.products" @click="goDetails(i)">
                        <div class="recommended-img fl">
                            <img class="fl" :src="i.image">
                            <p class="recomm-details fl">{{i.oneSentence}}</p>
                            <p class="recomm-right fl">
                                <span>{{i.price}}/个X{{i.quantity}}</span>
                                <span class="ffcolor">共计：￥{{i.totalprice}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'
function fetchDetails(store) {
    return store.dispatch('getNewCarDetails','950452ad74fa6e9c')
}
export default {
    data() {
            return {
                caseNum:'',
                newCarDetails: {},
                groups: {},
                carHigh: [],
                configParam: {},
                addedFava: {},
                errorText: "",
                isError: false,
                isPicturePop: false,
                imageList: [],
                headImage: '',               
            }
        },
        computed: {
        ...mapGetters({
            filterList: 'getNewCarDetails',
        }),
    },
    preFetch: fetchDetails,
    beforeMount() {
        fetchDetails(this.$store)
    },
    methods: {
         showMorePic() {
                let self = this;
                self.isPicturePop = true;
        },
        goSpecification() {
                let self = this;
                utils.setCachePromise('newCar-details-more-config', self.configParam).then(() => {
                    self.$route.router.go({
                    name: 'newCar.details.moreConfig'
                })
            })
        },

        
                
        
    }

}
</script>