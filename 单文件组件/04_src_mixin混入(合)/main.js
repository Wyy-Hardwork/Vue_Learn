//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false
//创建vm实例
new Vue({
    el: '#app',
    render: h => h(App)
})

//ps.你可以在main.js使用全局mixin,但不太好,这连vm都会包括进去,变得有点不可控了
//import{mixin,mixin2} from './mixin'
//Vue.mixin(mixin)
//Vue.mixin(mixin2)