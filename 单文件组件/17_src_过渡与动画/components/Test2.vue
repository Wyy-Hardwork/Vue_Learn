<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button><br>
    <!-- <img :src='theImg' alt="图图呢?"  v-show="isShow" class="come"> -->
    <transition name='one' appear>
        <!-- appear是:appear='true'的简写,用于开场就出现动画;不然是没有初始动画的 -->
    <img :src='theImg' alt="图图呢?"  v-show="isShow" >
    </transition>
    <!-- 过渡动画,用这个不用自定义class,但是style名字得按规定写 -->
    <!-- transition并不会出现在DOM里(vue才认识),而且带来的class也是一闪而过 -->
  </div>
</template>

<script>
import imgs from '/asset/4.png'
export default {
name:'Test',
data(){
    return {
        isShow : true,
        theImg : imgs
    }
}
}
</script>

<style scoped>
    img{
        background-color: grey;
        height: 30%;
        width: 51%;
        /* transition: 1s; */
        /* transition这里是和下面俩标签一起发挥作用的,用来写动画持续时间 */
        /* 为了不破坏原有结构,可以看下面 */
    }

    .one-enter,.one-leave-to{
        transform: translateX(-100%);
    }
    /* 开始帧 */
    .one-enter-to,.one-leave{
        transform: translateX(0);
    } 
    /* 结束帧 */
    /* 这样写免得写keyframes还有animation引用了 */
    /* 四个混成俩了,因为有俩复用 */

    /* .one-leave{
        transform: translateX(0);
    }
    .one-leave-to{
        transform: translateX(-100%);
    }  */
    /* 这玩意写了四个...到底哪个方便,我不好说== */

    .one-enter-active,.one-leave-active{
        transition: 1s 
        /* 这个是防止破坏原有结构写的 */

        /* transition启动时候,对应的active(启动)和enter或者enter-to,两者会一起进入class生效 */
        /* leave和leave-to也是两者选其一和active一起生效,起到了动画时长和关键帧双生效 */
    }
</style>