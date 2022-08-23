//创建整个应用路由器
import VueRouter from 'vue-router';

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

//创建并暴露,这里通过new方式来使用总线
export default new VueRouter({
    routes: [//这里的routes是写死的,不是routers
        //记忆,router是路由器,routes是路由们

        // 每个组件将会拥有一个自己的专属route,以及公共的VueRouter

        {
            name: 'guanyu',
            path: '/about',
            component: About,
            //子路由,数组,以及path不需要/
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },

                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangguan',
                            path: 'detail',
                            component: Detail,


                            //props写法一,值为对象,该值所有key:value会以props形式传给接收方(Detail组件)
                            //props:{a:1,b:2}

                            //第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的params参数以props形式传给接收方
                            //props:true

                            //第三写法,值为函数
                            props($route) {//这里可以协助获得$route值
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        },


    ]
})
//index.js应该当做路由总线,用于暴露集合,给予path