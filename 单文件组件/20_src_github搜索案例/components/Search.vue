<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data(){
    return{
      keyWord:''
      //利用v-model让属性和value绑定
    }
  },
  methods: {
    searchUsers() {
      //好久不见啊,es6的模板字符串`${xxx}`

      //请求前初始化list数据
      this.$bus.$emit('updateList',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response =>{
          console.log('成功');
          //成功给出数据
      this.$bus.$emit('updateList',{isLoading:false,errMsg:'',users:response.data.items})
        },
        error =>{
          console.log('错误',error.message);
          //失败给出信息
      this.$bus.$emit('updateList',{isLoading:false,errMsg:error.message,users:[]})

        }
      )
    },
  },
};
</script>

<style>
</style>