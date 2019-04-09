<template>
  <div class="details container">
    <router-link to='/' class='btn btn-default'>返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
        <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">
                编辑
            </router-link>
            <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">
              删除</button>
        </span>
      </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-earphone"></span>{{customer.phone}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope"></span>{{customer.email}}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-education"></span>{{customer.education}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-home"></span>{{customer.graduationschool}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-pencil"></span>{{customer.profession}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-th"></span>{{customer.profile}}</li>
    </ul>
  </div>
</template>


<script>
import userdata from '.././userdata'
export default {
  name: 'customerdetails',

  data(){
    return{
      customer:''
    }
  },
  methods:{
    fetchCustomers(theId){
       userdata.query.find()
        .then((data)=>{
          //console.log(data)
        //let blogsArray = '';
      // for (let key in data){
      //  //data[key].attributes.content.id=data[key].id;
      // blogsArray.push(data[key].attributes.content)
      // };
          for(let key in data){
            if( data[key].id == theId ){this.customer = data[key].attributes.content;this.customer.id = theId}        
          }
      //this.customer = blogsArray;
          //console.log(this.customer)
        })
    },
    deleteCustomer(theId){
      console.log(theId)
      const r=confirm("确定删除吗？")
                if (r==true)
                userdata.query.find()
                .then((results)=>{
                    for(var i=0;i<results.length;i++){
                    if(results[i].id === theId)
                    results[i].destroy();//使用destroy方法对返回来的数据进行删除
                    }
                    this.$router.push({path:'/',query:{alert:'用户删除成功！'}})
                });

    }
  },
  created(){
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<style>
.btn-primary{
  margin-right: 30px;
}
</style>
