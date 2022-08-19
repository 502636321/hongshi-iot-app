import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'

import router from "@/router";
import { VueAxios } from '@/api/request'
import BaiduMap from 'vue-baidu-map'

import ECharts from 'vue-echarts';
import "echarts";

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueAxios)
Vue.use(BaiduMap, {
  ak: 'Hv0QBs6rHqcZ40tK07eTlrUDvlDo5K4f'
})

Vue.component('v-chart', ECharts)

new Vue({
  router,
  ECharts,
  render: h => h(App),
}).$mount('#app')
