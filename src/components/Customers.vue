<template>
  <div class="customers container">
    <alert v-if="alert" v-bind:message='alert'></alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>学历</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='customer in filterBy(customers,filterInput)'  v-bind:key= 'customer.id'>
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>{{customer.education}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/details/'+customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import userdata from '.././userdata'
import Alert from './Alert'
export default {
  name: 'customers',

  data(){
    return{
      customers:[],
      alert:'',
      filterInput:''
    }
  },
  methods:{
    fetchCustomers(){
       userdata.query.find()
     .then((data)=>{
      //console.log(data)
       let blogsArray = [];
      for (let key in data){
       data[key].attributes.content.id=data[key].id;
      blogsArray.push(data[key].attributes.content)
      };
      this.customers = blogsArray;
      //console.log(this.customers)
      })
    },
    filterBy(customers,value){
      return customers.filter(function(customer){
          return customer.name.match(value);
      })
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers();
  },
  updated(){
    //this.fetchCustomers();//learncloud请求数量限制，先注释掉
  },
  components:{
    Alert
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
