<template>
  <div>
    <h1 v-text="msg" ></h1>
    <Student name='日富美' address = '圣三一' :age = '18'/>
    <!--这里是发送需要的属性,我当做初始数据没问题吧?-->
    <!-- v-bind:属性='值',让其变成表达式 -->
  </div>
</template>

<script>
import Student from "./components/Student";
export default {
  name: "App",
  data(){
    return{
        msg: "欢迎来到基沃托斯",
    }
  },
  components: { Student },
  methods: {
    showDom() {
    }
  },
};

</script>

<style>
</style>