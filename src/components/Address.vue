

<template>

<div class="components_receiptAddresses" v-show="isShow">
    <div class="header" style="position:fixed;">
        <a href="javascript:" class="back" v-on:click="back"><i class="fa fa-angle-left"></i></a>
        <div class="h_label font16">选择收货地址</div>
    </div>
    <div class="addressItem default" @click="select(defaultAddress)" v-bind:class="{'nopadding':!defaultAddress.displayAddress}" v-show="addressOptions.length>0||defaultAddress">
        <h4 class="font16"><b>{{defaultAddress.contactPhone}}</b>{{defaultAddress.contactPerson}}</h4>
        <h4 class="font16" v-if="defaultAddress.displayAddress"><b class="default">【默认地址】</b>{{defaultAddress.displayAddress}}</h4>
    </div>
    <div class="addressItem" v-for="item in addressOptions" @click="select(item)" v-show="addressOptions.length>0||defaultAddress">
        <h4 class="font16"><b>{{item.contactPhone}}</b>{{item.contactPerson}}</h4>
        <h4 class="font16">{{item.displayAddress}}</h4>
    </div>
    <div v-else class="noAddress">
        <img src="../assets/images/my/my_noaddress.png">
        <p class="font16">您暂无收货地址哦</p>
    </div>
    <div class="bottom font18" @click="addAddress()">
        新增收货地址
    </div>
</div>
<div class="components_receiptAddresses" v-show="showAddAddress">
    <jyn-add-address :close="closeAddAddress"></jyn-add-address>
    <div class="header" style="position:fixed;">
        <a href="javascript:" class="back" v-on:click="closeAddAddress(0)"><i class="fa fa-angle-left"></i></a>
        <div class="h_label font16">添加收货地址</div>
    </div>
</div>

</template>

<script>

export default {
    replace: true,
    data() {
        return {
            addressOptions: [],
            defaultAddress: {},
            showAddAddress: false
        }
    },
    props: ['isShow', 'selected'],
    mounted() {
        this.$nextTick(() => {
            this.getAddress();
        })
    },
    methods: {
        back: function() {
            this.isShow = false;
        },
        getAddress: function() {
            this.$http.get(configPath.apiBaseUrl + 'receiptAddresses').then(res => {
                this.addressOptions = res.data.data.data;
                for (var i = 0; i < res.data.data.data.length; i++) {
                    if (res.data.data.data[i].isDefault) {
                        this.defaultAddress = res.data.data.data[i];
                        this.addressOptions.splice(i, 1);
                        break;
                    }
                }
            })
        },
        select: function(item) {
            this.selected(item);
        },
        addAddress: function() {
            this.showAddAddress = true;
        },
        closeAddAddress: function(type) {
            this.showAddAddress = false;
            if (type == undefined) {
                this.getAddress()
            }
        }
    },
    components: {
        "jynAddAddress": require('../views/user-center/address/addAddress.vue')
    }
}

</script>
