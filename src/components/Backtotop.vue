<style>

.top-fixed-btn {
    bottom: 3.125rem;
    z-index: 11;
    background-color: rgba(255, 255, 255, .8);
    text-align: center;
    font-size: 0.375rem;
    color: #666;
    border: 1px solid #c5c5c5;
    line-height: 0.3125rem;
    display: inline;
}

.top-fixed-btn i {
    font-size: 0.5rem;
    color: #666;
    line-height: 0.8125rem;
    width: 100%;
}

.sell-fixed-btn,
.top-fixed-btn {
    width: 1.40625rem;
    height: 1.40625rem;
    right: 0;
    position: fixed;
    border-radius: 50%;
}

</style>

<template>

<a class="top-fixed-btn" v-show="show" @click="goTop">
    <i class="fa fa-arrow-up"></i>
    <br>顶部
</a>

</template>

<script>

export default {
    replace: true,
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.$nextTick(() => {
          setTimeout(()=>{
            $('body').bind('scroll', () => {
                if ($("#app").scrollTop() > 100) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            });
          },0)
        })
    },
    beforeDestory() {
        $("body").unbind('scroll');
    },
    methods: {
        goTop() {
            $("body").scrollTop(0)
        }
    }
}

</script>
