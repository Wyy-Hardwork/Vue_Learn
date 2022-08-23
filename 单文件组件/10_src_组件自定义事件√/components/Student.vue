<template>
  <div class="sc">
    <h2 >
      名字: {{ name }} <br /><br />
      学校:{{ address }} <br /><br>
      测试原生DOM : {{number}} <br>
      <button @click="sendStudentName">点我获取学生名</button>
      <button @click="unbind">解绑hina事件</button>
      <button @click="die">销毁该实例对象</button>
      <button @click="add">测试原生DOM是否存活</button>
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "空崎日奈",
      address: "格黑娜",
      number:0
    };
  },
    methods:{
     add(){
      console.log('原生DOM存活确认');//老师版本的还行,我们的版本原生也噶了
        this.number++
      },
      sendStudentName() {
        //触发student组件实例身上的hina事件
        this.$emit('hina',this.name,666,888,777)
        //看起来这个emit可以把名为hina的小部件,
        //带着数据传给父组件,并且这个数据一定会被$on的方法获得,不需要funtion(值)来获得值了,直接('hina',function)
        //可被监听(挂载便启动v-on)
        //能传递多个参数,但是建议包装为对象

        //emit像个触发器有开关,被启用时候是会被$on察觉到的
        
        this.$emit('hifumi',this.address)
      },
      unbind(){
        this.$off('hina')//解绑一个事件
        // this.$off(['hina','hifumi'])
        console.log('空崎日奈已经解绑!');
        // this.$off()//暴力解法,全解绑
      },
      die(){
        this.$destroy();
      }
    }
};
</script>

<style scoped lang='css'>
.sc {
  background-color: rgb(61, 221, 233);
}
</style>