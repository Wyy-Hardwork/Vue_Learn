<template>
  <div class="sc">
    <h2 >
      名字: {{ name }} <br /><br />
      学校:{{ address }} <br />
      <input type="text" v-aaabind:value='name'>
      <button @click="hello">点我测试插件hello方法</button>
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "空崎日奈",
      address: "格黑娜",
    };
  },
};
</script>

<style>
.sc {
  background-color: rgb(61, 221, 233);
}
</style>