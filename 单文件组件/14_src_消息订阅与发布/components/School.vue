<template>
  <div class="sc">
    <h2>
      名字: {{ name }} <br /><br />
      地址:{{ address }} <br />
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name: "圣三一综合学院",
      address: "基沃托斯北部",
    };
  },
  mounted() {
    // this.$bus.$on('hina',(data)=>{
    //   console.log('我是学校!我收到了学生: '+data);
    //   //$on跟随事件名和回调函数(回调函数记得打个括号接收参数)
    // })
    this.pubID = pubsub.subscribe('hina',(ok,b)=> {
      console.log('收到了学生!'+ok+'  '+b);
      //这个ok居然是hina,事件的名字 ,b才是传来的参数
      console.log(this);
      //这个库的this是undefined...所以也要用箭头函数
    })
  },
  beforeDestroy(){
    // this.$bus.$off('hina')
    pubsub.unsubscribe(this.pubID)
    //取消订阅还得用个id?我不想用你
  }
};
</script>

<style scoped>
.sc {
  background-color: rgb(98, 146, 52);
}
</style>