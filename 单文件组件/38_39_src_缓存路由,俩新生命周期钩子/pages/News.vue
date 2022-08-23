<template>
  <ul>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      x: 0,
      timer : 0
    };
  },
  //keep-aive才有的俩钩子
  activated() {   //页面激活,开始执行 
    this.timer = setInterval(() => {//重复激活interval会越来越快,不知道为什么,总之可能触发重复激活,记得加个clear
      this.x++;
      console.log(this.x);
    }, 700);
  },
  deactivated(){  //页面跳走,页面暂停
    console.log('钩子暂停了');
    clearInterval(this.timer)
  }
};
</script>

<style>
</style>