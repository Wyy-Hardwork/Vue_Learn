<template>
  <div class="sc">
    <h2>名字: {{name}}
        <br><br>
        学校:{{address}}
        <br> <br>
        年龄:{{myAge+1}}
        <br><br>
        你们...?{{msg}}
    </h2>
    <button @click="change">点我学生变吸血鬼!</button>
    <hr>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg:'我们都是sensei的最爱!',
            // name: '空崎日奈',
            // address: '格黑娜',
            // sex:'女'
            myAge:this.age
        }
    },
    methods: {
        change(){
            this.myAge+=500
            console.log(this);
        }
    },
  props: ['name','address','age'],//props是准备接收的公用属性
  //props数据不会进入VC的_data内,是由外部传入的
  //这叫简单声明接收
  //如果你data里的数据属性名跟props里的重复了,那么props优先更高,还会报个错

  //声明多余的公共属性(我再声明个sex)会undefined
  //不要再去改动那些确定的公用属性了,确实能改,但是会给你警告,这不好;这里用this.改好些
  //props的属性会先放进vc里,这样你就可以在data里之类的读取了
  //别传出和接收key之类的关键字,没用的

//   props:{
//     name:String,
//     address: String,
//     age: Number
//   }这也是一种props的接收数据方式,还会附加一个属性类型
//接收的同时进行类型限制

    // props:{
    //     name:{
    //         type:String,
    //         required:true,
    //     },
    //     age:{
    //         type:Number,
    //         default:99 不传入age,age就会显示99
    //     }
    // }
//更加详细地进行,是默认性和必要性的限制

}

//小结
//配置项props
//让组件接收外部传过来的数据
//传递数据 <demo name='xxx'/>
//接收数据 三种方式见上,type类型,required必须性,default默认值
// props是只读的,Vue底层会监测你对props的修改,改了会警告;
//如果实在需要修改,就赋值props的值到data中,声明另一个变量来修改
</script>

<style>
    .sc{
        background-color: rgb(61, 221, 233);
    }
</style>