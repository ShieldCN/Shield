<template>
    <div class="header">
        <div class="shield-icon">
            <div class="shield-top"></div>
            <div class="shield-center"></div>
            <div class="shield-down"></div>
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
                        if(self.token.indexOf(e.key)>-1){
                            self.secret+=e.key;
                        }else{
                            this.openSecret=false;
                            this.secret="";
                        }
                    }
                }
            }; 
        })
    },
    watch:{
        secret(){
            if(!this.secret||this.token.indexOf(this.secret)==-1){
                this.openSecret=false;
                this.secret=""
            }else if(this.secret===this.token){
                alert('bingo')
            }
        }
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
</style>