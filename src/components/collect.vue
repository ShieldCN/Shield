<template>
    <div class="collect">
        <person-head :persontitle="titlemsg"></person-head>
        <div class="tab-title"> 
            <p @click="selected(1)" :class="{active:activename==1}" v-show="activename"><a href="#">新车</a><em></em></p>
            <p @click="selected(2)" :class="{active:activename==2}"><a href="#">二手车</a></p>
        </div>
        <div class="tabs">
            <div class="tab1" :class="{tabactive:activename==1,tabhide:activename==2}">
            <div id="tab1" v-for="item in newcarDatas">
                <dl>
                    <dt>
                        <img :src="item.carimg">
                    </dt>
                    <dd>
                        <span class="name">{{item.carName}}</span>
                        <span class="style">{{item.carStyle}}</span>
                        <span class="year"><em>{{item.carYear}}</em>款</span>
                        <span class="dis">{{item.carDis}}</span>
                        <span class="conf">{{item.carConf}}</span>
                        <span class="type">{{item.carType}}</span>
                        <span class="mark">{{item.carMark}}</span>
                        <span class="fash">{{item.carFash}}</span>
                        <span class="val">{{item.carVal}}</span>  
                        <p class="price">
                            <em>{{item.carPrice}}</em>万
                            <label @click="popoShow">
                                <i></i>
                                <i></i>
                                <i></i>
                            </label>
                        </p> 
                                            
                    </dd>
                </dl>
                <div class="popo" v-show="showed">
                    <ol>
                        <li @click="erweimaShow">
                            <img src="../assets/images/collect/erweima.jpg" class="erweima">
                            <span>二维码</span>
                        </li>
                        <li>
                            <img src="../assets/images/collect/shoucang.png" class="shoucang">
                            <span class="shoucangtxt">已收藏</span>
                        </li>
                        <li>
                            <img src="../assets/images/collect/fenxiang.png" class="fenxiang">
                            <span>分享</span>
                        </li>
                    </ol>
                </div>
                <div class="erweimabig" v-show="weishowed" transition="fade" @click="noshow">
                            <div id="qrcodeCanvas"></div>
                </div>
            </div>
            <div class="nosc" v-show="newcarDatas.length==0">
                    <img src="../assets/images/collect/noshoucang.png">
                    <p>暂无收藏记录</p>
            </div>
            </div>
            
            <div class="tab2" :class="{tabactive:activename==2,tabhide:activename==1}">
            <div id="tab2" v-for="item in usedcarDatas">
                <dl>
                    <dt>
                        <img :src="item.carimg">
                    </dt>
                    <dd>
                        <span class="name">{{item.carName}}</span>
                        <span class="style">{{item.carStyle}}</span>
                        <span class="year"><em>{{item.carYear}}</em>款</span>
                        <span class="dis">{{item.carDis}}</span>
                        <span class="conf">{{item.carConf}}</span>
                        <span class="type">{{item.carType}}</span>
                        <span class="mark">{{item.carMark}}</span>
                        <span class="fash">{{item.carFash}}</span>
                        <span class="val">{{item.carVal}}</span> 
                        <p class="price">
                            <em>{{item.carPrice}}</em>万
                            <label @click="popoShow">
                                <i></i>
                                <i></i>
                                <i></i>
                            </label>
                        </p>                   
                    </dd>
                </dl>
                <div class="popo" v-show="showed">
                        <ol>
                                <li @click="erweimaShow">
                                    <img src="../assets/images/collect/erweima.jpg" class="erweima">
                                    <span>二维码</span>
                                </li>
                                <li>
                                    <img src="../assets/images/collect/shoucang.png" class="shoucang">
                                    <span class="shoucangtxt">已收藏</span>
                                </li>
                                <li>
                                    <img src="../assets/images/collect/fenxiang.png" class="fenxiang">
                                    <span>分享</span>
                                </li>
                        </ol>
                </div>
                <div class="erweimabig" v-show="weishowed" transition="fade" @click="noshow">
                            <div id="code"></div>
                </div>  
            </div>
            <div class="nosc" v-show="usedcarDatas.length==0">
                    <img src="../assets/images/collect/noshoucang.png">
                    <p>暂无收藏记录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import personhead from './personHead.vue'
// import '../libs/jquery.qrcode.min.js'
    export default {
        data () {
            return {
                titlemsg:"我的收藏",
                navs:[
                    {nav: '新车'},
                    {nav: '二手车'}
                ],
                newcarDatas:[
                    {
                        carimg:'../assets/images/collect/car.jpg',
                        carName:'奥迪',
                        carStyle:'A6L',
                        carYear:'2011',
                        carDis:'2.0T',
                        carConf:'自动',
                        carType:'标准型',
                        carMark:'TFSI',
                        carFash:'现代',
                        carVal:'超值',
                        carPrice:32
                    }
                ],
                usedcarDatas:[
                    {
                        carimg:'../assets/images/collect/car.jpg',
                        carName:'奥迪',
                        carStyle:'A6L',
                        carYear:'2011',
                        carDis:'2.0T',
                        carConf:'自动',
                        carType:'标准型',
                        carMark:'TFSI',
                        carFash:'现代',
                        carVal:'超值',
                        carPrice:32
                    }
                ],
                activename: 1,
                showed:false,
                weishowed:false,
                tab2:'tabhide'
            }
        },
        components:{
           'personHead':personhead
        },
        methods: {
            selected: function (list) {
                this.activename=list;
                // var baseurl='http://114.215.118.183:8033/api/v1/';
                //  this.$http({
                //      url:baseurl+'NewCarCases/s/${list}?r=${Math.random()}'
                //  }).then(function (res) {
                //      console.log(res.data)
                //  })
            },
            popoShow: function () {
                this.showed= !this.showed;
                if(this.showed==true){
                    $('body').addClass('adcl');
                }else{
                    $('body').removeClass('adcl');
                };
            },
            erweimaShow: function () {
                this.weishowed= !this.weishowed;
            },
            noshow: function () {
                this.weishowed= false;
            },
            qrcode () {
                $("#code").qrcode({
                    text: "http://www.baidu.com",
                    width:200,
                    height:200
                });
                jQuery('#qrcodeCanvas').qrcode({
                    text: "http://www.baidu.com",
                    width:200,
                    height:200
                });
            }
            // getcarContent: function (list) {
                //   var baseurl='http://114.215.118.183:8033/api/v1/';
                //  this.$http({
                //      url:baseurl+'NewCarCases/s/${list}?r=${Math.random()}'
                //  }).then(function (res) {
                //      console.log(res.data)
                //  })
            // }
        },
        mounted: function () {
            this.$nextTick(function () {
                require ('../libs/jquery.qrcode.min.js');
                this.qrcode();
            })
        }
    }
</script>