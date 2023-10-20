import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

// import ElBaseTable from './components/el-base-table/index.vue'
// export default ElBaseTable
