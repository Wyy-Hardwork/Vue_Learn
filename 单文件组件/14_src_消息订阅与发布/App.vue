<template>
  <div>
    <h1 v-text="msg"></h1>
    <Student />
    <hr>
    <School />
    <!-- v-bind:名字='值',让其变成js表达式 -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  data() {
    return {
      msg: "欢迎来到基沃托斯",
    };
  },
  components: { Student, School },
  methods: {},
};

//事件总线和这个消息订阅与发布类似,一个是叫$bus,一个是叫 npm i pubsub-js
</script>
<style>
</style>