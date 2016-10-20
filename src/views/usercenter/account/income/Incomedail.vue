<template>
    <div class="incomelist">
        <header>
            <!--<ul>
                <li><em></em></li>
                <li>收入详情</li>
            </ul>-->
            <income-header jyn-title="收入详情" :title-show.sync="titleShow" :box-show.sync="boxShow" :is-search.sync="isSearch" :search-box="searchBox" :search-mes.sync="searchMes"></income-header>
        </header>

        <div class="incomecont" v-for="val in carcont">
            <div class="count">
                <p>{{val.title}}</p>
                <center>{{val.price}}</center>
            </div>
            <div class="hr"></div>
            <div class="carsource">
                <ul>
                    <li>
                        <label>车型：</label>
                        <p>{{val.cartype}}</p>
                        <a href="" class="arrow"></a>
                    </li>
                    <li>
                        <label>车源号：</label>
                        <p>{{val.carid}}</p>
                    </li>
                    <li>
                        <label>售价：</label>
                        <p class="textthro">{{val.caryprice}}万</p>
                    </li>
                    <li>
                        <label>底价：</label>
                        <p>{{val.carsprice}}万</p>
                    </li>
                    <li>
                        <label>用户：</label>
                        <p>{{val.user}}&nbsp;&nbsp;&nbsp;{{val.usertel}}</p>
                        <a href="" class="arrow"></a>
                    </li>
                    <li>
                        <label>时间：</label>
                        <p>{{val.time}}</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                titleShow:true,
                boxShow:false,
                isSearch:true,
                searchMes:false,
                carcont:[
                    {
                        title:'二手车',
                        price:500.00,
                        cartype:'雷克萨斯RL 2016 传奇',
                        carid:'14646461364132',
                        caryprice:27.8,
                        carsprice:27.8,
                        user:'张薇薇',
                        usertel:'188****4265',
                        time:'2016-09-08 14:59:34'
                    }
                ]
            }
        },
        components: {
            "incomeHeader": require('../../../../components/NewHeader.vue')
        },
        methods: {
            searchBox:function(){
                this.titleShow=false;
                this.boxShow=true;
                this.isSearch=false;
                this.searchMes=true
            },
            // getcarsource: function (n) {
            //     let url=Url;
            //     this.$http({
            //         url，
            //         data:{
            //             act:'get',
            //             page:n
            //         }
            //     }).then(function (res) {
            //         var json=res.data;
            //         for(var i=0;i<json.length;i++){
            //             this.carcont.unshif({
            //                 title:json[i].xxx,
            //                 price:json[i].price,
            //                 cartype:json[i].cartype,
            //                 carid:json[i].carid,
            //                 caryprice:json[i].caryprice,
            //                 carsprice:json[i].carsprices,
            //                 user:json[i].user,
            //                 usertel:json[i].usertel,
            //                 time:json[i].time
            //             })
            //         }   
            //     })
            // }
        }
    }
</script>