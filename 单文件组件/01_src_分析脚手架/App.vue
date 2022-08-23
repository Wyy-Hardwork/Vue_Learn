<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "../src/components/School.vue";
import Student from "../src/components/Student.vue";

export default {
  name: "App",
  components:{
    School,
    Student
  }
};

//export function xx(){}分别暴露,注意要用对象引入

//export {xx,yy}统一暴露(暴露的是一个对象,引入时也必须是个对象)

//export default{}默认暴露只允许有一个,且主模块引入时可以用定义变量来接受的方式

//import {xx,yy} from './test.js'直接导入

//import{xx as a,yy as b} from './test.js'导入改别名

//import * as aa from './test.js'//导入时用*,因为aa是个对象
// 存在aa.a,aa.b,aa.c

//import aa from './test.js'//aa此时即为导出的内容,因为default单一,所以直接取名
//↑导入用default方式导出的模块
</script>