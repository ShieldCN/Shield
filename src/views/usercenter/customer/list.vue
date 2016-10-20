<template>
    <div>
        <div class="bg" v-show="bgShow" @click="close()"></div>
        <div class="customer">
            <div>
                <jyn-header jyn-title="我的客户" search-title="输入你想搜索的客户信息" :title-show.sync="titleShow" 
                :box-show.sync="boxShow" :is-search.sync="isSearch" :search-box="searchBox" :search-mes.sync="searchMes"></jyn-header>
            </div>
            <div class="condition">
                <p style="border-right:1px solid #ccc" @click="choseOn()" :class="{scolor:onBind}">绑定中({{detailsList.length}})</p>
                <p @click="choseOff()" :class="{scolor:offBind}">已失效({{detailsList.length}})</p>
            </div>
            <!--绑定中-->
            <div class="customer-list" v-show="onBind">
                <div class="content" v-for="item in detailsList">
                    <router-link to="/information">
                    <div class="details">
                        <img src="../../../assets/images/icon/colorful.png">
                        <div class="info">
                            <p>用户姓名：{{item.name}}</p>
                            <p>性别：{{item.sex}}</p>
                            <a :href="'tel:'+item.tel" class="fl">联系电话：{{item.tel}}</a>
                            <a :href="'sms:'+item.tel"><img src="../../../assets/images/my/send.png"></a>
                            <div style="clear:both"></div>
                        </div>
                        <div style="clear:both"></div> 
                    </div>
                    </router-link>
                    <div class="contact">
                        <div class="per" @click="contactPer(item)">
                            <p class="fl">联系联络员:</p>
                            <span v-if="customersId==item.id"><img src="../../../assets/images/icon/sli_up.png"></span>
                            <span v-else><img src="../../../assets/images/icon/sli_down.png"></span>
                            <div style="clear:both"></div>
                        </div>
                        <div class="contactForm" v-show="customersId==item.id">
                            <div class="phoneCall">
                                <a :href="'tel:'+item.tel">
                                    <img src="../../../assets/images/icon/phone.png">
                                    <p class="fl">打电话</p>
                                </a>
                            </div>
                            <div class="sendMessage">
                                <a :href="'sms:'+item.tel">
                                    <img src="../../../assets/images/icon/message.png">
                                    <p class="fl">发短信</p>
                                </a>
                            </div>
                            <div style="clear:both"></div>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                    <span style="margin-top:0.2rem">{{item.time}} 绑定截止</span>
                    <div style="clear:both"></div>
                </div>
            </div>
            <div class="customer-list" v-show="noData">
                <div class="no-customer">
                    <img src="../../../assets/images/my/no_data.png">
                    <p class="font16">暂无绑定用户</p>
                </div>
            </div>
            <!--已失效-->
            <div class="customer-list" v-show="offBind" style="color:#ccc">
                <div class="content" v-for="item in detailsList">
                    <div class="details">
                        <img src="../../../assets/images/icon/colorful.png" style="-webkit-filter: grayscale(1)">
                        <div class="info">
                            <p>用户姓名：{{item.name}}</p>
                            <p>性别：{{item.sex}}</p>
                            <a style="color:#ccc" :href="'tel:'+item.tel" class="fl">联系电话：{{item.tel}}</a>
                            <a :href="'tel:'+item.tel""><img src="../../../assets/images/my/send.png"></a>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                    <span class="font12" style="margin-top:0.2rem">{{item.time}}</span>
                    <div style="clear:both"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return{
                detailsList:[
                    {
                        id:"1",
                        name:"刘小红",
                        sex:"男",
                        tel:"18652221009",
                        time:"2016-03-02"
                    },
                    {
                        id:"2",
                        name:"王小明",
                        sex:"女",
                        tel:"18765912514",
                        time:"2018-03-15"
                    }
                ],
                titleShow:true,
                boxShow:false,
                isSearch:true,
                searchMes:false,
                onBind:true,
                offBind:false,
                noData:false,
                bgShow:false,
                customersId:""
            }
        },
        components:{
            "jynHeader": require('../../../components/NewHeader.vue'),
        },
        route:{
            data(){

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
            choseOn:function(){
                this.onBind=true;
                this.offBind=false
            },
            choseOff:function(){
                this.onBind=false;
                this.offBind=true
            },
            close:function(){
                this.titleShow=true;
                this.boxShow=false;
                this.isSearch=true;
                this.searchMes=false;
                this.bgShow=false
            },
            contactPer:function(state){
                if(state.id==this.customersId){
                    this.customersId="";
                }else{
                    this.customersId=state.id;
                } 
            }
        }
    }
</script>