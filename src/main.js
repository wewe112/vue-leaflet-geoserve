import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'
import "leaflet/dist/leaflet.css";
import L from "leaflet";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
