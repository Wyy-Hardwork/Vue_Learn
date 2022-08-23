//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入store,注意vue脚手架会把import先执行,这个store都还不存在呢
//所以在index.js引入了Vuex
import store from './store'//这是vue的简写,index可以不写
//结果使用vuex主要配置都在index.js,这里只要导入和在Vue里面写一个参数

//关闭生产提示
Vue.config.productionTip = false
//创建vm实例
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    //使用store
    // store:'what!',
    //在vm中加入全局变量$store...
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    // mounted(){
    //     console.log('vm里面看看',this);
    // }
})

