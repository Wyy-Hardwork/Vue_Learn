<template>
  <div class="sc">
    <!-- 有个叫类名冲突的问题,style颜色不一样,但还是汇总成了一样的颜色 -->
    <!-- 顺序看你的引入顺序,而不是div里的使用顺序 -->
    <!-- style加上scoped之后,就只负责自己的作用域了 -->
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
};
</script>

<style scoped>
.sc {
  background-color: rgb(98, 146, 52);
}
</style>