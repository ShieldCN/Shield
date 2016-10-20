

<template >

<div class="goods-list" v-bind:class="{'height':typeShow==true}" @click.self="close()">
    <div class="serch">
        <div class="botton" @click="showtype()">
            <img class="img-product" src="../assets/images/product_list/product-icon.png" />
        </div>
        <div class="chexing" v-show="selectCarType">
            <img class="img-left" src="../assets/images/icon/left_btn.png" />
            <img class="logo" v-if="showLogo!=''" v-webp="showLogo+'@60w_60h_1e_1c'" />
            <div class="sel font14" @click="selChexing()">{{typ}}</div>
            <img class="img-right" src="../assets/images/icon/right_btn.png" />
            <div class="resel font14" @click="reget()">重选车型</div>
        </div>
        <div class="input" v-bind:class="{'sbox':searchShow==true}">
            <input class="wid" type="text" value="" @focus="searchBox(0)" @blur="searchBox(1)" />
            <img class="img-search" src="../assets/images/icon/search.png" />
        </div>
        <div style="clear:both"></div>
    </div>
    <div class="bigType" v-show="typeShow">
        <div v-for="item in goodsOption">
            <div class="btype " v-bind:class="{'scolor':categoriesId==item.id&&goodsShow==true}" @click="getType(item)">{{item.name}}</div>
            <div style="clear:both"></div>
        </div>
    </div>
    <div class="smalltype" v-show="goodsShow" @click.self="close()">
        <div class="stype" v-for="item in list" @click="getGoodsByCategories(item)">
            <div class="ellipsis">{{item.name}}</div>
            <div><img v-lazy="item.url+'@100w_100h_1e_1c'" style="height:1.8rem" /></div>
        </div>
        <div style="clear:both;"></div>
    </div>
</div>
<div class="carTypeBox">
    <div class="sel-down" v-show="chexingShow">
        <div class="carLib">
            <div class="car-list" v-for="item in libsOption">
                <img class="logo-down" v-webp="item.logo+'@60w_60h_1e_1c'" />
                <div class="name-down font16" @click="selCar(item)">{{item.name}}</div>
                <img class="img-clear" src="../assets/images/my/clear_icon.png" @click="delCarLibs(item.id)" />
            </div>
        </div>
        <p class="clearAll" @click="clearCarType()">取消选择
            <p/>
            <div class="addNew" @click="reget()">
                <div class="add-box">
                    <img class="add-img" src="../assets/images/icon/icon.png" />
                    <p class="add-text">添加新车型</p>
                </div>
            </div>
    </div>

    <div class="bg" v-show="showBg" @click="close()"></div>
    <div class="new" v-show="selType">
        <div class="brand">
            <img class="fl" src="../assets/images/icon/car.png" />
            <p class="chose-brand">选择品牌</p>
        </div>
        <div class="allbrand">
            <div class="fletter">
                <div v-for="item in brandsInitials">
                    <div class="letter" v-bind:class="{'scolor':item.maxHeight-10>nowBrandScrollTop&&nowBrandScrollTop>=item.minHeight-10}" @click="toBrand(item.initial,$event)">{{item.initial}}</div>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="cars" id="brands" v-on:scroll="brandsScroll($event)">
                <div v-for="item in carsOption" id="brands{{item.initial}}">
                    <div class="brand-list" v-for="i in item.brands" @click="getCarserials(i)">
                        <img v-webp="i.logo+'@30w_30h_1e_1c'" class="img" />
                        <div class="ellipsis">{{i.name}}</div>
                    </div>
                </div>
            </div>
            <div class="letter-bottom" @click="close()">
                <img src="../assets/images/icon/fold.png" />
            </div>
        </div>
    </div>
    <div class="new" v-show="selBrand">
        <div class="brand">
            <img class="fl" src="../assets/images/icon/car.png" />
            <p class="chose-brand">选择品牌<i>></i>选择车系</p>
        </div>
        <div class="chose-titp">
            品牌：{{brandName}}
            <img class="img-close" src="../assets/images/my/close.png" @click="backBrands()" />
        </div>
        <div class="chose-chexi" v-for="item in serialsOption">
            <div class="CarBrandTitle">{{item.factory}}</div>
            <div class="chexi" v-for="it in item.series" @click="getCartypes(it)">{{it.name}}</div>
        </div>
    </div>
    <div class="new" v-show="selChexi">
        <div class="brand">
            <img class="fl" src="../assets/images/icon/car.png" />
            <p class="chose-brand">选择品牌<i>></i>选择车系<i>></i>选择车型</p>
        </div>
        <div class="chose-titp">
            品牌：{{brandName}}
            <img class="img-close" src="../assets/images/my/close.png" @click="backBrands()" />
        </div>
        <div class="chose-titp-1">
            车系：{{serialName}}
            <img class="img-close" src="../assets/images/my/close.png" @click="backSerials()" />
        </div>
        <div class="chose-chexi" v-for="item in typesOption">
            <div class="CarBrandTitle">{{item.year}}</div>
            <div class="chexi" v-for="ite in item.carTypes" @click="saveCartypes(ite)">{{ite.name}}</div>
        </div>
    </div>
