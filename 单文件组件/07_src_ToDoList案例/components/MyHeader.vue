<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
		<button @click="funk1">点我看看父多了什么!</button>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name:'MyHeader',
		//接收从App传递过来的addTodo
		props:['addTodo','funk'],
		data() {
			return {
				play:'我是Header',
				//收集用户输入的title
				title:''
			}
		},
		methods: {
			add(){
				//校验数据
				if(!this.title.trim()) return alert('输入不能为空')
				//将用户的输入包装成一个todo对象
				const todoObj = {id:nanoid(),title:this.title,done:false}
				//通知App组件去添加一个todo对象(难道是App的x指向地址和MyHeader一样,并且让子获得了父方法操作父属性的权利?)
				this.addTodo(todoObj)
				//清空输入
				this.title = ''
			},
		funk1(){
		//新总结,传递过来的函数里的this,指的还是原来的vc(App),你这里的this,属于你自己(Header)
		//为什么要加this(Header)?因为函数是从App传给Header的;另外这不是固定语法?不然方法怎么调用?

		//因为this一直指向vm(vc)的原因,这里用了this.play指明属性地址;原理要看源码,看不懂
			this.funk(999)
			console.log(this.play);
		}
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>