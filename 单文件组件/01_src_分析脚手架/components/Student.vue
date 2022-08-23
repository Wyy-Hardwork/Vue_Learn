<template>
<div class="demo">
    <h2>名称: {{name}}</h2>
            <h2>年龄: {{age}}</h2>
            </div>
</template>

<script>
   export default({//默认导出
    name:'Student',
        data() {
            return {
                name: '空崎日奈',
                age: 16
            }
        },
    methods: {
        show(){
            console.log('你好啊老师!')
        }
    },
    })
</script>

<style>
    .demo{
        background-color:aqua;
    }
</style>
