<template>
  <div>
    <h1 style="grey">人员列表--上面的sum互通:{{ sum }}</h1>
    <h3>列表第一人之名: {{ firstPersonName }}</h3>
    <input
      type="text"
      placeholder="请输入名字"
      v-model="name"
      @keyup.enter="add"
    />
    <button @click="add">添加</button>
    <button @click="addx">x开头添加</button>
    <button @click="addServer">金句</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("b/ADD_PERSON", personObj); //这是....commit里面的类似mapState里的写法;
      //b/ADD跟找文件路径很像
      this.name = "";
    },
    addx() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("b/addx", personObj);
      this.name = "";
    },
    addServer() {
      this.$store.dispatch("b/addServer");
    },
  },
  computed: {
    ...mapState("a", ["sum"]),
    ...mapState("b", ["personList"]),
    ...mapGetters("b", ["firstPersonName"]),
  },
  mounted() {
    console.log(this.personList);
  },
};
</script>

<style scoped>
div {
  background-color: bisque;
}
</style>