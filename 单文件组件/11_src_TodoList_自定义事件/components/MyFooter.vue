<template>
	<div class="todo-footer" v-show="total">
		<!-- 这个v-show等于零时会隐藏起来,false也能隐藏 -->
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
			<span>未完成{{unDo}}</span>
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name:'MyFooter',
		props:['todos'],
		computed: {
			//总数
			total(){
				return this.todos.length
			},
			//自写未完成位数
			unDo(){
				// let un = 0;
				// this.todos.forEach((todo)=>{
				// 	if(todo.done === false) un++
				// })
				// return un
				const emm = this.todos.reduce((a,todo)=> a+ (todo.done?0:1),0)
				return emm
				//todo是当前遍历的这个属性..同上
			},
			//已完成数
			doneTotal(){
				//此处使用reduce方法做条件统计 reduce可以说是filter与forEach的整合版,并且不会创造新数组
				/* const x = this.todos.(你的数组)reduce((pre(第一个数),current(下一个数))=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)   (return之后,这个return的值会变成pre,然后继续按顺序累加)
				},0  (这个0可以作为第一个数(第一次的pre),不填0,第一次的pre和current就是数组前两个数;填就是0和第一个数) ) */
				//最后一次的return,会作为reduce值返回,可以用一个变量接收一下,或者函数里直接return接收也行
				//简写
				return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
				//根据true false选择给出 1或者0 ,而且循环次数和数组个数一样...所以?
			},
			//控制全选框
			isAll:{//这里用到的是计算属性total()以及doneTotal,证明了一个计算属性可以调用另外计算属性的结果
				//全选框是否勾选

				//这里写成对象是因为,有get和set,简写方式isAll()只能get,不符合v-model的又读又写
				get(){
					return this.doneTotal === this.total && this.total > 0
				},
				//isAll被修改时set被调用
				set(value){
					this.$emit('checkAllTodo',value)
				//value卡半天,原来是tm的input框输入的值

				}
			}
		},
		methods: {
			/* checkAll(e){
				this.checkAllTodo(e.target.checked)
			} */
			//清空所有已完成
			clearAll(){
				this.$emit('clearAllTodo')
			},
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>