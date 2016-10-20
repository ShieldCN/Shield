require('es6-promise').polyfill()
import FastClick from 'fastclick';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload'
import WebpLoad from './directives/webp-load/webp-load';
import { app, store,router } from './app'

Vue.use(VueResource);
Vue.use(VueLazyload, {
    preload: 1.3,
    error: require('./assets/images/error/600x600.jpg'),
    loading: require('./assets/images/error/600x600.jpg'),
    try: 3
});
Vue.use(WebpLoad);
router.beforeEach((to, from, next) => {
    //快速点击处理
    FastClick.attach(document.body);
    if (to.auth) {
        if (localStorage.token) {
            next();
        } else {
            var redirect = encodeURIComponent(to.path);
            next({ path: '/login?redirect=' + redirect })
        }
    } else {
        next();
    }
});
// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)
// actually mount to DOM
app.$mount('#app')
