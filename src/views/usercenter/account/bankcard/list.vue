<template>
    <div class="bankList" :style="{minHeight:minHeight+'px'}">
        <!--<jyn-header jyn-title="银行卡"></jyn-header>-->
        <router-link to="/bankCard/add">添加银行卡</router-link>
        <div class="list_item" v-for="item in cardList" @click="remove(item)">
            <div class="icon">
                <img v-lazy="item.img"/>
            </div>
            <div class="content">
                <p>
                    <b class="font16">{{item.name}}</b>
                    <span class="font14 fr">{{item.type}}</span>
                </p>
                <p class="font16">{{fmtBankCard(item.no)}}</p>
            </div>
            <div class="selectBg" v-show="item.id==confirmId"></div>
        </div>
        <div class="bottomModal" v-show="showBottomModal">
            <a class="button red font16" @click="removeOk">删除</a>
            <a class="button white font16" @click="cancel">取消</a>
        </div>
    </div>
</template>
<script>
    import jynHeader from '../../../../components/Header.vue'
    export default{
        data(){
            return {
                cardList:[
                    {
                        id:"1",
                        img:'test.jpg',
                        name:'中国银行',
                        type:'储蓄卡',
                        no:'5566556655665566'
                    }
                ],
                confirmId:"",
                showBottomModal:false,
                minHeight:0
            }
        },
        methods:{
            fmtBankCard(item){
                var lastFour=item.substr(item.length-5,4);
                var first=item.substr(0,item.length-4);
                var content="";
                for(var i=0;i<first.length;i++){
                    if(i+1==first.length&&first.length%4!=0){
                        content+="* ";
                    }else{
                        content+=(i+1)%4==0?"* ":"*";
                    }
                }
                return content+lastFour
            },
            remove(item){
                this.confirmId=item.id;
                this.showBottomModal=true;
            },
            removeOk(){
                console.log(this.confirmId)
            },
            cancel(){
                this.confirmId="";
                this.showBottomModal=false;
            }
        },
        components:{
           jynHeader
        }
    }
    
</script>
<style lang="sass">
    .bankList{
        float:left;
        background:#f0f0f0;
        padding-top:1.8rem;
        width:100%;
        .list_item{
            padding:0.4rem;
            border-radius:0.15rem;
            float:left;
            width:94%;
            margin:0.4rem 3%;
            background:#fff;
            position:relative;
            overflow: hidden;
            .icon{
                float:left;
            }
            img{
                width:2rem;
                height:2rem;
            }
            .content{
                width: auto;
                margin-left: 2.2rem;
                p{
                    color:#666;
                    margin-bottom:0.5rem;
                }
            }
            .selectBg{
                background:#000;
                opacity:0.5;
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
            }
        }
        .bottomModal{
            position:fixed;
            bottom:0;
            left:0;
            width:100%;
            height:3rem;
            background:#000;
            opacity:0.8;
            .button{
                border-radius:0.2rem;
                width:90%;
                text-align:center;
                float:left;
                margin:0.3rem 5% 0;
                background:#eee;
                padding:0.2rem;
            }
            .red.button{
                background:#ff2e2e;
                color:#fff;
            }
        }
    }
</style>