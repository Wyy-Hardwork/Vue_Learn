<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button><br />
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__flip"
      leave-active-class="animate__hinge"
      appear
    >
    <!-- animate.css我需要用你的name,enterxx和leavexx -->
      <img :src="theImg" alt="图图呢?" v-show="isShow" />
    </transition>
  </div>
</template>

<script>
import "animate.css";
import imgs from "/asset/4.png";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
      theImg: imgs,
    };
  },
};
</script>

<style scoped>
img {
  background-color: grey;
  height: 30%;
  width: 51%;
}
</style>