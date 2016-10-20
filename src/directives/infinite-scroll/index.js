
/* global Vue */
import infiniteScroll from './directive';
import Vue from 'vue';
  Vue.use(install);

function install(Vue) {
  Vue.directive('infiniteScroll', infiniteScroll);
}
