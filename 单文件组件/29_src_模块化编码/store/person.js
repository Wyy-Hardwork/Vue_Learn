import axios from 'axios'
import {nanoid} from 'nanoid'
export default{
    namespaced: true,
    actions: {
        addx(context, value) {
            if (value.name.indexOf('x') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('你得输入x开头才行')
            }
        },
        addServer(context){
            axios.get('https://v1.hitokoto.cn').then(
                response=>{
                    context.commit("ADD_PERSON",{id:nanoid(),name:response.data.hitokoto})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '空崎日奈' }
        ]
    },
    getters: {
        firstPersonName(state) {//记住各区域内的state都是局部的
            return state.personList[0].name
        }
    }
}