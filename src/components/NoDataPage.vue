<template>
    <!--
    type:
        0：无收藏数据
        1：无订单数据
        2：无购物车数据
        3：无地址数据
        4：无预约看车数据
        5：商品列表暂无商品
    -->
    <div class="my_nocollect" v-if="noDataType==0">
        <div class="my_nocollect-con">
            <img src="../assets/images/my/my_noaddress.png">
            <p class="font16">您暂无收藏记录</p>
        </div>
    </div>
    <div class="my_noorder" v-if="noDataType==1">
        <div class="noorder-con">
            <img src="../assets/images/my/no-order.png">
            <p class="font16">您还没有订单哦</p>
        </div>
    </div>
    <div class="my_nocollect" v-if="noDataType==2">
        <div class="my_nocollect-con">
            <img src="../assets/images/my/my_noaddress.png">
            <p class="font16">您还没有购买任何商品</p>
        </div>
    </div>
    <div class="myno_address" v-if="noDataType==3">
        <div class="noaddress-con">
            <img src="../assets/images/my/my_noaddress.png">
            <p class="font16">您暂无收货地址哦</p>
            <h3 class="font16 ffcolor" v-on:click="go()">新增收货地址</h3>
        </div>
    </div>
    <div class="my_nocollect" v-if="noDataType==4">
        <div class="my_nocollect-con">
            <img src="../assets/images/my/my_noaddress.png">
            <p class="font16">您暂无此预约记录</p>
        </div>
    </div>
    <div class="my_nocollect" v-if="noDataType==5">
        <div class="my_nocollect-con">
            <img src="../assets/images/my/my_noaddress.png">
            <p class="font16">暂无商品</p>
        </div>
    </div>
</template>

<script>

export default {
    replace: true,
    props: ['noDataType'],
    methods:{
        go:function(){
            this.$route.router.go({name:'usercenter.address.add',params:{addressId:-1}});
        }
    }
}

</script>
