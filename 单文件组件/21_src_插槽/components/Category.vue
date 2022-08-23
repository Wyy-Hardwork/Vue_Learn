<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <slot>没有具体结构,我会出现,你当img的alt</slot>
    <!-- slot挖个坑,等标签里面内容填 -->

  <!-- slot :game='games',把父组件的data里的games参数,传给这个插槽的使用者(作用域问题)
  但是得包裹一层 template scope
  而且数据在子组件中.你要做的是在App里遍历Category,数据得从Category拿

  在父组件 Category > template(必须) slot-scope='scopeData' > v-for g in scopeData.games
  在子组件 data里面有个return,再有个games
   -->

  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: aquamarine;
}

</style>