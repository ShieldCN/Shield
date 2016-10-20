<template>
    <div class="txnav">
        <ul>
            <li>
                <p>9987.54</p>
                <h3 class="tx">
                    <router-link to="/">提现</router-link>
                </h3>
            </li>
            <li>
                <p>20人</p>
                <h3>绑定中</h3>
            </li>
            <li>
                <p class="tjm">123</p>
                <h3>推荐码</h3>
            </li>
            <li @cllick="erweimabig">
                <p><img src="../assets/images/grcenter/erweimaw.png"></p>
                <h3>二维码</h3>
            </li>
        </ul>
    </div>
    <div class="smerweima" v-show="showed">
        <div class="saomiao">
            <h2>二维码</h2>
            <h3>扫描此二维码，注册得<span>大礼包</span></h3>
            <div class="box">
                <img src="../assets/images/grcenter/saomiao.png">
            </div>
            <input type="button" value="关闭">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showed:false
            }
        }
        methods:{
            erweimabig () {
                this.showed= !this.showed
            }
        }
    }
</script>

