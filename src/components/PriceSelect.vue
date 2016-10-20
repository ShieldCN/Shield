

<template>

<div id="filter_price_box" style="display: block;" v-show="activeNav.type&&activeNav.type==='price'">
    <div class="filter_price_box_user">
        <div class="filter_price_box_user_title">自定义价格</div>
        <div class="filter_price_box_user_input">
            <div class="input1">
                <input type="number" id="filter_price_input1" v-model="priceLeft">
                <span>万</span>
            </div>
            <div class="to">-</div>
            <div class="input2">
                <input type="number" id="filter_price_input2" v-model="priceRight">
                <span>万</span>
            </div>
            <div id="filter_price_submit" @click="customPriceButton()">确定</div>
            <div id="filter_price_box_error"></div>
        </div>
    </div>
    <div class="weizhi"></div>
    <ul>
        <li @click="unlimited()" :class="{'selected':!chosenFilters.price.key}">
            <a>不限</a>
        </li>
        <li v-for="n in list" @click="rangePrice(n)" :class="{'selected':chosenFilters.price.key&&chosenFilters.price.key===n.key}">
            <a>{{n.value}}</a>
        </li>
        <li @click="customPriceItem()" class="selected" v-show="chosenCustomPrice.value">
            <a>{{chosenCustomPrice.value}}</a>
        </li>
    </ul>
    <div class="filter-box-hidden remove-overflow-hidden " @click="hide(false)">
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
                return {price:{}}
            }
        }
    },
    data() {
        return {
            priceLeft: '',
            priceRight: '',
            chosenItem: {
                type: 'price',
                key: null,
                value: null
            },
            chosenCustomPrice: {
                type: 'price',
                key: null,
                value: null
            }
        }
    },
    methods: {
        //自定义确定按钮
        customPriceButton() {
                let self = this,
                    key, value, data;
                if (self.priceLeft === '' || isNaN(self.priceLeft)) {
                    self.priceLeft = 0;
                }
                if (self.priceRight === '' || isNaN(self.priceRight)) {
                    self.priceRight = 9999.99;
                }
                self.priceLeft = Number(self.priceLeft);
                self.priceRight = Number(self.priceRight);
                if (self.priceLeft > self.priceRight) {
                    [self.priceLeft, self.priceRight] = [self.priceRight, self.priceLeft]
                }
                if (self.priceRight > 9999.99) {
                    self.priceRight = 9999.99;
                }
                if (self.priceLeft > 9999.99) {
                    self.priceLeft = 9999.99;
                }
                key = `${self.priceLeft}-${self.priceRight}`;
                value = `${key}万`;

                data ={price:{
                    type: 'price',
                    key: key,
                    value: value
                }} ;
                self.priceLeft = '';
                self.priceRight = '';
                self.chosenCustomPrice = data; //这个直接放入选中的过滤条件这个state就好了
                self.$store.dispatch('updateNewCarChosenFilter', {
                    priceNav: data
                });
                self.hide()
            },
            customPriceItem() { //根据自定义价格生成的选项
                let self = this,
                    data = [];
                self.$store.dispatch('updateNewCarChosenFilter', {
                    priceNav: self.chosenCustomPrice
                });
                self.hide()
            },
            rangePrice(item) { //价格范围点击
                let self = this,
                    data ={price: {
                        type: 'price',
                        key: item.key,
                        value: item.value
                    }};
                self.chosenCustomPrice = {};
                self.$store.dispatch('updateNewCarChosenFilter', {
                    priceNav: data
                });
                self.hide()
            },
            unlimited() { //不限
                let self = this;
                self.chosenCustomPrice = {};
                self.$store.dispatch('updateNewCarChosenFilter', {
                    priceNav: null
                });
                self.hide()
            },
            hide(isNeedUpdate = true) {
                this.$store.dispatch('updateNewCarChosenNav', {
                    isNeedUpdate: isNeedUpdate
                });
            },
    }
}

</script>
