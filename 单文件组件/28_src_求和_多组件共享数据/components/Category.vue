<template>
  <div class='homo'>
    <h1>当前值为:{{ sum }}</h1>
    <h3>当前值*10为:{{ bigSum }}</h3>
    <h3>我是 {{ $store.state.school }} 学院的学生, {{ student }}</h3>
    <h3>组件通讯---现在总人数是: {{personList.length}} </h3>
    <!-- 模板里简写,school是没简写的 -->

    <!-- 这里没有this是因为模板别忘了 -->
    <select v-model.number="n">
      <!-- 让这里的value与data的n绑定 -->
      <option :value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <!-- 不加:是字符串;或者v-model.number -->
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前就和奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <!-- mapActions和mapMutations使用,若需要传递参数,需要在绑定事件内写好value,否则就是默认event -->
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "Category",
  props: [],
  data() {
    return {
      n: 1, //用户选择数字
    };
  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    //   //这里逻辑简单,省略了actions直接对话mutations
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    ...mapMutations({increment:'JIA',decrement:'JIAN'}), //(对象写法),也有数组写法
    //mutations寻找JIA,JIAN函数.传递参数要在模板中进行(看模板上)
    //不同于state和getters,actions和mutations都有外部传入的value
    //效果一样,都是协助生成对应方法

    // *********************************************************
    // incrementOdd() {
    //   if (this.$store.state.sum % 2) {
    //     //取余,if 0 取假,1真(不0就行)
    //     this.$store.dispatch("jia", this.n);
    //     //把dispatch当做$emit就完事
    //   }
    // },
    // incrementWait() {
    //   setTimeout(() => {
    //     this.$store.dispatch("jia", this.n);
    //   }, 1000);
    // },
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaTime'})
    //dispatch分部
  },
  computed: {

  ...mapState(['sum', 'school', 'student','personList']),

  ...mapGetters(['bigSum'])
  },

  
  mounted() {

  },
};
</script>

<style scoped>
.homo {
  background-color: skyblue;
}

</style>