<template>
    <div class="personmodify">
        <person-head persontitle="修改个人资料"></person-head>
        <div class="prompt" v-show="unshowed" transition="fade">
            请确保所填内容真实属实，一旦保存不能修改
        </div>
        <div class="modifycont">
            <ol>
                <li class="tx">
                    <label>头像</label>
                    <div class="inp">
                        <img src="../../../assets/images/grcenter/txmodify.png" class="touxiang">
                    </div>
                </li>
                <li>
                    <label>手机</label>
                    <div class="inp">
                        <input type="text" placeholder="请输入手机号" class="disb" v-model="forms.tel">
                    </div>
                </li>
                <li>
                    <label>姓名</label>
                    <div class="inp">
                        <input type="text" placeholder="请输入姓名" class="disb" v-model="forms.user">
                    </div>
                </li>
                <li @click="change">
                    <label>性别</label>
                    <div class="inp">
                    <span class="sexing">{{forms.sexname}}</span>
                        <img src="../../../assets/images/income/rarrow.png" class="arrow">
                    </div>
                </li>
                <li class="bornone">
                    <label>邮箱</label>
                    <div class="inp">
                        <input type="text" placeholder="请输入邮箱" v-model="forms.email">
                    </div>
                </li>
                <li class="bornone msgsuss" v-show="suss">保存成功</li>
                <li class="confirm bornone" @click="confirm">确认</li>
                <li class="msgwarn bornone" v-show="hidden">手机号、姓名、性别、邮箱不能为空</li>
                <li class="msgtel bornone" v-show="visib">请输入正确的手机号、邮箱或姓名</li>
            </ol>
            <div class="sex" v-show="showed" transition='fade' @click="unshow">
                <ul @click.stop="">
                    <li class="choice">选择</li>
                    <li>
                        <label>男</label>
                        <input type="radio" name="sex" value="男" v-model="forms.sexname" class="disb radioval">
                    </li>
                    <li>
                        <label>女</label>
                        <input type="radio" name="sex" value="女" v-model="forms.sexname" class="disb radioval">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import personHeader from '../../../components/personHead.vue'
    export default {
        data () {
            return {
                showed:false,
                unshowed:false,
                hidden:false, 
                visib:false,
                suss:false,
                forms:{
                    tel:'',
                    user:'',
                    sexname:'',
                    email:''
                }
            }
        },
        components:{
            'personHead':personHeader
        },
        methods:{
            change () {
                this.showed= !this.showed
            },
            unshow () {
                this.showed= !this.showed;
            },
            getCode() {
                let checktel=/^1[3|4|5|7|8]\d{9}$/.test(this.forms.tel);
                let checkemail=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.forms.email);
                let checkuser=/^[\u4e00-\u9fa5]{2,4}$/.test(this.forms.user);
                if (!checktel || !checkemail || !checkuser) {
                    this.hidden=true;
                    this.visib=true;
                    setTimeout(()=>{
                        this.hidden=false;
                        this.visib=false
                    },1000);
                   $(".modifycont .disb").removeAttr("disabled",false);
                }else if (checktel & checkemail & checkuser) {
                    this.suss=true;
                    setTimeout(()=>{this.suss=false},800);
                    $(".modifycont .disb").attr('disabled',true);
                }
            },
            confirm () {
                let ftel=this.forms.tel;
                let fuser=this.forms.user;
                let fsexname=this.forms.sexname;
                let femail=this.forms.email;
                if (!ftel || !fuser || !fsexname || !femail) {
                    this.hidden=true;
                    setTimeout(()=>{this.hidden=false},1000);
                    $(".modifycont .disb").focus();
                }else if (ftel!='' & fuser!='' & fsexname!='' & femail!='') {
                    this.getCode();
                    this.hidden=false;
                }
            },
            warning () {
                this.unshowed=true;
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.warning();
                setTimeout(()=>{this.unshowed=false},1500);
            })
        }
    }
</script>


<style scoped>
.personmodify{
    background-color:#eee;
}

.prompt{
    width:100%;
    position:absolute;
    z-index:2;
    top:1.6rem;
    left:0;
    background-color:#fff;
    border:1px solid #eaeaea;
    height:1.4rem;
    color:#c60808;
    font-size:0.48rem;
    line-height:1.4rem;
    text-align:center;
}


