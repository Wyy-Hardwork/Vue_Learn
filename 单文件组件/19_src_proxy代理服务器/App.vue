<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      //axios的封装免去了new Promise操作,直接到then然后前正确后错误来输出;
      //then里带了俩回调函数,带了个对象参数;正确取名response对象,错误取名error对象

      //这里一开始端口号不一样,跨域.浏览器发送,服务器返回数据,但浏览器不接收

      //1.cors在服务端写响应头可以实现不同端口跨域
      //2.jsonp用script src只能解决get无法解决post,但无视同源策略,很巧妙

      //3.通过代理服务器,代理服务器会和你端口一致;两个服务器相遇不会报错,同源策略管不上
      //下面get通过代理服务器获取到了students
      axios.get("http://localhost:8080/ap/students").then(
        (response) => {
          console.log("请求成功!", response.data);
        },
        (error) => {
          console.log("请求失败!", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功!", response.data);
        },
        (error) => {
          console.log("请求失败!", error.message);
        }
      );
    },
  },
};
</script>

<style>
/*base*/
</style>
