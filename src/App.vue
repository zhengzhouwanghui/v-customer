<template>
  <div id="app">
    
    <nav class='navbar navbar-default'>
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">用户管理系统</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">主页</router-link> </li>
            <li><router-link to="/about">关于我们</router-link></li>    
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">添加用户</router-link> </li>   
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <router-view></router-view>
  </div>
  
</template>
<script>
import Customers from './components/Customers.vue'
import About from './components/About.vue'



export default {
  name:'app',
  components:{
    Customers,About
  }
}
</script>

<style lang="scss">

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
