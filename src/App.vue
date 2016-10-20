<template>
  <div id="app">

    <!-- <div class="dad">
      dadada <i class="fa fa-history"></i>
      <img src="../src/assets/images/demo3qr.png" alt="" />
      <input type="file" accept="image/*" />
    </div> -->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {

}

</script>
<style src="../src/assets/scss/iconfont/font-awesome.css"></style>
<style src="../src/assets/scss/index.scss"></style>
<style lang="sass">
  .header{
    background-color: red
  }
</style>
