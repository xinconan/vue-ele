// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';

import 'common/scss/icon.css';
// require('common/scss/icon.scss');

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings }
];

const router = new VueRouter({
  linkActiveClass: 'active', // 设置 链接激活时使用的 CSS 类名
  routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
