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
export default {
  name: "School",
  data() {
    return {
      name: "圣三一综合学院",
      address: "基沃托斯北部",
    };
  },
  mounted() {
    this.$bus.$on('hina',(data)=>{
      console.log('我是学校!我收到了学生: '+data);
      //$on跟随事件名和回调函数(回调函数记得打个括号接收参数)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hina')
  }
};
</script>

<style scoped>
.sc {
  background-color: rgb(98, 146, 52);
}
</style>