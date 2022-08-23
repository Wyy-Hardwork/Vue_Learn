<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button><br>
    <transition-group name='one' appear>
    <img :src='theImg' alt="图图呢?"  v-show="!isShow" key='1'>
    <img :src='theImg1' alt="图图呢?"  v-show="isShow" key='2'>
    </transition-group>
    <!-- 过渡动画,用这个不用自定义class,但是style名字得按规定写 -->
    <!-- transition并不会出现在DOM里(vue才认识),而且带来的class也是一闪而过 -->
    
    <!-- 对于transition-group,用来支持多个标签(见上俩img);但是每一个得标识唯一key -->
  </div>
</template>

<script>
import imgs from '/asset/4.png'
import imgs1 from '/asset/6.png'
export default {
name:'Test',
data(){
    return {
        isShow : true,
        theImg : imgs,
        theImg1 : imgs1
    }
}
}
</script>

<style scoped>
    img{
        background-color: grey;
        height: 30%;
        width: 51%;
    }

    .one-enter-active{
        animation : anime 1s 
    }
    /* v-xxx-xxx的v可以改,关键在于transition里面加name='xxx' */

    .one-leave-active{
        animation : anime 1s reverse
    }

    @keyframes anime {
        from{
            transform: translateX(-100%)
        }
        to{
            transform: translateX(0px)
        }
    }
    /* keyframes 动画名 是一个自定动画效果,等待被别人的animation引用 */
</style>