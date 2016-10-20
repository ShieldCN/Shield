<template>
       <header>
            <ul>
                <li>
                    <a href="javascript:0" @click="goback">
                        <em></em>
                    </a>
                </li>
                <li>{{persontitle}}</li>
            </ul>
        </header>
</template>

<script>
    export default {
        props:{
            persontitle:{
                type:String,
                required:true
            }
        },
        methods: {
           goback: function () {
               history.go(-1);
           } 
        }
    }
</script>

<style scoped>
header {
    height:1.6rem;
    background-color:#fff;
}
header ul li{
    float:left;
    font-size:0.55rem;
    line-height:1.6rem;
    color:#333;
}
header li em{
    display:inline-block;
    width:0.37rem;
    height:0.59rem;
    background:url('../assets/images/collect/fh.png');
    background-size:100%;
    vertical-align:middle;
    margin-left:30px;
    margin-right:0.59rem;
}
</style>