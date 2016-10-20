<style >
/*顶部*/
.header {
    width: 100%;
    line-height: 1.4rem;
    color: #333;
    border-bottom: 1px solid #d8d8d8;
    height: 1.4rem;
    background: #fff;
    top: 0;
    z-index: 9999;
}
.header .back {
    width: 15%;
    height: 1.4rem;
    line-height: 1.4rem;
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
    height: 1.4rem;
    width: 70%;
    text-align: center;
    color: #333;
    float: left;
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
</style>

<template >

<div class="header" :style="{position:position}" v-if="isShow">
    <a href="javascript:" class="back" v-on:click="back">
      <i class="fa fa-angle-left"></i>
    </a>
    <div class="h_label font16" @click="clearCategories">{{jynTitle}}
        <a class="headerHome" v-link="{name:'home'}">首页</a>
    </div>
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
        backName: {
            type: Object
        },
        isShow:{
          type:Boolean,
          default:true
        },
        position:{
          type:String,
          default:'fixed'
        },
        clearCategories:{
            type:Function,
            default:function(){}
        }
    },
    methods: {
        back() {
            let self = this;
            if (self.backName) {
                self.$route.router.go(self.backName);
            } else {
                history.go(-1)
            }
        }

    }
}

</script>
