<template>
    <li >
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        :value="todo.title"
        v-show="todo.isEdit"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>

</template>

<script>
export default {
  name: "MyItem",
  //声明接收todo
  props: ["todo"],
  data() {
    return { test: true };
  },
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
    //编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
        //这样的写法才是响应式
        //名字(data里的东西,键值),要添加到属性名,要添加的属性值
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
      //vue中这样可以通过ref获取DOM,这样也方便操作DOM的方法访问,省的定义变量
      //因为v-show隐藏原因,没办法获取焦点了,这里用到api的$nextTick
      //这个api可以让里面的回调函数,在DOM解析完后再插入.(不然我就用setTimeout了)
      //*当数据改变后,要基于更新后DOM进行某些操作时,要在nextTick指定的回调函数中执行
      //为什么?别忘记是script里的东西算完才开始解析template里的东西;这时候v-show还没动呢
      //简单点来讲就是,script完后解析template,再给nextTick额外一次script机会,再给template
    },
    //失去焦点做的事
    handleBlur(todo, e) {
      this.todo.isEdit = false;
      if (!e.target.value.trim()) alert("输入不能为空");
      //trim之后的元素,如果不是空就返回true;你要是为false,证明你是trim后是空字符串
      //这里检测到trim后为空,给出false;然后!false到true,输出了alert语句

      //失去焦点回调
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
      //todo.id和e.target.value将可以用形参接收,记得接好我们~
    },

    look() {
      this.test = true;
      console.log(this.test);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  /* 只对li下最后一个<p></p>(h1之类的标签范围)内生效生效 */
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

</style>