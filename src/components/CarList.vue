<style>

.content {
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
}

</style>

<template>

<div>
    <!-- 新车 -->
    <div id="search_list_wrapper" style="margin-top: 0;" v-if="type==='new'">
        <div class="search-list-small">
            <ul class="grid content" id="newcar-search_list_wrapper_ul">
                <li class="col-1-1" v-for="n in list">
                    <a class="list-image-box" @click="goDetails(n)">
                        <div class="image"> <img class="slide last-slide" v-lazy="n.image+'@200w_200h'">
                        </div>
                        <div class="list-detail-box">
                            <p class="title">{{n.name}} </p>
                            <p class="basic">{{n.oneSentence}}</p>
                            <div class="price-box"> <span class="price">{{n.price}}<span>万</span></span>
                                <div class="tags-box">
                                    <div v-for="i in n.styles" class="tags" :style="{'background-color': i.value}">{{i.key}}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- <span class="collect" @click="toggleCollection('new',n)">
                    <i class="fa fa-heart-o" v-show="!n.addedFav"></i>
                    <i class="fa fa-heart" v-show="n.addedFav"></i>
                  </span> -->
                  <heart :item="n"></heart>
                </li>
            </ul>
        </div>
    </div>
    <!-- 二手车 -->
    <div id="search_list_wrapper" style="margin-top: 0px;" v-if="type==='used'">
        <div class="search-list-small">
            <ul class="grid content" id="usedcar-search_list_wrapper_ul">
                <li class="col-1-1" v-for="n in list">
                    <a class="list-image-box" @click="goDetails(n)">
                        <div class="image"> <img class="slide last-slide" v-lazy="n.image+'@200w_200h'">
                        </div>
                        <div class="list-detail-box">
                            <p class="title">{{n.name}} </p>
                            <p class="basic">{{n.firstPlate}}<span>|</span>{{n.mileage}}万公里</p>
                            <div class="price-box"> <span class="price">{{n.price}}<span>万</span></span>
                                <div class="tags-box">
                                    <div v-for="i in n.styles" class="tags" :style="{'background-color': i.value}">{{i.key}}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <heart :item="n"></heart>
                    <!-- <span class="collect" @click="toggleCollection('used',n)">
                    <i class="fa fa-heart-o" v-show="!n.addedFav"></i>
                    <i class="fa fa-heart" v-show="n.addedFav"></i>
                 </span> -->
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import Heart from '../components/Heart.vue';
export default {
    replace: true,
    components:{
      Heart
    },
    props: {
        list: {
            type: Array,
            required: true,
            default: () => {
                return []
            }
        },
        type: { //新车or二手车
            type: String,
            required: true
        }
    },
    methods: {
            goDetails(item) {
                if (!item) {
                    return false;
                };
                let self = this,
                    no,
                    routerName;

                if (self.type === 'new') {
                    routerName = 'newCar.details';
                    no = item.no;
                }

                if (self.type === 'used') {
                    routerName = 'usedCar.details';
                    no = item.sourceNo;
                }
                self.$route.router.go({
                    name: routerName,
                    params: {
                        carNo: no
                    }
                });
            }
    }
}

</script>
