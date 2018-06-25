<template>
  <div class="phone-cover">
    <div class="phone-container">
     <slot></slot>
    </div>
  </div>
</template>

<style scoped>
 .phone-cover{
   position: relative;
   width: 180px;
   height: 320px;
   overflow: hidden;
   background-image: url('https://inimg01.jiuyan.info/in/2018/06/25/771cdd26-475e-4190-a9ed-20b0b00f7263');
   background-size: cover;
   .phone-container{
     position: absolute;
     width: 100%;
     top: 10px;
     right: 0;
     bottom: 22px;
   }
 }
</style>