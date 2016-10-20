<style lang="sass">

.error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    div {
        display: table;
        color: white;
        width: 100%;
        height: 100%;
        p {
            position: fixed;
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            width: 80%;
            display: inline-block;
            padding: .45rem .5rem;
            border-radius: .25rem;
            background-color: rgba(0, 0, 0, 0.8);
            margin-left: 10%;
            top: 30%;
            span {
                width: 100%;
                float: left;
                font-size: 18px
            }
        }
    }
}

</style>

<template>

<section class="error" v-show="isShow">
    <div>
        <p><span class="font16" v-for="n in popText">{{n}}</span></p>
    </div>
</section>

</template>

<script>

import isArray from 'lodash.isarray';
/*
 *isError:是够弹出
 */
export default {
    replace: true,
    props: {
        isShow: {
            type: null,
            required: true
        },
        popText: {
            required: true,
        }
    },
    computed: {
        normalizedPopText() {
          let arr = [];
          !isArray(this.popText) ? arr.push(this.popText) : arr = this.popText;
          return arr
        }
    },
    watch: {
        isShow() {
            this.isShow && this.countdown();
        }
    },
    methods: {
        countdown() {
            let self = this;
            self.isShow = true;
            let time = 1500;
            setTimeout(() => {
                self.isShow = false;

            }, time);
        }

    }
}

</script>
