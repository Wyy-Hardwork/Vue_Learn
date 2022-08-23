<template>
  <div>
    <h1>当前值为:{{sum}}</h1>
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
export default {
  name: "Category",
  props: [],
  data() {
    return {
      n: 1, //用户选择数字
      sum: 0, //当前和
    };
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if(this.sum%2){//取余,if 0 取假,1真(不0就行)
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(()=>{
        this.sum += this.n
      },1000)
    },
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