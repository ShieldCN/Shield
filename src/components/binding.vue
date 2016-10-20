
<template>
<div class="binding">
    <div class="top">
        <div class="font24 top-title"><img class="fl" src="../assets/images/icon/login.png"><p>汽车经纪人</p></div>
        <div class="font12">您还没有绑定账号</div>
    </div>
    <form>
        <div class="content">
            <div class="username fl">
                <div class="label fl"><img src="../assets/images/icon/name_icon.png"></div>
                <div class="username_right fl">
                    <input type="text" class="input-required font16" placeholder="手机号/用户名" id="username">
                    <span class="clear fr"><img src="../assets/images/my/clear_icon.png"></span>
                </div>
            </div>
            <div class="username fl">
                <div class="label fl"><img src="../assets/images/icon/password_icon.png"></div>
                <div class="username_rightpwd fl">
                    <input type="password" class="input-requiredpwd font16" placeholder="密码" id="password">
                    <span class="clearpwd fl"><img src="../assets/images/icon/clear_icon.png"></span>
                    <a class="change-show fr">
                        <img src="../assets/images/icon/pw_hide_icon.png">
                    </a>
                </div>
            </div>
            <div class="bind-btn fl">立即绑定</div>
        </div>
    </form>
</div>

</template>
