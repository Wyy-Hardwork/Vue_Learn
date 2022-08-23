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
</script>
<style>
</style>