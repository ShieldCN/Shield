<template>
    <div class="grcenterlist">
        <dl>
            <dt class="icon1"></dt>
            <dd>
                <router-link to="/">我的用户</router-link>
            </dd>
        </dl>
        <dl>
            <dt class="icon2"></dt>
            <dd>
                <router-link to="/">我的账户</router-link>
            </dd>
        </dl>
        <dl>
            <dt class="icon3"></dt>
            <dd>
                <router-link to="/">我的收藏</router-link>
            </dd>
        </dl>
        <dl>
            <dt class="icon4"></dt>
            <dd>
                <router-link to="/">我的消息</router-link>
            </dd>
        </dl>
        <dl>
            <dt class="icon5"></dt>
            <dd>
                <router-link to="/">我的收藏</router-link>
            </dd>
        </dl>
    </div>
</template>

<style scoped>
    .grcenterlist{
        width:92%;
        background-color:#fff;
        margin:20px auto;
        overflow:hidden;
    }
    .grcenterlist dl{
        width:33%;
        float:left;
        border-right:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .grcenterlist dl:nth-child(n+3){
        border-right:none;
    }
    .grcenterlist dl dt{
        width:1.2rem;
        height:1.2rem;
        margin:0 auto;
        background:url('../assets/images/grcenter/allbgs.png');
    }
    .grcenterlist dl dd{
        text-align:center;
        font-size:0.48rem;
        color:#333;
    }
    .grcenterlist dl dd a{
        color:#333;
    }
</style>