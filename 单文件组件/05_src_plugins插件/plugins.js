export default{
    install(Vue,x,y,z){//vue会自动调用install方法
        console.log('插件来了',Vue);

        Vue.filter('mySlice',function(value){
            return value.slice(0,2)
        })

        //全局自定义指定
        Vue.directive('aaabind',{
            bind(e,b){
                console.log('绑定时刻!');
                e.value = b.value
                
            },
            inserted(e,b){
                console.log('指令所在元素插入页面时刻!');
                e.focus()
            },
            update(e,b){
                console.log('指令所在模板被重新解析时刻!');
                e.value = b.value
                e.focus()
            }
        })

        //定义混入
        Vue.mixin({
            data() {
                return{
                  x: 100,
                  y: 200//此处实现了给Student传递两个参数,如果有冲突,以本来就有的为主,丢弃掉混合的数据
                }
              }
        })

        //原型加个方法(vm,vc共用)
        Vue.prototype.hello =()=>{alert('你好啊!')}
    }
}