.modifycont{
    margin-top:0.64rem;
}
.modifycont ol{
    position:relative;
}
.modifycont ol li{
    overflow:hidden;
    background-color:#fff;
    height:1.5rem;
    border-bottom:1px solid #ddd;
}

.modifycont ol li label{
    margin-left:30px;
    font-size:0.48rem;
    color:#666;
    line-height:1.5rem;
    float:left;
}
.modifycont ol li .inp{
    float:left;
    width:77.5%;
}
.modifycont ol li .inp img.touxiang{
    width:2.7rem;
    height:2.7rem;
    border-radius:50%;
    float:right;
    margin-top:0.4rem;
}
.modifycont ol li .inp img.arrow{
    width:0.27rem;
    height:0.48rem;
    margin-top:0.51rem;
    float:right;
}
.modifycont ol li .inp input{
    font-size:0.48rem;
    line-height:1.5rem;
    text-indent:0.5rem;
}
.modifycont ol li .inp .sexing{
    float:left;
    color:#666;
    display:inline-block;
    text-indent:0.5rem;
    line-height:1.5rem;
    font-size:0.48rem;
}
.modifycont ol li.tx{
    height:3.5rem;
    border-bottom:none;
    margin-bottom:10px;
}
.modifycont ol li.tx label{
    line-height:3.5rem;
}
.modifycont .confirm{
    width:90%;
    margin:1.8rem auto 0;
    text-align:center;
    font-size:0.55rem;
    color:#fff;
    background-color:#ff6a2e;
    border-radius:5px;
    line-height:1.5rem
}
.modifycont .bornone{
    border-bottom:none;
}
.modifycont .msgwarn,.msgtel{
    text-align:center;
    color:#c60808;
    font-size:0.48rem;
}
.modifycont .msgsuss{
    position:absolute;
    left:0;
    right:0;
    margin:0 auto;
    bottom:13%;
    width:2rem;
    height:0.7rem;
    font-size:0.4rem;
    text-align:center;
    background-color:#333;
    line-height:0.7rem;
    color:#fff;
    border-radius:3px;
    box-shadow:2px 2px 3px #4f4f4f;
}
.sex{
    width:100%;
    height:100%;
    position:absolute;
    z-index:10;
    top:0;
    left:0;
    right:0;
    margin:0 auto;
    background:rgba(0,0,0,0.6);
}
.sex ul{
    width:78%;
    height:4.1rem;
    background-color:#fff;
    border-radius:5px;
    margin:5.5rem auto;
}
.sex ul li{
    height:1.3rem;
    border-bottom:1px solid #ddd;
    font-size:0.48rem;
}
.sex ul li:last-child{
    border-bottom:none;
}
.sex ul li label{
    margin-left:0.72rem;
    color:#666;
    line-height:1.3rem;
}
.sex ul li.choice{
    font-size:0.55rem;
    color:#333;
    height:1.4rem;
    text-indent:0.72rem;
    line-height:1.4rem;
}
input:disabled{
    background-color:rgb(255,255,255)
}
.sex li input{
    -webkit-appearance:none;
    vertical-align:top;
    border: 1px solid #ddd;
    display:inline-block;
    width:0.55rem;
    height:0.57rem;
    border-radius:50%;
    float:right;
    position:relative;
    margin-right:0.74rem;
    margin-top:0.375rem;  
}

.sex li input[type='radio']:checked{
    -webkit-appearance:none;
    display:inline-block;
    vertical-align:top;
    width:0.57rem;
    height:0.57rem;
    border-radius:50%;
    border:1px solid #ff6a2e;
    position:relative;
}
.sex li input[type='radio']:checked:after{
    content:'';
    width:0.35rem;
    height:0.35rem;
    position:absolute;
    top:0.09rem;
    left:0.089rem;
    background:#ff6a2e;
    border-radius:50%;
    display:block;
}
.fade-transition{
    transition:all 0.3s ease;
    background:rgba(0,0,0,0.6)
}
.fade-enter,.fade-leave{
    background:rgba(0,0,0,0)
}
</style>