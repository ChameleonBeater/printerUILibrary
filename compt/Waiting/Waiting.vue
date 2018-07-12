<template>
  <transition name="fadeIn">
    <div class="web-components waiting-mask js-prevent-penetrate"
         :style="maskStyle"
         @click.stop="touchMask">
      <section v-if="supportSVG" class="svg-waiting" v-html="svg" :style="loadingStyle"></section>
      <div v-else class="content">
        <div class="waiting"><span class="i-font">&#xe62b;</span></div>
      </div>
    </div>
  </transition>
</template>

<script>
/*
  Author: xiaolin@in66.com
  Data: 2018/7
  Intro: 使用 SVG 矢量图来做 Loading, 如果不支持 svg 就是用 gif 做一个最基本的
  Props: type | String | 使用类型 balls bars beat bubbles cylon spin dubbles barscylon 反正看着 svg 的文件一一个个试着玩吧，默认是 cylon
  Props: color | String | loading 填充颜色，默认为 In 主题色 #ec584d
  Props: size | Object | 尺寸大小，默认为 60px
  Demo: <Loading type="cylon" color="#ffffff" :size="{ width: '50px', height: '50px' }"></Loading>
*/
import * as svgLoading from './svg/index.js';

export default {
  name: 'Waiting',
  props: {
    type: {
      type: String,
      default: 'cylon'
    },
    color: {
      type: String,
      default: '#ec584d'
    },
    size: {
      type: Object,
      default: { width: '60px', height: '60px' }
    },
    maskStyle: {
      type: Object,
      default: {
        backgroundColor: 'hsla(0,0%,100%,.9)'
      }
    }
  },
  methods: {
    touchMask() {
      this.$emit('touchMask');
    }
  },
  computed: {
    svg() {
      return svgLoading[this.type];
    },
    loadingStyle() {
      return { fill: this.color, width: this.size.width, height: this.size.height };
    },
    supportSVG() {
      return typeof window.SVGRect !== undefined;
    }
  }
};
</script>
<style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .waiting-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color:hsla(0,0%,100%,.9);
  }
  .svg-waiting {
    margin: auto;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate3d(-50%, -50%, 0);
  }
  .js-prevent-penetrate {
    touch-action: none;
  }
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    width: 50%;
    border-radius: 10px;
    text-align: center;
    padding-bottom: 2%;
  }
  .i-font {
    display: inline-block;
    font-size: 90px;
    color: #fff;
    transform-origin: 47% 49%;
    animation: aniRotate 1s linear infinite;
  }
  .text {
    font-size: 30px;
    color: #fff;
    height: 50px;
    overflow: hidden;
    li {
      line-height: 50px;
    }
  }
  @keyframes aniRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
