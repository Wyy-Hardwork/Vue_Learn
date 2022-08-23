<template>
  <div>
    <h1>{{msg}}{{studentName}}</h1>
    <!-- <Student @hina.once="getStudentName"/>自定义事件子传父,v-on:简写@ 写法A-->
    <!-- 写这个<student />标签,vue会帮你自动new一个vc -->
    <!-- once概念别忘了 -->
    <hr>
    <School :getSchoolName="getSchoolName" /><!--props实现:子给父传递数据-->
    
    <Student ref = 'student' @click.native="show"/>
    <!-- 自定义事件子传父, 写法B -->

    <!-- ref 加在子组件上，用this.$refs.'ref名' 获取到的是组件实例vc(Student)，
    可以使用组件的所有方法。
    在使用方法的时候直接this.$refs.'ref名'.方法（） 就可以使用了。 -->
    <!-- 这玩意主要是为了让你跨组件用别的vc -->

    <!-- 原生DOM如click在自定义标签里,都会失效;想要生效请加native,听说vue3取消了== -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  data() {
    return {
      msg: "欢迎来到基沃托斯,老师!我是",
      studentName:''
    };
  },
  components: { Student, School },
  methods: {
    getSchoolName(name){
      console.log('App收到了学校名 :'+name);
    },
    getStudentName(name,...a){
      console.log('App收到了学生名 :'+name,a);
        //es6的...a,这样是把this.name之后的数据全合并入a(一般命名params)数组中
        this.studentName = name
    },
    show(){
      alert('我是藏在student里的原生DOM click!');
    }
  },
    mounted(){//因为ref需要在dom渲染完成才会有,所以只能在挂载后使用,并且是非响应式
    //$on用来触发$emit送过来的带参数的事件hina(地址是vc的),并将参数注入后方的函数形参
    //我擦,这里的this.getStudentName原来是回调函数啊==!(函数作为形参)
    // setTimeout(()=>{
    this.$refs.student.$on('hina',this.getStudentName)
    // this.$refs.student.$once(['hina','hifumi'],this.getStudentName)
    //看上面一行,once概念别忘了,一次性;;还有监视多个,记得用数组

    //这里通过emit的参数,都会传给监视器回调($on括号俩参数,一个name一个callback)
    //所以我说这个$on和$emit就是个连体
    
    //另外要是觉得this.getSudentName还要写进括号太麻烦,想直接写function,
    //记得写成箭头函数,因为this.$refs.student指向了vc(student)而不是App

    //$on监听当前实例上的自定义事件
    //v-on可监听子组件emit的自定义事件

    this.$refs.student.$on('hifumi',this.getSchoolName)//这里测试多重解绑
    // },3000)
  }
};


//小结,俩子传父都不经过props
//一个@,一个ref
</script>
<style>
 /* 这里的scoped只会对自己生效,汇总来的还是自己地方写scoped才行 */
</style>