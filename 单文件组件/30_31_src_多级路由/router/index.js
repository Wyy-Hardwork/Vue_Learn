//创建整个应用路由器
import VueRouter from 'vue-router';

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'

//创建并暴露,这里通过new方式来使用总线
export default new VueRouter({
    routes: [//这里的routes是写死的,不是routers
        //记忆,router是路由器,route是路由们

        // 每个组件将会拥有一个自己的专属route,以及公共的VueRouter

        {
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
                    component: Message
                },
            ]
        },


    ]
})
//index.js应该当做路由总线,用于暴露集合,给予path