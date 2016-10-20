

<template>

<div class=" filter-brand filter-box" style="display: block;" v-show="activeNav.type&&activeNav.type==='brand'">
    <div class="filter-container">
        <div id="brand-wrapper" class=" brand-wrapper"> <a @click="unlimitedBrand()" class="brand brand-not-limit title">
                  不限品牌
              </a>
            <p @click="chooseHotSerial()" class="brand brand-hot-list " :class="{'selected':chosenFilters.brand&&!chosenFilters.brand.key}">热门车系</p>
            <div v-for="n in list.brandList" class=" brand-list">
                <p class="title">{{n.groupName}}</p>
                <ul>
                    <li v-for="i in n.brands" @click="chooseBrand(i)" class="brand" :class="{'selected':chosenFilters.brand&&chosenFilters.brand.key===i.id}">
                        <!-- <li v-for="i in n.brands" @click="chooseBrand(i)" class="brand"> -->
                        <!-- <img v-webp="i.logo+'@50w_50h'" /> -->
                        <img :src="i.logo+'@50w_50h'" />
                        <span>  {{i.name}}</span>

                    </li>
                </ul>
            </div>
        </div>
        <div class=" series-wrapper" id="series-wrapper">
            <div v-show="showSerialType==='hotSerial'" class=" series-list">
                <li class="brand ">
                    <a> <i class="fa fa-fire"></i> 热门车系
                    </a>
                </li>
                <ul>
                    <li @click="chooseSerial(n)" v-for="n in list.hotSerials" class="series "> <a>
                  {{n.name}}
                  </a> </li>
                </ul>
            </div>
            <div v-show="showSerialType==='normalSerial'" class=" series-list">
                <li class="brand  ">
                    <a>
                        <!-- <img v-webp="chosenBrand.logo+'@50w_50h'" style="margin-right:0.375rem;margin-left:0" /> -->
                        <img :src="chosenBrand.logo+'@50w_50h'" style="margin-right:0.375rem;margin-left:0" />
                        <span>  {{chosenBrand.name}}</span>

                    </a>
                </li>
                <ul>
                    <li @click="unlimitedSerial()" class="series"> <a>不限车系</a> </li>
                    <template v-for="n in chosenBrand.groupSerials">
                        <p class="title">{{n.factory}}</p>
                        <li @click="chooseSerial(i)" v-for="i in n.series" class="series " :class="{'selected':chosenFilters.brand&&chosenFilters.serial.key===i.id}">
                            <a>
                                <!-- <li @click="chooseSerial(i)" v-for="i in n.series" class="series "> <a> -->
                                {{i.name}}
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <ul class=" nav-wrapper" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
            <li @click="chooseLetter(n)" v-for="n in list.brandList">{{n.groupName}}</li>
        </ul>
        <div v-show="isShowPop" class="nav-tip">{{chosenLetter}}</div>
    </div>
    <div @click="hide(false)" class=" filter-bottom">
        <i class="fa fa-angle-up"></i>
    </div>
</div>

</template>

<script>

export default {
    replace: true,
    props: {
        activeNav: {
            type: Object,
            default: () => {
                return {}
            }
        },
        list: {
            required: true
        },
        chosenFilters: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            isShowPop: false,
            chosenLetter: '',
            timer: '',
            chosenBrand: {},
            showSerialType: 'hotSerial'
        }
    },
    methods: {
        resetBrand() {
                return {
                    brand: {
                        type: 'brand',
                        key: null,
                        value: null
                    },
                    serial: {
                        type: 'serial',
                        key: null,
                        value: null
                    }
                }
            },
            resetSerial() {
                let self = this;
                return [{
                    type: 'brand',
                    key: self.chosenBrand.id,
                    value: self.chosenBrand.name
                }, {
                    type: 'serial',
                    key: null,
                    value: null
                }];
            },
            chooseLetter(item) {
                let self = this,
                    chosenLetter = item.groupName;
                self.chosenLetter = chosenLetter;

                if (self.timer) {
                    clearTimeout(self.timer)
                }

                self.isShowPop = true;
                self.timer = setTimeout(() => {
                    self.isShowPop = false;
                }, 2000);
                $('#brand-wrapper').scrollTop(0)
                $('#brand-wrapper').scrollTop($("#brand-wrapper-id-" + chosenLetter).offset().top - 100);
            },
            hide(isNeedUpdate = true) {
                this.$store.dispatch('updateNewCarChosenNav', {
                    isNeedUpdate: isNeedUpdate
                });
            },
            dispatch(data) {
                this.$store.dispatch('updateNewCarChosenFilter', {
                    brandNav: data
                });
            },
            //点击不限品牌
            unlimitedBrand() {
                let self = this,
                    data = self.resetBrand();
                self.dispatch(data);
                self.hide();
            },
            //点击不限车系
            unlimitedSerial() {
                let self = this,
                    data = self.resetSerial();
                self.dispatch(data);
                self.hide();
            },
            //点击热门车系
            chooseHotSerial() {
                let self = this;
                self.chosenBrand = self.resetBrand();
                self.showSerialType = 'hotSerial';
            },
            //点击某一品牌
            chooseBrand(item) {
                let self = this,
                    data = {
                        brand: {
                            type: 'brand',
                            key: item.id,
                            value: item.name
                        },
                        serial: {
                            type: 'serial',
                            key: null,
                            value: null
                        }
                    }
                self.showSerialType = 'normalSerial';
                self.chosenBrand = item;

                self.dispatch(data);
            },
            //点击某一车系
            chooseSerial(item) {
                let self = this,
                    data = {
                        brand: {
                            type: 'brand',
                            key: self.chosenBrand.id,
                            value: self.chosenBrand.name
                        },
                        serial: {
                            type: 'serial',
                            key: item.id,
                            value: item.name
                        }
                    }
                self.dispatch(data);
                self.hide();
            }
    }
}

</script>
