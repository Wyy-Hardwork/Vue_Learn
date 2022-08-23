//创建整个应用路由器
import VueRouter from 'vue-router';

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
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
            name:'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name:'xinwen',
                    path: 'news',
                    component: News,
                    meta:{isAuth: true}
                },

                {
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{isAuth: true},
                    children: [
                        {
                            name: 'xiangguan',
                            path: 'detail',
                            component: Detail,

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

router.beforeEach((to,from,next)=>{
    console.log('前置守卫前来拦截!');
    console.log(to);//你要去哪里!to会携带目标位置所有属性
    console.log(from);//你来自哪里!
    if(to.meta.isAuth){//meta的isAuth判断是否需要校验,因为默认为false(没有的undefined就是false)
        if(localStorage.getItem('school')==='格黑娜'){//localStorage.getItem('school')
            next()
        }else{
            alert('你学校不对!')
        }
    }else{
        next()//开门
    }
})//全局前置路由守卫,切换页面(地址)之前都会调用函数;初始化时候也会调用

router.afterEach((to,from)=>{//后置守卫没有把关的next(),也没必要
    console.log('后置守卫前来修改你的title!');
    document.title = to.name || '主页'//本来是要写在meta里面的,我偷懒了(没有会自动获取后面的)
})

export default router//守卫需要有变量兜着,才方便