<template>
<div>
  <Category />
  <hr>
  <Person />
</div>
</template>
<script>
import Category from "./components/Category";
import Person from "./components/Person";
export default {
  components: {Category,Person},
  name: "App",
  data(){
    return {
      
    }
  },
    //   mounted(){
    //     console.log('vcéé¢çç',this);
    // }
};
</script>
<style>
button{
  margin-left: 3% ;
}
</style>