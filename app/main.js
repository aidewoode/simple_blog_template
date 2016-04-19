import 'normalize.css';
import './css/index.css';

// typography style, from https://github.com/lepture/yue.css.
// But I do a little change in this stylesheet.
import './css/yue.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import mixin from './mixin';
import filters from './filters';
import routers from './routers';

Vue.use(VueRouter);

let router = new VueRouter();

mixin(Vue);
filters(Vue);
routers(router);

router.start(App, '#js-app');
