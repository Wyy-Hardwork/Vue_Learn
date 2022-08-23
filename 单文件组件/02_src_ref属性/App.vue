<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <!-- ref是vue的用于标识标签的 -->
    <button @click="showDom" ref="btn">点我输出上方DOM</button>

    <School ref="sch"/>
    <!-- 这里获得的是School的组件对象vc -->
  </div>
</template>

<script>
//引入School组件
import School from "./components/School";
export default {
  name: "App",
  data(){
    return{
        msg: "欢迎来到基沃托斯",
    }
  },
  components: { School },
  methods: {
    showDom() {
        console.log(this.$refs);//title获取标签,$refs获取实例对象
        //不同于id.getElement只能获取标签,$refs功能更齐全
    }
  }
};

//ref用于给元素或者 子组件 注册引用信息(id的替代者)
//应用在html标签上获取的是真实DOM元素,应用在组件获取的是组件实例对象

//标识方式 同id一样
//获取方式 this.$refs.xxxx
</script>

<style>
</style>