<template>
 <transition name="fadeIn">
  <section class="web-components cover" v-show="showDialog">
    <section class="dialog-body">
      <section class="main-title" v-if="dialogTextConfig.mainTitle">{{dialogTextConfig.mainTitle}}</section>
      <section class="text">{{dialogTextConfig.dialogText}}</section>
      <section class="operate-dialog">
        <span v-show="dialogTextConfig.cancleText"
              @click="cancleCallbck" 
              class="cancle">{{dialogTextConfig.cancleText}}</span>
        <span v-show="dialogTextConfig.sureText"
              @click="triggerCallback">{{dialogTextConfig.sureText}}</span>
      </section>
    </section>
  </section>
 </transition>
</template>
<script>

/*
  Author: xiaolin@in66.com
  Data: 2018/7
  Intro: layer 组件
*/

export default {
  name: 'Layer',
  data() {
    return {};
  },
  props: {
    showDialog: {
      type: Boolean
    },
    dialogTextConfig: {
      type: Object,
      default() {
        return {
          mainTitle: '',
          dialogText: '',
          cancleText: '',
          sureText: '',
          showCross: false
        };
      }
    }
  },
  computed: {
  },
  methods: {
    triggerCallback() {
      this.$emit('dialogSure');
    },
    cancleCallbck() {
      this.$emit('dialogCancle');
    }
  }
};

</script>
<style lang="scss" scoped>
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fadeIn-enter-active,.fadeIn-leave-active {
      transition: all 0.4s ease;
  }
  .fadeIn-enter,
  .fadeIn-leave-active {
      opacity: 0;
  }
  .cover{
    animation: fadeIn 0.2s linear;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,.5);
    z-index: 10000;
  }

  .dialog-body{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    // height: 246px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    text-align: center;
    color: #333;
    .text{
      width: 90%;
      margin: auto;
      color: #666666;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      padding-top: 60px;
      padding-bottom: 52px;
    }
    .operate-dialog{
      position: relative;
      font-size: 32px;
      // height: 52px;
      display: flex;
      line-height: 52px;
      padding: 25px 0;
      color: #FF4545;
      align-items: center;
      justify-content: center;
      span{
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      span:first-child{
        color: #BEBEBE;
      }
      .cancle:after{
        content:"";
          pointer-events:none;
          box-sizing:border-box;
          position:absolute;
          width:200%;
          height:84px;
          left:0;
          top:0;
          border-right:1px solid #E0E0E0;/*no*/
          -webkit-transform:scale(0.5);
          -webkit-transform-origin:0 0;
          transform:scale(0.5);
          transform-origin:0 0;
      }
    }

    .operate-dialog:before{
      position: absolute;
      width:200%;
      height: 200%;
      content:"";
      pointer-events:none;
      box-sizing:border-box;
      left:0;
      top:0;
      border-top:1px solid #E0E0E0;/*no*/
      -webkit-transform:scale(0.5);
      -webkit-transform-origin:0 0;
      transform:scale(0.5);
      transform-origin:0 0;
    }
  }

  .main-title{
    margin-top: 50px;
    margin-bottom: -25px;
  }
  
  .btn-left{
    position: absolute;
    top: 0;
    right: 10px;
    padding:10px  15px;
    color: #B0B0B0;
  }
</style>
