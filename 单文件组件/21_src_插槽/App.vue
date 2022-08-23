<template>
  <div class="container">
    <Category title='美食' :listData='foods'>
      <img src="./3.png" alt="我图图呢">
    </Category>
    <Category title='游戏' :listData='games'>
      <img src="./2.png" alt="我图图呢">
    </Category>
    <Category title='电影' :listData='film'>
      <img src="./4.png" alt="我图图呢">
    </Category>
  </div>

  <!-- slot name='具名插槽',标签的门牌号 -->
  <!-- 填坑时候对应标签slot='具名插槽';
  或者template > v-slot:名字,必须搭配template不可以div -->
</template>
<script>
import Category from "./components/Category";
export default {
  components: {Category},
  name: "App",
  data(){
    return {
      foods:['日奈','日富美','小春','梓'],
      games:['爆发','贯穿','神秘','攻城'],
      film:['《伊甸条约》','《游戏部》','《阿拜多斯复兴记》','《新春狂想曲》']
    }
  }
};
</script>
<style>
  .container {
    display: flex;
    justify-content: space-around;
  }

  img{
  width: 200px;
}
</style>