<template>
<div class="demo">
    <h2>名称: {{name}}</h2>
            <h2>地址: {{address}}</h2>
            </div>
</template>

<script>
   export default({//默认导出
    name:'School',
        data() {
            return {
                name: '格黑娜',
                address:'基沃托斯南'
            }
        },
    methods: {
            showName(){
                alert(this.name)
            }
    },
    })
</script>

<style>
    .demo{
        background-color:rgb(30, 105, 204);
    }
</style>
