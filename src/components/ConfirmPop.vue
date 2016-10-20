<style lang="sass">

.fullScreen {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    .pop_block {
        width: 84.4%;
        position: absolute;
        left: 7.8%;
        top: 40%;
        background-color: #F6F6F6;
        border-radius: 0.15625rem;
        .delFlag {
            height: auto;
        }
        .pop_title {
            color: #323232;
            text-align: center;
            padding-top: 0.3125rem;
        }
        .pop_text {
            line-height: 0.546875rem;
            height: 0.546875rem;
            text-align: center;
            color: #646464;
            margin: 0.15625rem 0;
        }
        .ad_action {
            margin: 0;
            span {
                width: 50%;
                color: #464646;
                border: 1px solid #dcdcdc;
                border-bottom: 0;
                border-left: 0;
                display: block;
                text-align: center;
                line-height: 1.09375rem;
                float: left;
                box-sizing: border-box;
            }
        }
    }
}

</style>

<template>

<div class="fullScreen" v-show="isShow">
    <div class="pop_block">
        <div class="delFlag">
            <p class="pop_title font16">{{popTitle}}</p>
            <p class="pop_text font12">{{popText}}</p>
        </div>
        <div class="ad_action font16">
            <span class="del_operate" @click="ok">确定</span>
            <span class="operate" @click="cancel">取消</span>
        </div>
    </div>
</div>

</template>

<script>

/*
 *popTitle:弹出框标题
 *popText:弹出框内容
 *isPop:是否弹出
 *okFn:点击确认后的回调函数
 */
export default {
    replace: true,
    props: ['popTitle', 'popText', 'isShow', 'okFn'],
    methods: {
        ok() {
                let self = this;
                self.isShow = false;
                self.okFn()
            },
            cancel() {
                let self = this;
                self.isShow = false;
            }
    }
}

</script>
