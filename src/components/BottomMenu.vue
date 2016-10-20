<template>
    <!--底部-->
    <div class="bottom">
        <ul>
            <li v-link="{ name: 'home' }">
                <img v-if="type==0" src="../assets/images/icon/index_icon_.png" >
                <img v-else src="../assets/images/icon/index_icon.png" >
                <a class="font10" v-bind:class="{'ffcolor':type==0}">首页</a>
            </li>
            <li v-link="{ name: 'usercenter.collection' }">
                <img v-if="type==1" src="../assets/images/icon/content_icon_.png">
                <img v-else src="../assets/images/icon/content_icon.png">
                <a class="font10" v-bind:class="{'ffcolor':type==1}">收藏</a>
            </li>
            <li v-link="{ name: 'shopCart' }">
                <img v-if="type==2" src="../assets/images/icon/shop_icon_.png">
                <img v-else src="../assets/images/icon/shop_icon.png">
                <a class="font10" v-bind:class="{'ffcolor':type==2}">购物车</a>
            </li>
            <li v-link="{ name: 'usercenter.home' }">
                <img v-if="type==3" src="../assets/images/icon/my_icon_.png">
                <img v-else src="../assets/images/icon/my_icon.png">
                <a class="font10" v-bind:class="{'ffcolor':type==3}">我的</a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    replace: true,
    props:["type"]
}

</script>
