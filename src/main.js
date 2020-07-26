import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import VueCookie from 'vue-cookie'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.prototype.qs = qs

Vue.use(VueCookie)

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
