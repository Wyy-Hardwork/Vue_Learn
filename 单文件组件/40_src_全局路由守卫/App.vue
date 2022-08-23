<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link replace class="list-group-item" active-class="active" :to="{name:'guanyu'}"
            >About</router-link
          >
          <router-link replace class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
          <!-- replace可以让你触发的router-link不被浏览记录察觉(不可回退);其实是替换栈内的历史记录
          导航栏就没必要可回退,可以:replace='true'
          replace会替换掉当前栈值(即没有记录)
          push是默认(追加)
           -->
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