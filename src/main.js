import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './registerServiceWorker'



// import '../node_modules/bootstrap337/dist/js/bootstrap.js'
// import '../node_modules/bootstrap337/dist/css/bootstrap.css'//main.js引入bootstrap无效，html里引入有效

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  store,
  // template:
  //  `
  // <div id="app">
  //     <router-link to="/">Home</router-link>
  //     <router-link to="/about">About</router-link>
  //     <router-view></router-view>   
  // </div>
  // `,
  render: h => h(App)
}).$mount('#app')
