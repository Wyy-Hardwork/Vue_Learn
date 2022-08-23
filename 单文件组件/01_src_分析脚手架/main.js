// 此文件是整个项目的入口文件
//npm run serve运行的就是这个文件


//引入Vue
import Vue from 'vue'
//引入App组件,它是所有组件的父组件
import App from '../01_src_分析脚手架/App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//关于vue.js与vue.runtime.xxx.js的区别
//vue.js是完整的vue,包含核心功能和模板解析器
//vue.runtime.xxx.js是运行版的Vue,只含核心功能,没有模板解析器 

//没有模板解析器,就不能使用template配置项,
//需要使用render函数接收到createElement函数去制定具体内容

//vue inspect > output.js可以查看Vue脚手架的默认配置
//使用vue.config.js可以对脚手架进行个性化订制(个人不想改)


//创建vm实例对象
new Vue({
//完成了,将App组件放入容器中
  render: h => h(App),
  //render(createElement形参,一个参数,因此可简化成如上的箭头函数){
    // return createElement('h1',你好(标签后面跟个逗号是固定句式,你加App就行,往上面一读取就完事))
  // }
}).$mount('#app')
//el:'#app'↑
