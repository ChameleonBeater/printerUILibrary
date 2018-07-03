<template>
  <div class="side-nav">
    <ul>
      <li  
        v-for="nav in list" 
        class="side-nav-level0">
        
      </li>
    </ul>
  </div>
</template>
<script>
  /*
  Author: leeds@in66.com
  Data: 2018/6
  Intro: 侧边导航
  */
  export default {
    name: 'side-nav',
    data() {
      return {
        list: []
      };
    }
  };
</script>
<style scoped>
 .side-navigation{
 }
</style>