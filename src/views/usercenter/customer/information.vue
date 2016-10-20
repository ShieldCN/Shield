<template>
    <div class="recommend">
        <jyn-header jyn-title="推荐绑定" :is-search.sync="isSearch"></jyn-header>
        <div class="gray"></div>
        <div class="content" v-for="item in detailsList">
            <div class="headPicture">
                <img src="../../../assets/images/icon/colorful.png">
            </div>
            <div class="customerInfo">
                <p>客户：{{item.name}}</p>
                <p>性别：{{item.sex}}</p>
                <a :href="'trl'+item.tel" class="fl"><p>电话：{{item.tel}}</p></a>
                <a :href="'sms:'+item.tel"><img src="../../../assets/images/my/send.png"></a>
                <p>车型：{{item.car}}</p>
                <div style="clear:both"></div>
            </div>
            <div class="condition">
                <p>会员：否</p>
                <p style="color:#ff6a2e;">绑定截止日期：2016-06-12</p>
            </div>
            <div class="condition" style="border:none">
                <p>联系联络员:</p>
                <div class="contactForm">
                    <div class="form">
                        <a :href="'tel:'+item.tel">
                            <img src="../../../assets/images/icon/phone.png">
                            <p >打电话</p>
                        </a>
                        <div style=clear:both></div>
                    </div>
                    <div class="form">
                        <a :href="'sms:'+item.tel">
                            <img src="../../../assets/images/icon/message.png">
                            <p >发短信</p>
                        </a>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
            <div class="rec" @click="rec_member()">
                <p class="font16">推荐会员</p>
            </div>
            <p class="registTime font12">注册账号时间：{{item.time}}</p>
        </div>
        <section class="alert" v-show="alertShow">
            <p>推荐成功</p>
        </section>
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
                        time:"2016-03-02",
                        car:"雷克萨斯 R系 2016款"
                    }
                ],
                isSearch:false,
                alertShow:false
            }
        },
        route:{
            data(){

            }
        },
        components:{
            "jynHeader": require('../../../components/NewHeader.vue'),
        },
        methods:{
            rec_member:function(){
                this.alertShow=true;
                let self=this;
                setTimeout(function(){
                    self.alertShow=false;
                },1000)
            }
        }
    }
</script>