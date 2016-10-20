

<template >

<div class="carTypeBox">
    <div style="background:#fff">
        <div class="chexing" v-show="selectCarType">
            <img class="img-left" src="../assets/images/icon/left_btn.png" />
            <img class="logo" v-show="showLogo!=''" v-webp="showLogo+'@60w_60h_1e_1c'" />
            <div class="sel font14" @click="selChexing()">{{typ}}</div>
            <img class="img-right" src="../assets/images/icon/right_btn.png" />
            <div class="resel font14" @click="reget()">重选车型</div>
        </div>
    </div>
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
            <div class="addNew" @click="selectType()">
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
                    <div class="letter" v-bind:class="{'scolor':item.maxHeight-10>nowBrandScrollTop&&nowBrandScrollTop>=item.minHeight-10}" @click="toBrand(item.initial)">{{item.initial}}</div>
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

export default {
    replace: true,
    props: {
        getGoods: {
            type: Function
        },
        cancelCarType: {
            type: Function
        },
        chexingShow: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            selectCarType: true,
            showLogo: "",
            libsOption: [],
            typ: "选择车型",
            selType: false,
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
            isLogin: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.getCarbrands();
            if (localStorage.token) {
                this.isLogin = true;
                this.getcarTypeLibs();
            }
        })
    },
    watch: {
        chexingShow() {
            if (!this.chexingShow) {
                this.showBg = false;
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
                }
            }
        },
        close() {
            this.selectCarType = true;
            this.selType = false;
            this.selChexi = false;
            this.selBrand = false;
            this.chexingShow = false;
            this.showBg = false;
        },
        reget: function() {
            this.selType = true;
            this.chexingShow = false;
            this.selectCarType = false;
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
                this.cancelCarType();
            }
        },
        selectType: function() {
            this.selType = true;
            this.chexingShow = false;
            this.selectCarType = false;
            this.reget();
        },
        toBrand: function(init) {
            this.fletterId = init;
            $("#brands").scrollTop(0);
            $("#brands").scrollTop($("#brands" + init).offset().top - $("#brandsA").offset().top)
        },
        brandsScroll(e) {
            this.nowBrandScrollTop = parseInt($(e.target).scrollTop());
            var arr = ["O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
            if (arr.indexOf($(".fletter .letter.scolor").text()) > -1) {
                $(".fletter").scrollTop(1000);
            } else {
                $(".fletter").scrollTop(0);
            }
        },
        getCarbrands: function() {
            this.$http.get(configPath.baseServiceUrl + 'v2/carinfo/brands?type=3&r=' + Math.random()).then(res => {
                this.carsOption = res.data.data;
            });
        },
        getCarserials: function(num) {
            this.typeLogo = num.logo;
            this.selBrand = true;
            this.brandId = num.id;
            this.brandName = num.name;
            this.$http.get(configPath.baseServiceUrl + 'v2/carinfo/brands/' + this.brandId + '/series?type=0&r=' + Math.random()).then(res => {
                this.serialsOption = res.data.data;
            });
        },
        getCartypes: function(numb) {
            this.selChexi = true;
            this.serialId = numb.id;
            this.serialName = numb.name;
            this.$http.get(configPath.baseServiceUrl + 'v2/carinfo/series/' + this.serialId + '/cartypes?type=3&r=' + Math.random()).then(res => {
                this.typesOption = res.data.data;
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
    }
}

</script>
