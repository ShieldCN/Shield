<template>
    <div class="header">
        <div class="shield-icon">
            <div class="shield-top"></div>
            <div class="shield-center"></div>
            <div class="shield-down"></div>
        </div>
        <a href="sms:10086?body=cxye">测试</a>
        <div class="secretBg" v-show="openSecret">
            {{secret}}
        </div>
    </div>
</template>
<script>
export default {
    replace: true,
    data(){
        return {
            user:"",
            config:null,
            mgr:null,
            secret:"",
            openSecret:false,
            token:"mukun"
        }
    },
    mounted(){
        this.$nextTick(function () {// 保证 this.$el 已经插入文档
            var self=this;
            document.onkeydown=function(event){
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if(e){
                    if(e.keyCode==192){
                        self.openSecret=true;
                    }else if(self.openSecret){
                        if(e.key=='Enter'){
                            if(self.secret===self.token){
                                alert('bingo')
                            }
                            self.openSecret=false;
                            self.secret="";
                        }else if(e.keyCode==32){
                            self.secret+=" ";
                        }else if(e.key=='Backspace'){
                            self.secret=self.secret.substring(0,self.secret.length-1)
                        }else if(e.key=='Escape'){
                            self.openSecret=false;
                            self.secret="";
                        }else if((e.keyCode<=90&&e.keyCode>=65)||(e.keyCode<=57&&e.keyCode>=48)){
                            self.secret+=e.key;
                        }
                    }
                }
            }; 
        })
    },
    methods:{
    }
}

</script>
<style lang="sass">
    .header{
        height:1.4rem;
        border-bottom:1px solid #eee;
        padding:0.2rem;
        .shield-icon{
            .shield-down {
                width: 0;
                height: 0;
                border-left: 0.4rem solid transparent;
                border-right: 0.4rem solid transparent;
                border-top: 0.2rem solid #eee;
            }
            .shield-top{
                background:#eee;
                height: 0.3rem;
                width: 0.77rem;
                border-radius: 0.6rem 0.6rem 0 0;
            }
            .shield-center{
                width: 0.77rem;
                height: 0.4rem;
                background:#eee;
            }
        }
    }
    .secretBg{
        position:fixed;
        top:0;
        right:0;
        width:100%;
        height:100%;
        background:#ccc;
        opacity:0.7;
        text-align:center;
        color:#fff;
    }
</style>