<style lang="sass">

.my-search {
    line-height: 1.25rem;
    color: #222;
    background-color: #ff6a2e;
    border-bottom: 1px solid #e6e6e6;
    width: 100%;
    text-align: center;
    position: relative;
    line-height: 1.25rem;
    input {
        width: 80%;
        border: 0px;
        height: 0.9375rem;
        border-radius: 0.125rem;
    }
    img {
        position: absolute;
        right: 10%;
        top: 0.15625rem;
        height: 0.9375rem;
        width: 0.9375rem;
        position: absolute;
        color: #777;
        font-size: 0.875rem;
    }
}

</style>

<template>

<div class="my-search" v-if="isShow">
    <input type="text" name="name" value="" v-model="searchString">
    <img src="../assets/images/icon/search.png" alt="搜索"  @click="search()"/>
</div>

</template>

<script>

export default {
    replace: true,
    props: {
        isShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            searchString: ''
        }

    },
    methods: {
        search() {
            let self = this;

        }
    }
}

</script>
