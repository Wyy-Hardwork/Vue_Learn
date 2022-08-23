<template>
  <div class="sc" @click="showme2">
    <h2 @click="showme">
      名字: {{ name }} <br /><br />
      学校:{{ address }} <br />
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
import {mixin,mixin2,mixin3} from '../mixin'//我是mixin导入!!!,需要打括号才行..?是对象的原因吗
export default {
  name: "Student",
  data() {
    return {
      name: "空崎日奈",
      address: "格黑娜",
    };
  },
  // methods: {
  //   showme() {
  //     alert(this.name);
  //   }
  // },
  mixins:[mixin,mixin2,mixin3]//我是mixin声明!!!
};
</script>

<style>
.sc {
  background-color: rgb(61, 221, 233);
}
</style>