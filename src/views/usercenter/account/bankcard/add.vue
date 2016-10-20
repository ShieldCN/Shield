<template>
    <div class="bankAdd">
        <jyn-header jyn-title="添加新卡"></jyn-header>
        <p class="prompt font14">请绑定持卡人本人的银行卡</p>
        <div class="content">
            <div class="font16">
                <label>持卡人</label><input />
            </div>
            <hr>
            <div class="font16">
                <label class="text3">卡号</label><input />
            </div>
        </div>


    </div>
</template>
<script>
    import errorImg from '../../../../assets/images/error/218x218.jpg';
    export default{
        data(){
            return {
                cardList:[
                    {
                        img:'test.jpg',
                        name:'中国银行',
                        type:'储蓄卡',
                        no:'5566556655665566'
                    }
                ]
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
            }
        },
        components:{
            "jynHeader": require('../../../../components/Header.vue'),
        }
    }
    
</script>
<style lang="sass">
    .bankAdd{
        float:left;
        background:#f0f0f0;
        padding-top:1.8rem;
        width:100%;
        .prompt{
            padding:0.2rem 0.4rem;
            color:#ccc;
        }
        .content{
            padding:0.4rem;
            float:left;
            width:100%;
            background:#fff;
            div{
                margin:0.3rem 0;
                label{
                    width:4em;
                }
                .text3{
                    
                }
                input{
                    border:0;
                }
                
            }
            hr{
                height:1px;
                background:#ccc;
            }

        }
    }
</style>