</div>

</template>

<script>

import utils from '../libs/utils';
export default {
    replace: true,
    props: {
        gainGoods: {
            type: Function
        },
        getGoods: {
            type: Function
        },
        typeShow: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            goodsOption: [],
            list: [],
            goodsShow: false,
            selType: false,
            chexingShow: false,
            goodstypeId: "",
            categoriesId: "",
            titleText: "车品",
            isAddGoods: false,
            selectCarType: true,
            showLogo: "",
            libsOption: [],
            typ: "选择车型",
            brandsInitials: [],
            carsOption: [],
            selBrand: false,
            serialsOption: [],
            typesOption: [],
            selChexi: false,
            nowBrandScrollTop: 0,
            categoriesOption: "",
            serialName: "",
            brandName: "",
            showBg: false,
            serialId: "",
            typeLogo: "",
            typeName: "",
            brandId: "",
            cartypeOption: [],
            isLogin: false,
            searchShow: false,
            fromClk: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.getGoodsCategories();
                this.getCarbrands();
                if (localStorage.token) {
                    this.isLogin = true;
                    this.getcarTypeLibs();
                }
            }, 100)
        })
    },
    watch: {
        typeShow() {
            if (!this.typeShow) {
                this.goodsShow = false;
            }
        }
    },
    methods: {
        selChexing: function() {
            if (this.libsOption.length == 0) {
                this.reget()
            } else {
                if (this.chexingShow == true) {
                    this.chexingShow = false;
                } else {
                    this.chexingShow = true;
                    this.showBg = true;
                    this.typeShow = false;
                    this.selType = false;

                }
            }
        },
        searchBox: function(state) {
            this.searchShow = state == 0 ? true : false;
            this.showBg = true;
        },
        close() {
            this.selectCarType = true;
            this.selType = false;
            this.selChexi = false;
            this.selBrand = false;
            this.chexingShow = false;
            this.showBg = false;
            this.typeShow = false;
            this.goodsShow = false;
        },
        reget: function() {
            this.selType = true;
            this.typeShow = false;
            this.chexingShow = false;
            this.selectCarType = true;
            var self = this;
            setTimeout(function() {
                self.toBrand("A");
                if (self.brandsInitials.length == 0) {
                    for (var i = 0; i < self.carsOption.length; i++) {
                        var newData = self.carsOption[i];
                        var documentItem = $("#brands>div").eq(i);
                        var minHeight = documentItem.offset().top - $("#brandsA").offset().top;
                        var maxHeight = documentItem.offset().top - $("#brandsA").offset().top + documentItem.height();
                        var jsonItem = {
                            initial: newData.initial,
                            minHeight: minHeight,
                            maxHeight: maxHeight
                        }
                        self.brandsInitials.push(jsonItem);
                    }
                }
            });
        },
        getcarTypeLibs: function() {
            this.$http.get(configPath.apiBaseUrl + 'carTypeLibs?r=' + Math.random()).then(res => {
                this.libsOption = res.data.data;
            });
        },
        selCar: function(n) {
            this.showLogo = n.logo;
            this.typ = n.name;
            this.close();
            this.typeId = n.typeId;
            this.getGoods();
        },
        delCarLibs: function(id) {
            if (this.libsOption.length == 1) {
                this.typ = "选择车型";
                this.chexingShow = false;
                this.showLogo = "";
            }
            this.$http.delete(configPath.apiBaseUrl + 'carTypeLibs/' + id + '?r=' + Math.random()).then(res => {
                this.getcarTypeLibs();
            });
        },
        clearCarType: function() {
            this.chexingShow = false;
            if (this.showLogo == "") {
                return;
            } else {
                this.typ = "选择车型";
                this.showLogo = "";
                this.typeId = "",
                    this.getGoods();
            }
        },
        toBrand: function(init, e) {
            this.fromClk = true;
            $("#brands").scrollTop(0);
            $(".fletter .letter.scolor").removeClass("scolor");
            if (init == "A") {
                $(".fletter .letter").eq(0).addClass("scolor")
            } else {
                $(e.target).addClass("scolor")
            }

            $("#brands").scrollTop($("#brands" + init).offset().top - $("#brandsA").offset().top)
        },
        brandsScroll(e) {
            if (this.fromClk) {
                this.fromClk = false;
                return;
            }
            var arr = ["O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
            if (arr.indexOf($(".fletter .letter.scolor").text()) > -1) {
                $(".fletter").scrollTop(1000);
            } else {
                $(".fletter").scrollTop(0);
            }
            $(".fletter .letter.scolor").removeClass("scolor");
            this.nowBrandScrollTop = parseInt($(e.target).scrollTop());
        },
        getCarbrands: function() {
            let self = this;
            utils.storageCachePromise('goods-header-car-brand-list').then((res) => {
                self.carsOption = res;
            }, (e) => {
                self.$http.get(configPath.baseServiceUrl + 'v2/carinfo/brands?type=3&r=' + Math.random()).then(res => {
                    self.carsOption = res.data.data;
                    utils.WebStorageInstance.set('goods-header-car-brand-list', self.carsOption, {
                        exp: 86400
                    });
                });
            });

        },
        getCarserials: function(num) {
            let self = this;
            self.typeLogo = num.logo;
            self.selBrand = true;
            self.brandId = num.id;
            self.brandName = num.name;
            self.$http.get(configPath.baseServiceUrl + 'v2/carinfo/brands/' + self.brandId + '/series?type=0&r=' + Math.random()).then(res => {
                self.serialsOption = res.data.data;
                utils.WebStorageInstance.set('goods-header-car-serial-list', self.serialsOption, {
                    exp: 86400
                });
            });

        },
        getCartypes: function(numb) {
            let self = this;
            self.selChexi = true;
            self.serialId = numb.id;
            self.serialName = numb.name;
            self.$http.get(configPath.baseServiceUrl + 'v2/carinfo/series/' + self.serialId + '/cartypes?type=3&r=' + Math.random()).then(res => {
                self.typesOption = res.data.data;
                utils.WebStorageInstance.set('goods-header-car-type-list', self.typesOption, {
                    exp: 86400
                });
            });

        },
        backBrands: function() {
            this.selBrand = false;
            this.selType = true;
            this.selChexi = false;
            this.toBrand("A");
        },
        backSerials: function() {
            this.selBrand = true;
            this.selChexi = false;
        },
        saveCartypes: function(nu) {
            this.typeName = nu.name;
            this.close();
            this.typeId = nu.id;
            this.typ = this.serialName + this.typeName;
            console.log(this.typeLogo)
            this.showLogo = this.typeLogo;
            for (var i = 0; i < this.libsOption.length; i++) {
                if (this.libsOption[i].typeId == this.typeId) {
                    return;
                }
            }
            var jsonData = {
                "brandId": this.brandId,
                "serialId": this.serialId,
                "typeId": this.typeId
            };
            if (this.isLogin == true) {
                this.$http.post(configPath.apiBaseUrl + 'carTypeLibs', jsonData).then(res => {
                    this.getcarTypeLibs();
                });
            } else {
                return;
            }
            this.getGoods();
        },
        showtype: function() {
            if (this.typeShow == true) {
                this.close()
            } else {
                this.typeShow = true;
                this.showBg = true;
                this.chexingShow = false;
                this.selType = false;
            }
        },
        getType: function(state) {
            this.list = state.children;
            if (state.id == this.categoriesId && this.goodsShow) {
                this.goodsShow = false; //点击展示商品.再次点击收起
            } else {
                this.goodsShow = true;
            }
            this.categoriesId = state.id;
        },
        getGoodsByCategories: function(cid) {
            this.close();
            this.gainGoods(cid);
        },
        getGoodsCategories: function() {
            let self = this;
            utils.storageCachePromise('goods-header-goods-category-list').then((res) => {
                self.goodsOption = res;
            }, (e) => {
                self.$http.get(configPath.apiBaseUrl + 'goodsCategories?r=' + Math.random()).then(res => {
                    self.goodsOption = res.data.data;
                    utils.WebStorageInstance.set('goods-header-goods-category-list', self.goodsOption, {
                        exp: 86400
                    });
                });
            });

        }
    }
}

</script>
