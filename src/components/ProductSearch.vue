

<template >

<div class="goods-list" v-bind:class="{'height':typeShow==true}" @click.self="close()">
    <div class="serch">
        <div class="botton" @click="showtype()">
            <img class="img-product" src="../assets/images/product_list/product-icon.png" />
        </div>
        <div class="input">
            <input class="wid" type="text" value="" />
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

</template>

<script>

export default {
    replace: true,
    props: ["getGoods", "clearType", "searchShow"],
    data: function() {
        return {
            goodsOption: [],
            list: [],
            typeShow: false,
            goodsShow: false,
            selType: false,
            selChexi: false,
            selBrand: false,
            chexingShow: false,
            showBg: false,
            goodstypeId: "",
            categoriesId: "",
            titleText: "车品",
            isAddGoods: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.getGoodsCategories();
        })
    },
    methods: {
        close() {
                this.typeShow = false;
                this.goodsShow = false;
                this.selType = false;
                this.showBg = false;
            },
            showtype: function() {
                this.searchShow = false;
                if (this.typeShow == true) {
                    this.close()
                } else {
                    this.typeShow = true;
                    this.showBg = true;
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
                this.getGoods(cid);
            },
            getGoodsCategories: function() {
                this.$http.get(configPath.apiBaseUrl + 'goodsCategories?r=' + Math.random()).then(res => {
                    this.goodsOption = res.data.data;
                });
            }
    }
}

</script>
