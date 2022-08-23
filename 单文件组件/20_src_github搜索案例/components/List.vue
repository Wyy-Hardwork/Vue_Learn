<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <!-- v-show为0或者false会隐藏 -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 170px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用!</h1>
    <!-- 展示加载图 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updateList", (dataObj) => {
      //回调函数这样写,仅仅起到了传参的作用
      console.log("list收到了数据--", dataObj);
      this.info = {...this.info,...dataObj};
      //这个花括号是es6语法,后面对象会覆盖在前面对象上,避免丢值
      //这里的dataObj后面会缺少isFirst,如此就不会缺少了
      //而且可以无视参数顺序
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>