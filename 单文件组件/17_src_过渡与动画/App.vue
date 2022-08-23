<template>
  <div>
    <Test />
    <Test2 />
    <Test3 />
  </div>
</template>

<script>
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";

export default {
  name: "App",
  components: { Test,Test2,Test3 },
};
//在Vue网页插件里面,组件里面是<Root>的就是牵扯时间总线的
</script>

<style>

</style>
