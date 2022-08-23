<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" @funk="funk" />
        <!-- 这里尝试自定义事件addToDo -->
        <!-- 第一个addTodo是自定义事件名,第二个addTodo是methods里的用于回调的函数 -->
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      play: "我是App的东西,小子!",
      todos: [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "开车", done: true },
      ],
    };
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      //addTodo作为回调函数,是需要写形参的,不然我emit传个寂寞啊?
      this.todos.unshift(todoObj);
    },
    //勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        //forEach()没有返回值(return无用,且a=arr.forEach()中,a也是undefined)
        //forEach(a,b)中 a 是处于遍历状态下的当前元素,b 是下标;一般和箭头函数混用,毕竟要给每个元素实现函数功能

        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      //filter内必有函数,其中形参名代表即将return出来的对象/数组名字;另外一句话的return在箭头函数可省略;
      //单形参可去括号
      //filter不会改变原数组,所以要等一个改变原数组
      //xtodo是实参==
      this.todos = this.todos.filter((xtodo) => xtodo.id !== id);
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
        //filter会把true值元素组成新数组
      });
    },
    //由编辑改变
    updateTodo(id, titles) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = titles;
      });
    },
    funk(ohyeah) {
      alert("子传父成功了!值为:" + ohyeah);
      console.log(this);
      console.log(this.todo);
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("deleteTodo");
    this.$bus.$off("updateTodo");
  },
};
//在Vue网页插件里面,组件里面是<Root>的就是牵扯时间总线的
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #3982ee;
  border: 1px solid #1b447a;
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: #1b447a;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
