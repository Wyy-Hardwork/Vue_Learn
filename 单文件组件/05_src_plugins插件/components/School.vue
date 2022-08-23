<template>
  <div class="sc">
    <h2>
      名字: {{ name }} <br /><br />
      地址:{{ address | mySlice }} <br />
      <br />
    </h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "圣三一综合学院",
      address: "基沃托斯北部",
    };
  },
};
</script>

<style>
.sc {
  background-color: rgb(61, 221, 233);
}
</style>