<template>
  <div class="ls-shell">
    <div  
      class="ls-shell-content" 
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @click="clickContent"
      :class="{ transition: isTransition }"
      :style="{ transform: 'translate3d(' + transX + 'px, 0, 0)' }"
    >
      <slot name="lsContent"></slot>
    </div>
    <div class="ls-shell-bottom" :style="bottomStyle" ref="shellB">
      <slot name="lsBottom"></slot>
    </div>
  </div>
</template>
<script>
/*
Author: leeds@in66.com
Data: 2018/6
Intro: 左滑组件，一般用于左滑删除等，可以通过插槽定制定容
*/
let startTime = 0;
let startX = 0;
export default {
  name: 'LeftSlider',
  data() {
    return {
      transX: 0,
      screeW: document.documentElement.clientWidth,
      bottomW: 0,
      isTransition: false
    };
  },
  props: {
    bottomStyle: {
      type: Object,
      default: () => {
        return {
          'backgroundColor': '#FF4338',
          'width': '30%'
        };
      }
    }
  },
  methods: {
    onTouchStart(e) {
      let touches = e.touches;
      // 不支持多点
      if (touches.length > 1) return;
      this.isTransition = false;
      startTime = (new Date()).getTime();
      startX = touches[0].clientX;
    },
    onTouchMove(e) {
      let touches = e.touches;
      let _now = (new Date()).getTime();
      // 600ms
      if (_now - startTime > 400) {
        let dis = touches[0].clientX - startX;
        if (dis <= 0 && Math.abs(dis) < this.bottomW) {
          this.transX = dis;
        }
      }
    },
    onTouchEnd() {
      this.isTransition = true;
      if (Math.abs(this.transX) < this.bottomW / 2) {
        this.transX = 0;
      } else {
        this.transX = -1 * this.bottomW;
      }
    },
    clickContent() {
      if (this.transX < 0) {
        this.isTransition = true;
        this.transX = 0;
      } else {
        this.$emit('lsContentClick');
      }
    }
  },
  mounted() {
    this.bottomW = parseInt(window.getComputedStyle(this.$refs.shellB).width, 10);
  }
};

</script>
<style lang="scss" scoped>
.ls-shell{
  position: relative;
  .ls-shell-content{
    position: relative;
    width: 100%;
    background-color: #fff;
    z-index: 100;
  }
  .transition {
    -webkit-transition: -webkit-transform .3s;
    transition: transform .3s;
  }
  .ls-shell-bottom{
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
    max-width: 40%;
    min-width: 20%;
  }
}
</style>
