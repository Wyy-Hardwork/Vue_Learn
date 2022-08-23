<template>
<div>
  <ul>
    <li>编号:{{id}}</li>
    <li>内容:{{title}}</li>
    <!-- query接收参数方 -->

    <!-- index处使用了函数写法,精简了这里的模板 -->
  </ul>
  </div>
</template>

<script>
export default {
name:'Detail',
props:['id','title'],
mounted(){
  console.log(this.$route);
}

}


</script>

<style>

</style>