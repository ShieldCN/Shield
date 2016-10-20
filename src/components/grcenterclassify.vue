<template>
    <div class="grcenterclassify">
        <ol>
            <li>
                <em class="car"></em>
                <router-link to="">购车</router-link>
                <i></i>
            </li>
            <li>
                <em class="type"></em>
                <router-link to="">车品</router-link>
                <i></i>
            </li>
            <li>
                <em class="me"></em>
                <router-link to="">我的</router-link>
                <i></i>
            </li>
        </ol>
    </div>
</template>

<style scoped>
    .grcenterclassify{
        width:100%;
        height:1.8rem;
        background:url('../assets/images/grcenter/bg.png');
        background-repeat:x-repeat;
        background-size:cover;
    }
    .grcenterclassify ol{
        overflow:hidden;
    }
    .grcenterclassify ol li{
        float:left;
        width:33%;
    }
    .grcenterclassify em{
        display:block;
        margin:0 auto;
    }
    .grcenterclassify em.car{
        width:1.03rem;
        height:0.74rem;
    }
    .grcenterclassify em.type{
        width:0.96rem;
        height:0.72rem;
    }
    .grcenterclassify em.me{
        width:0.66rem;
        height:0.75rem;
    }
    .grcenterclassify li a{
        text-align:center;
        color:#333;
        font-size:0.4rem;
    }
</style>