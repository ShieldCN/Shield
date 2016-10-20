<template>
    <div class="register">
        <div class="top">
            <div class="font24 top-title"><img class="fl" src="../assets/images/icon/login.png">
                <p>用户注册</p>
            </div>
            <div class="font12">您还没有绑定账号</div>
        </div>
        <form>
            <div class="content">
                <div class="username fl">
                    <input type="text" id="phonenumber" class="input-required font16" placeholder="请输入您的手机号">
                    <span class="clear fr" style="display: none;"><img src="../assets/images/icon/clear_icon.png"></span>
                </div>
                <div class="username fl">
                    <input type="password" id="phonenumber" class="input-required font16" placeholder="密码">
                    <span class="clear fr" style="display: none;"><img src="../assets/images/icon/clear_icon.png"></span>
                </div>
                <div class="username fl">
                    <input type="password" id="phonenumber" class="input-required font16" placeholder="确认密码">
                    <span class="clear fr" style="display: none;"><img src="../assets/images/icon/clear_icon.png"></span>
                </div>
                <div class="inp fl">
                    <span><input class="identify_code font16 invalid untouched pristine" type="text" placeholder="输入验证码"></span>
                    <span class="fr movepwd font10">获取动态验证码</span>
                </div>
            </div>
        </form>
    </div>
</template>