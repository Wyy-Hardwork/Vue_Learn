<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h1>Banner</h1></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">后退三步</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test(){
      this.$router.go(-3)
    }
  },
  // router封装了前进后退
};
</script>

<style>
</style>