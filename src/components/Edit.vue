<template>
  <div class="edit container">
      <alert v-if="alert" v-bind:message='alert'></alert>
    <h1 class='page-header'>编辑用户</h1>
    <form v-on:submit='updateCustomer'>
        <div class="well">
            <h4>用户信息</h4>
            <div class="form-group">
                <label for="">姓名</label>
                <input type="text" class="form-control" placeholder="name" v-model="customer.name">
            </div>
            <div class="form-group">
                <label for="">电话</label>
                <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
            </div>
            <div class="form-group">
                <label for="">邮箱</label>
                <input type="text" class="form-control" placeholder="email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label for="">学历</label>
                <input type="text" class="form-control" placeholder="学历" v-model="customer.education">
            </div>
            <div class="form-group">
                <label for="">毕业学校</label>
                <input type="text" class="form-control" placeholder="毕业学校" v-model="customer.graduationschool">
            </div>
            <div class="form-group">
                <label for="">职业</label>
                <input type="text" class="form-control" placeholder="职业" v-model="customer.profession">
            </div>
            <div class="form-group">
                <label for="">个人简介</label>
                <textarea class="form-control" name="" id="" rows="10" placeholder="个人简介" v-model="customer.profile"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">确认修改</button>
        </div>
    </form>
  </div>
</template>


<script>
import userdata from '.././userdata'
import Alert from './Alert'
export default {
  name: 'edit',

  data(){
    return{
      customer:{},
      alert:''
    }
  },
  methods:{
      fetchCustomers(theId){
       userdata.query.find()
        .then((data)=>{
          for(let key in data){
            if( data[key].id == theId ){
                this.customer = data[key].attributes.content;
                this.customer.id = theId
                }        
          };
          //console.log(this.customer)
        })
    },
      updateCustomer(e){
          if(!this.customer.name || !this.customer.phone ||!this.customer.email){
              this.alert = '请添加对应信息!';
          }else{
              let updateCustomer = {
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  education:this.customer.education,
                  graduationschool:this.customer.graduationschool,
                  profession:this.customer.profession,
                  profile:this.customer.profile
              }
                console.log(this.$route.params.id)
                userdata.testData.id = this.$route.params.id;
                userdata.testData.set('content',this.customer).save()
                .then(()=>{
                    this.$router.push({path:'/',query:{alert:"用户信息更新成功!"}})
                })

            //   userdata.testData.save({content:updateCustomer})
            //     .then((data)=>{
            //         //alert('添加成功');
            //         this.$router.push({path:'/',query:{alert:"用户信息添加成功!"}})
            //     })
                e.preventDefault();
          }
          e.preventDefault();
      }
  },
  created(){
      this.fetchCustomers(this.$route.params.id);
  },
  components:{
      Alert
  }
}
</script>