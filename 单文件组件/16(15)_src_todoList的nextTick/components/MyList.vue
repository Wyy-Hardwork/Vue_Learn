<template>
	<ul class="todo-main">
		<!-- 什么是遍历for in? v-for='(todoObj,key) in todos',这里todoObj指代数组名,
		就当创建一个新数组吧	 -->
		<!-- 对象有key index 还有 value,数组有value 和 index -->
		<!-- v-for会根据 in 之后的数组或键值对的数量来遍历,并输出 -->
		<!-- :todo就当是data里的todo属性了(其实不是,都没进_data,根本访问不到(你看look方法),只有props的才能访问)
		;同名的话,props优先级更高 -->
		<!-- 然后这个todo被接收后,就当进入新vc的data里了,也假作data里的属性使用(this.todo) -->

		<!-- 被vfor过的this.todo虽然感觉是一个数组,其实是很多个独立的元素;你没法一次输出整个数组,
		只能一个一个输出数组内元素;
		就是因为v-for有同一个名字(this.todo)可以把数组内所有项都遍历完的特性,所以foreach(v-for)好用 -->
		<MyItem 
			v-for="todoObj in todos"
			:key="todoObj.id" 
			:todo="todoObj" 
		/>
		<!-- v-bind可以用来绑定属性 -->
		<button @click='look'>看看todoObj是什么东西</button>
	</ul>
</template>

<script>
	import MyItem from './MyItem'

	export default {
		name:'MyList',
		components:{MyItem},
		//声明接收App传递过来的数据
		props:['todos'],
		methods:{
			look(){
				console.log(this.todos);
			}
		}
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>