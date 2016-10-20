

<template>

<div class="components_receiptAddresses" v-show="isShow">
    <div class="header" style="position:fixed;">
        <a href="javascript:" class="back" v-on:click="back"><i class="fa fa-angle-left"></i></a>
        <div class="h_label font16">选择施工门店</div>
    </div>
    <div class="addressItem default nopadding"></div>
    <div class="addressItem" v-for="item in constructLocationOptions" @click="select(item)">
        <h4 class="font16">{{item.name}}</h4>
        <h4 class="font16">{{item.address}}</h4>
    </div>
</div>

</template>

<script>

export default {
    replace: true,
    data() {
        return {
            constructLocationOptions: []
        }
    },
    props: ['isShow', 'selected'],
    mounted() {
        this.$nextTick(() => {
            this.getConstructLocation();
        })
    },
    methods: {
        back: function() {
            this.isShow = false;
        },
        getConstructLocation: function() {
            this.$http.get(configPath.apiBaseUrl + 'constructLocations/370200').then(res => {
                this.constructLocationOptions = res.data.data;
            })
        },
        select: function(item) {
            this.selected(item);
        },
        closeAddAddress: function() {
            this.showAddAddress = false;
            if (type == undefined) {
                this.getConstructLocation();
            }
        }
    }
}

</script>
