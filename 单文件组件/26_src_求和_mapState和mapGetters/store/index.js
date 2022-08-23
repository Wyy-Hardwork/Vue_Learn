//改文件用于创建vuex的store

//引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//使用Vuex插件
Vue.use(Vuex)

//流程:
//在组件里找到this.$store.dispatch('jia',参数value)  ---当成$emit也不错(事件名jia,值)

//第一关actions
//把dispatch(发出)套进actions中,我自认为的$on方法 jia() 中(方法名要跟事件名一样)
//然后通过 context.commit ('想要给mutations的名字JIA',获取参数value)  也可以当做一个$emit
//ps.好像把actions中的 jia 方法当做$on没有错,区别是 jia(context,value)第一参数是精简版context,第二个才是传入参数
//再ps.commit可以直接在组件上写,如果你的逻辑只是简单取值

//第二关mutations(突变)
//接收到commit值后,$on启动(自认为),不过这次的回调函数没有了精简版context,取而代之是state里的数据,第二个还是传入参数value
//在这里的操作会反应到组件内,请提前在state里面备好值

//ps.state
//用于储存来自组件的数据,供给给mutations来实现一些功能
//三个对象都处于$sotre之下

//扫尾
//所有事件完毕,解析模板至页面上

//响应组件动作actions(接收数据)
const actions = {
    jia: function (context, value) {//这是完整写法
        console.log('actions调用!');
        //context是精简版的
        context.commit('JIA', value)
        context.dispatch('jia_plus',value)//如果代码冗长,可以续写进jia_plus中
    },
    jia_plus(){
        //jia撑不下了,换我上;或者实现一些分工函数
    },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // }, 逻辑过于简单,省略actions
    jiaOdd(context, value) {
        if (context.sum % 2)
            context.commit('JIA', value)
    },
    jiaTime(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
                , 1000
        })
    },
    //看得出来上面的不同方法是可以共用一个mutations里的$on的
    //方法业务逻辑什么的都写在actions了,我来负责各种逻辑(service)

    //操作数据的都写在mutations,我只要处理完成的属性了(dao)
}

//用于操作数据(操作数据)
const mutations = {
    JIA(state, value) {
        console.log('mutations调用!');
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}

//用于存储数据
const state = {
    sum: 0,
    school :'格黑娜',
    student:'空崎日奈'
}

//用于加工state中的数据(怎么感觉跟mutations有点像)
//类比computed,必须return,返回值!
//computed(getters)是另起炉灶(bigSum加工),mutations是自给自足(sum加工)
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建store
// const store =
export default new Vuex.Store({//简写暴露,不用写参数名字
    actions: actions,//下面俩是对象的简写形式
    mutations,
    state,
    getters,
})

//导出(暴露)store
// export default store