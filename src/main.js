import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router';

Vue.use(VueResource);
Vue.config.productionTip = false
Vue.config.courses = require('./assets/fag.json');
Vue.config.last = '';

new Vue({
  data: {
    courses: require('./assets/fag.json'),
  },
  router,
  render: h => h(App)
}).$mount('#app')
