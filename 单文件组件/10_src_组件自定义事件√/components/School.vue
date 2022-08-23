<template>
  <div class="sc">
    <h2>
      名字: {{ name }} <br /><br />
      地址:{{ address }} <br />
      <button @click="sendSchoolName">点我获取学校名</button>
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
export default {
  props:['getSchoolName',],
  name: "School",
  data() {
    return {
      name: "格黑娜学院",
      address: "基沃托斯北部",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
      //这里用this.getSchoolName的原因不想多说,函数也是需要this调用的啊==
    }
  }
};
</script>

<style scoped>
.sc {
  background-color: rgb(98, 146, 52);
}
</style>