<template>
    <div>
        <div class="bg" v-show="bgShow" @click="close()"></div>
        <div class="income"  v-bind:style="{minHeight:minHeight +'px'}">
            <div>
                <jyn-header jyn-title="收入明细" search-title="请输入想搜索的输入月份" :title-show.sync="titleShow" :box-show.sync="boxShow" :is-search.sync="isSearch" :search-box="searchBox" :search-mes.sync="searchMes"></jyn-header>
            </div>
            <div class="income-list" v-show="isData">
                <div class="content">
                    <div class="title fl">
                        <p>二手车</p>
                        <div class="triangle fl"></div>
                    </div>
                    <div class="details">
                        <p class="profit font18">6500.00</p>
                        <div class="car-details">
                            <p>雷克萨斯 2016 传奇 雷克萨斯 RL</p>
                            <div class="price">
                                <p style=" text-decoration:line-through; color:red;" class="fl">26.7万</p>
                                <p style="margin-left:2rem">25万</p>
                            </div>
                            <p>2016-9-8</p>
                        </div>
                    </div>
                </div>
                    <div class="content">
                    <div class="title fl">
                        <p>二手车</p>
                        <div class="triangle fl"></div>
                    </div>
                    <div class="details">
                        <p class="profit font18">6500.00</p>
                    <div class="car-details">
                        <p>雷克萨斯 2016 传奇 雷克萨斯 RL</p>
                        <div class="price">
                                <p style=" text-decoration:line-through; color:red;" class="fl">26.7万</p>
                                <p style="margin-left:2rem">25万</p>
                            </div>
                            <p>2016-9-8</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="income-list" v-show="noData">
                <div class="no-income">
                    <img src="../../../../assets/images/my/no_data.png">
                    <p class="font16">暂无收入明细</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return{
                titleShow:true,
                boxShow:false,
                isSearch:true,
                searchMes:false,
                minHeight:0,
                noData:false,
                isData:true,
                bgShow:false
            }
        },
        components:{
            "jynHeader": require('../../../../components/NewHeader.vue'),
        },
        route:{
            data(){
                console.log(document.body.clientHeight)
                this.minHeight=document.body.clientHeight
            }
        },
        methods:{
            searchBox:function(){
                this.titleShow=false;
                this.boxShow=true;
                this.isSearch=false;
                this.searchMes=true;
                this.bgShow=true
            },
            close:function(){
                this.titleShow=true;
                this.boxShow=false;
                this.isSearch=true;
                this.searchMes=false;
                this.bgShow=false
            }
        }
    }
    
</script>