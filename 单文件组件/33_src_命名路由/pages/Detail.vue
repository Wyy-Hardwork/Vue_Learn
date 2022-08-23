<template>
<div>
  <ul>
    <li>编号:{{$route.query.id}}</li>
    <li>内容:{{$route.query.title}}</li>
    <!-- query接收参数方 -->
  </ul>
  </div>
</template>

<script>
export default {
name:'Detail',
mounted(){
  console.log(this.$route);
}
}

</script>

<style>

</style>