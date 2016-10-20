<style >
.search-list-small ul li .collect-component {
    position: absolute;
    right: 0.3125rem;
    bottom: 0.25rem;
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    text-align: right;
    line-height: 1.875rem;
    z-index: 10;
}
.search-list-small ul li .collect-component i {
    color: #fc3e39;
    font-size: 0.625rem;
}
</style>

<template>

<span class="collect-component" @click="toggleCollection()">
  <i class="fa fa-heart-o" v-show="!item.addedFav"></i>
  <i class="fa fa-heart" v-show="item.addedFav"></i>
</span>

</template>

<script>

export default {
    replace: true,
    props: {
        type: {
            type: String,
            required: true
        },
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleCollection() {
            // let self = this,
            //     no,
            //     paramType;
            // if (!localStorage.token) {
            //     self.$route.router.go({
            //         name: 'login'
            //     });
            //     return false;
            // }
            // // type 类型 0 新车 1 二手车
            // item.addedFav = !item.addedFav;
            // if (type === 'new') {
            //     paramType = '0';
            //     no = item.no
            // }
            // if (type === 'used') {
            //     paramType = '1';
            //     no = item.sourceNo;
            // }
            //
            // this.$http.put(configPath.apiBaseUrl + `favCars/${paramType}/${no}/toggle?r=${Math.random()}`).then(res => {}, e => {
            //     console.error(e)
            // });
            let self = this;
            switch (self.type) {
                case 'newCar':
                    self.$store.dispatch('toggleCollectNewCarCase');
                    break;
                case 'usedCar':
                    self.$store.dispatch('toggleCollectUsedCarSource');
                    break;
                default:

            }
        }
    }
}

</script>
