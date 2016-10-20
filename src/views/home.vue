<template>
  <div class="">
  <div class="header">
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="../assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/newcar">新车</router-link>
        <router-link to="/usedcar">二手车</router-link>
        <router-link to="/Incomedail">个人中心</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  <button type="button" name="button" @click="getState">test</button>
    <!--<binding></binding>-->
    <register></register>
  </div>

</template>

<script>
// import Binding from '../components/Binding.vue'
import Register from '../components/Register.vue'

export default {
  name: 'home',
  methods:{
    getState(){
      console.dir(this.$store.state)
    }
  },
  components:{
    // binding:Binding
    register:Register
  }
}
</script>

<style lang="sass">

</style>
