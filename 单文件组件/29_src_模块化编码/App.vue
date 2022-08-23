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
};
</script>
<style>
button{
  margin-left: 3% ;
}
</style>