<template>
  <div class="sc">
    <h2 @click="showme">
      名字: {{ name }} <br /><br />
      地址:{{ address }} <br />
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
import {mixin} from '../mixin'//我是mixin导入!!!,需要打括号才行..?是对象的原因吗
export default {
  name: "School",
  data() {
    return {
      name: "圣三一综合学院",
      address: "基沃托斯北部",
    };
  },
  // methods: {
  //   showme() {
  //     alert(this.name);
  //   },
  // },
  mixins:[mixin]//我是mixin声明!!!
};
</script>

<style>
.sc {
  background-color: rgb(61, 221, 233);
}
</style>