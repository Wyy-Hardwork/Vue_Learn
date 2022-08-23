<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由,并携带query参数,to的字符串写法 -->
        <router-link  :to="`/home/message/detail/?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
        <!-- 占位符写法↑,这样会传出params数据,接收方记得用$route.params -->



      <!-- 不知道为什么message下的超链接点了会消失!是不是axios的原因呢! -->



        <!-- 固定格式下,``内是模板字符串,但是${}依然还是正常js语句,两者混搭 -->
        <!-- 看起来to的路径是看字符串的 -->

      </li>
    </ul> 
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import axios from "axios";
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: nanoid(), title: "" },
        { id: nanoid(), title: "" },
        { id: nanoid(), title: "" },
      ],
    };
  },
  created() {
    axios.get("https://v1.hitokoto.cn").then(
      (response) => {
        this.messageList[0].title = response.data.hitokoto;
        this.messageList[1].title = response.data.hitokoto;
        this.messageList[2].title = response.data.hitokoto;
      },
      (error) => {
        console.log(error.message);
      }
    );
  },
};
</script>

<style>
</style>