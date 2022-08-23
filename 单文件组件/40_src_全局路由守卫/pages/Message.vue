<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由,并携带query参数,to的字符串写法 -->
        <router-link
          :to="`/home/message/detail/?id=${m.id}&title=${m.title}`"
          >{{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push/跳转页面</button>
        <!-- 模板里的数据没进data,直接读是读不到的,你得把它放进括号里,像回调一样用 -->
        <button @click="replaceShow(m)">replace</button>
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
  methods: {
    pushShow(m) {
      console.log(
        this.$router.push({//这倒不像跳转,更像是替换,毕竟都带参数了,是个新的
          name: "xiangguan",
          query: {
            id: m.id,
            title: m.title,
          },
        })
      );
      console.log(this.$router);
    },
    replaceShow(m) {
      console.log(
        this.$router.replace({
          name: "xiangguan",
          query: {
            id: m.id,
            title: m.title,
          },
        })
      );
    },
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