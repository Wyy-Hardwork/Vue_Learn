<template>
  <div>
    <Nav></Nav>
    <transition name="fade" appear>
      <keep-alive :include="['books','ndetail']">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import Nav from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.7s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  position: absolute;
}
</style>
