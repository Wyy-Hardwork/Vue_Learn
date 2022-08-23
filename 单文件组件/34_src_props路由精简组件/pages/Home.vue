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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>