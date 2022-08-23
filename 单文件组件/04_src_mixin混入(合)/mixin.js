//不如说你们都是些分支VC
export const mixin = {
  methods: {
    showme() {
      alert(this.name);
    },
  },
  mounted() {
    console.log('mixin完成了!');
  },
    //我是个散装js,可以用来当砖到处搬(这里我准备给俩VC)
  }

  export const mixin2 = {
    methods: {
      showme2(){
        console.log('我是mixin2,只给学生用!所以我输出一次')
      }
    }
  }

  export const mixin3 = {
    data() {
      return{
        x: 100,
        y: 200//此处实现了给Student传递两个参数,如果有冲突,以本来就有的为主,丢弃掉混合的数据
      }
    }
  }