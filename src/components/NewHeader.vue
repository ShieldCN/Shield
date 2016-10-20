<style >
/*顶部*/
.header {
    width: 100%;
    line-height: 1.8rem;
    color: #333;
    height: 1.8rem;
    background: #fff;
    top: 0;
    z-index: 9999;
}
.header .back {
    width: 15%;
    height: 1.4rem;
    line-height: 1.8rem;
    display: inline-block;
    float: left;
    position: relative;
    text-align: center;
}
.header .back i {
  font-size: 0.9375rem;
  vertical-align: middle;
  color: #777;
}
.header .h_label {
    box-sizing: border-box;
    height: 1.8rem;
    width: 70%;
    color: #333;
    font-size:0.5rem;
    display: inline-block;
    max-width: 6.25rem;
    overflow: hidden;
}
.header .headerHome {
    position: absolute;
    width: 15%;
    background: #ff6a2e;
    color: #fff;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    right: 0;
    top: 0.3rem;
    right: 0.5rem;
    padding: 0 0.2rem;
    border-radius: 0.1rem;
}
.header .searchImg{
    height:1.4rem;
    float:right;
}
.header .searchImg img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 0.5rem;
}
.header .input{
    width: 65%;
    float:left;
    position:relative;
}
.input input{
    border:1px solid #ccc;
    width:100%;
    height: 0.5rem;
    border-top: none;
    padding-left: 0.8rem;
    margin-top:0.75rem;
}
.input img{
    position: absolute;
    height: 20px;
    width: 20px;
    top: 0.5rem;
    left: 0.1rem;
}
.header .btn{
    float:right;
    background-color:#ff6a2e;
    margin-right: 0.5rem;
    width: 1.4rem;
    height: 0.7rem;
    margin-top: 0.55rem;
    text-align: center;
    border-radius:5px;
}
.header .btn p{
    line-height:0.7rem;
}
.fl{
    float:left;
}

</style>

<template >

<div class="header" :style="{position:position}" v-if="isShow">
    <a href="javascript:" class="back" v-on:click="back">
      <i class="fa fa-angle-left"></i>
    </a>
    <div class="h_label font16" @click="clearCategories" v-show="titleShow"><p class="fl">{{jynTitle}}</p>
        <!--<a class="headerHome" href="/home" v-show="homePage">首页</a>-->
    </div>
    <div class="input font13" v-show="boxShow">
        <input type="text"  :placeholder="searchTitle" >
        <img src="../assets/images/icon/search.png">
    </div>
    <span class="searchImg" v-show="isSearch" @click="searchBox">
        <img src="../assets/images/icon/search.png">
    </span>
    <span class="btn" v-show="searchMes"><p>搜索</p></span>   
    
</div>
</template>

<script>

export default {
    replace: true,
    props: {
        jynTitle: {
            type: String,
            required: true
        },
        searchTitle:{
            type: String,
            required: true
        },
        backName: {
            type: Object
        },
        isShow:{
          type:Boolean,
          default:true
        },
        // homePage:{
        //     type:Boolean,
        //     default:false
        // },
        isSearch:{
            type:Boolean,
            default:true
        },
        titleShow:{
            type:Boolean,
            default:true
        },
        boxShow:{
            type:Boolean,
            default:false
        },
        searchMes:{
            type:Boolean,
            default:false
        },
        position:{
          type:String,
          default:'fixed'
        },
        clearCategories:{
            type:Function,
            default:function(){}
        },
        searchBox:{
            type:Function,
            default:function(){}
        }
    },
    methods: {
        back() {
            let self = this;
            if (self.backName) {
                console.log(self.backName)
                self.$route.router.go(self.backName);
            } else {
                history.go(-1)
            }
        }

    }
}

</script>

