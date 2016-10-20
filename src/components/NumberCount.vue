<style lang="sass">

.number-count-btn {
    width: 0.5625rem;
    height: 0.5625rem;
    cursor: pointer;
    user-select: none;
}
.cart-num {
    width: 1.796875rem;
    height: 0.59375rem;
    border: 1px solid #bbb;
    margin-top: 1.3rem;
    .btn-min {
        @extend .number-count-btn;
        border-right: 1px solid #bbb;
        background: url(../images/my/btn-min.png) center center no-repeat;
        background-size: 65% 65%;
    }
    .btn-max {
        @extend .number-count-btn;
        border-left: 1px solid #bbb;
        background: url(../images/my/btn-max.png) center center no-repeat;
        background-size: 65% 65%;
    }
    .input-num {
        width: 0.625rem;
        height: 0.5625rem;
        border: none;
        display: block;
        line-height: 0.5625rem;
        text-align: center;
    }
}

</style>

<template>

<div class="cart-num fl" v-if="item.valid">
    <span class="btn-min fl" v-on:click="setMath($index,-1)"></span>
    <input type="text" class="input-num fl" v-on:change="setTotalPrice()" v-model="item.quantity"></input>
    <span class="btn-max fr" v-on:click="setMath($index,1)"></span>
</div>

</template>

<script>

export default {
    replace: true,
    props: ['jynTitle'],
    methods: {
        back() {
            history.go(-1)
        }

    }
}

</script>
