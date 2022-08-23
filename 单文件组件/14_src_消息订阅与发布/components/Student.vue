<template>
  <div class="sc">

    <h2 >
      名字: {{ name }} <br /><br />
      学校:{{ address }} <br />
      <br />
      <button @click="sendStudent">给学校送学生</button>
    </h2>
    <hr />
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
  name: "Student",
  data() {
    return {
      name: "空崎日奈",
      address: "格黑娜",
    };
  },
  methods:{
    sendStudent(){
      // this.$bus.$emit('hina',this.name)
      // //emit跟随事件名和传输数据,emit是触发第一步
      PubSub.publish('hina',666)
    }
  }
};
</script>

<style scoped lang='css'>
.sc {
  background-color: rgb(61, 221, 233);
}
</style>