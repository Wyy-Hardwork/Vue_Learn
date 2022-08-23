//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入router
import VueRouter from 'vue-router'//我导入了,我就得用!

import router from './router'//省略了index

//路由内新增三行,两个引入一个定义

Vue.use(VueRouter)//在这里,我用了!这里没办法new总线,通过use来使用总线(为什么模块化是在组件use的?)
//感觉是没new就use,没use就new,得保持导入文件一致(use跟实例化一样,主要是用来给你弄VueRouter里的方法用)

//关闭生产提示
Vue.config.productionTip = false
//创建vm实例
new Vue({
    el: '#app',
    render: h => h(App),

    router:router//据说有命名规范,这里得用import来的router
})
//导入暴露总线index进入vm中
//为什么套娃也要重复导入?估计import只是指路而不是把内容放进去,子文件需要的插件你都需要才能支持
