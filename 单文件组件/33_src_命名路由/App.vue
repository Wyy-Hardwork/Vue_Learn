<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始页面跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- route-link代替a,herf改成to(网页栏上名字index中的path) -->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}"
            >About</router-link
          >
          <!-- 上面的guanyu是对象写法 -->
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- <h2>展示什么</h2> -->
            <router-view></router-view>
            <!-- 路由相关标签统一用router开头 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "./components/Banner";
export default {
  components: {Banner},
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
</style>