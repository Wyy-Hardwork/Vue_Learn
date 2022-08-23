<template>
  <div>
    <img src="./6.png" alt="" style="width: 100%" /><hr>
    <ul class = "nav nav-tabs">
      <li>    <router-link class="list-group-item" active-class="active" to="/home/message"
      >Message</router-link
    ></li>
      <li>    <router-link class="list-group-item" active-class="active" to="/home/news"
      >News</router-link
    ></li>
    </ul>
    <keep-alive :include="['News','Message']">
      <!-- ↑这是多个写法 ,貌似不加:直接加逗号也行-->
    <!-- <keep-alive include="News">  这是一个的写法-->
      <!-- include会让对应name不被销毁,从而实现保留value的目的 -->
      <!-- 这个News是组件的name,没匹配上name是不会保持存活的 -->
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>