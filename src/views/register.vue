<template>
    <div class="binding">
        <div class="top" style="margin-top:101px;margin-bottom:30px">
            <div class="font24 top-title"><img class="fl" src="../assets/images/icon/login.png"><p>用户注册</p></div>
            <div class="font12">您还没有绑定账号</div>
        </div>
        <form>
            <div class="content">
                <div class="username fl">
                    <!--<div class="label fl"><img src="images/icon/name_icon.png"></div>-->
                    <input type="text" class="input-required font16 mfl" placeholder="请输入您的手机号" id="username">
                    <span class="clear fr"><img src="../assets/images/my/clear_icon.png"></span>
                </div>
                <div class="username fl">
                    <input type="password" class="input-requiredpwd font16 mfl" placeholder="密码" id="password">
                    <!--<span class="clearpwd fl"><img src="../assets/images/my/clear_icon.png"></span>清空密码-->
                    <a class="change-show fr">
                        <!--<img src="../assets/images/my/pw_show_icon.png">显示密码-->
                        <img src="../assets/images/my/pw_hide_icon.png">
                    </a>
                </div>
                <div class="username fl">
                    <input type="password" class="input-requiredpwd font16 mfl" placeholder="确认密码" id="cpassword">
                    <span class="clearcpwd fr"><img src="../assets/images/my/clear_icon.png"></span>
                </div>
                <div class="code fl">
                    <span>
                        <input class="identify_code fl" type="text" placeholder="请输入验证码">
                    </span>
                    <span class="movecode fr" >获取验证码</span>
                </div>
                <div style="line-height:1.328125rem">阅读并接受《就依你用户协议》</div>
                <div class="bind-btn fl font16">立即绑定</div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  name: 'register'
}
</script>

<style lang="sass">

</style>
