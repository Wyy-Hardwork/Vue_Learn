<template>
  <div class="sc">
    <!-- 有个叫类名冲突的问题,style颜色不一样,但还是汇总成了一样的颜色 -->
    <!-- 顺序看你的引入顺序,而不是div里的使用顺序 -->
    <!-- 加上scoped之后,就只负责自己的作用域了 -->

    <h2 >
      名字: {{ name }} <br /><br />
      学校:{{ address }} <br />
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
    };
  },
};
</script>

<style scoped lang='css'>
/* lang用来标记你用什么语言写的,我这个用css,还有less之类的,不写默认css */
.sc {
  background-color: rgb(61, 221, 233);
}
</style>