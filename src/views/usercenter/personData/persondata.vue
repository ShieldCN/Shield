<template>
    <div class="personData">
        <person-head :persontitle="titlemsg"></person-head>
        <div class="personcont">
            <ul>
                <li>
                    <label><i><img src="../../../assets/images/grzl/grzl.png" alt=""></i></label>
                    <router-link to='/personmodify'>个人资料</router-link>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
    import personHead from '../../../components/personHead.vue'
    export default {
        data () {
            return {
                titlemsg:'设置'
            }
        },
        components: {
            'personHead': personHead
        }
    }
</script>

<style scoped>
i{
    margin:0;
}
.personData{
    background-color:#eee;
}
.personcont{
    margin-top:0.55rem;
    background-color:#fff;
}
.personcont li{
    height:1.6rem;
    border-bottom:1px solid #ddd;
    overflow:hidden;
    margin:0 30px;
}
.personcont li label,.personcont li a{
    float:left;
}
.personcont li a{
    color:#333;
    font-size:0.55rem;
    line-height:1.6rem;
    margin-left:0.55rem;
}
.personcont li label{
    width:0.74rem;
    height:0.74rem;
    background-color:#ff9d9d;
    border-radius:50%; 
    margin-top:0.43rem;
}
.personcont li label i{
    display:inline-block;
    width:0.44rem;
    height:0.48rem;
    margin-left:0.15rem;
    margin-top:0.13rem;
}
.personcont li label i img{
    width:100%;
}
</style>
