import Vue from 'vue'
import App from './App.vue'
import './index.css'
// import "font-awesome/css/font-awesome.min.css"
// import '@splidejs/splide/dist/css/themes/splide-default.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
