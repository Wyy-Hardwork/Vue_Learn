<template>
<div>
  <Category />
</div>
</template>
<script>
import Category from "./components/Category";
export default {
  components: {Category},
  name: "App",
  data(){
    return {
      
    }
  },
    //   mounted(){
    //     console.log('vc里面看看',this);
    // }
};
</script>
<style>
button{
  margin-left: 3% ;
}
</style>