<template>
  <div>
    <h1>当前值为:{{ sum }}</h1>
    <h3>当前值*10为:{{ bigSum }}</h3>
    <h3>我是 {{ $store.state.school }} 学院的学生, {{ student }}</h3>
    <!-- 模板里简写,school是没简写的 -->

    <!-- 这里没有this是因为模板别忘了 -->
    <select v-model.number="n">
      <!-- 让这里的value与data的n绑定 -->
      <option :value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <!-- 不加:是字符串;或者v-model.number -->
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前就和奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";//必要的mapState
export default {
  name: "Category",
  props: [],
  data() {
    return {
      n: 1, //用户选择数字
    };
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
      //这里逻辑简单,省略了actions直接对话mutations
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      if (this.$store.state.sum % 2) {
        //取余,if 0 取假,1真(不0就行)
        this.$store.dispatch("jia", this.n);
        //把dispatch当做$emit就完事
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.$store.dispatch("jia", this.n);
      }, 1000);
    },
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // student() {
    //   return this.$store.state.student;
    // },

  // ...mapState({sum:'sum',school:'school',student:'student'}) (对象写法),

  ...mapState(['sum', 'school', 'student']),//简写形式,用的是数组,mapState的特殊写法(数组写法)
  //...是语法展开,可以让数组或者对象拆成一个个的,你是一个一个,,,啊!


    //     bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    ...mapGetters(['bigSum'])
    //mapGtters的简写,和State的使用手法一样,也有数组和对象写法
  },

  
  mounted() {
    //前data参数,后state参数

    // const x = mapState({sum:'sum',school:'school',student:'student'})
    //console.log(x);
    
    //'sum'转变成了个要return的function,return的还是state同名值(效果见被注释的那些方法),
    //这样免去了computed写一大堆return还要$store.state.sum什么的(写着更简便了);
    //mapState之后的数据就当带参数带了可以在模板里直接写参数名就能得到(computed的参数就是这样,调方法名)
    //es6解构, ...把mapState里的几个参数薅出来,这个x薅出来长得跟被注释那几个一样
    //记得mapState是需要导入的
  },
};
</script>

<style>
.category {
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: aquamarine;
}
</style>