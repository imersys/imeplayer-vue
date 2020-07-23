import Vue from 'vue';
import VueVrPlayer from 'vue-vrplayer';
import App from './App';

Vue.use(VueVrPlayer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
