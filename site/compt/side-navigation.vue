<template>
  <div class="side-nav">
    <ul>
      <li  
        v-for="item in list" 
        class="side-nav-level0 side-nav-item">
        <a class="level0" :href="'#' + item.path">{{item.title}}</a>
        <ul v-if="item.children">
          <li v-for="subItem in item.children">
            <a class="level1" :href="'#' + item.path + '/' + subItem.path">{{subItem.name}}</a>
          </li>
        </ul>
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
    props: {
      list: {
        type: Array
      }
    }
  };
</script>
<style scoped>
 ul, li {
   list-style-type: none;
 }
 .side-nav{
  position: absolute;
  left: 10px;
  top: 10px;
  width: 300px;
  height: 100%;
 }
 .level0{
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  position: relative;
  transition: .15s ease-out;
  font-weight: 700;
  margin-top: 15px;
 }
 .level1{
  display: block;
  height: 40px;
  color: #444;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
 }
</style>