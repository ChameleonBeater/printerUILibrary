<template>
  <transition name="slide">
    <section class="m-marquee" :style="{top: fixTop, backgroundColor: bgColor, position: isFixed ? 'fixed': 'relative'}">
      <span ref="target"
            :class="['text', {'animation-scroll': run}]"
            :style="{color: fontColor}">{{fixContent}}</span>
    </section>
  </transition>
</template>
<script>
export default {
  /*
  Author: xiaolin@in66.com
  Data: 2018/07/17
  Todo: 更多定制属性
        性能优化
  Parms: {
    content: 滚动文字, Stirng类型
    delay: 两次动画间隔时间, Number, 默认值为 1s
    top: 距离顶部距离，Number/String, 默认值为 0px, 配置后为 ${Number}px/String
    speed: 滚动速度, String, 默认值为 simple, 可选值 lower/simple/high/super
    fontColor: 字体颜色, String, 默认值为 #fff 白色
    bgColor: 滚动区域背景色, String, 默认值为 #FF9900 黄色
    max: 滚动字数最大值, Number, 默认值为 100, 超出就截取
  }
  Events: {
    start: 每次滚动开始发送, 荷载为滚动次数
    delaying: 每次 delay间隙开始发送, 荷载为 delay次数
  }
  */
  name: 'Marquee',
  data () {
    return {
      run: false,
      duration: 6,
      startNum: 0,
      delayNum: 0
    }
  },
  props: {
    num: {
      default: 3,
      type: Number
    },
    max: {
      default: 100,
      type: Number
    },
    top: {
      default: 0
    },
    fontColor: {
      default: '#FF4338',
      type: String
    },
    iconColor: {
      default: '#FF4338',
      type: String
    },
    bgColor: {
      default: '#FFE6DE',
      type: String
    },
    speed: {
      default: 'simple',
      type: String
    },
    delay: {
      default: 1,
      type: Number
    },
    content: {
      default: '暂无内容',
      type: String
    },
    isFixed: {
      default: true,
      type: Boolean
    }
  },
  mounted () {
    const t = this.fixSpeed()
    this.duration = t
    this.$refs.target.style.animationDuration = `${t}s`
    setTimeout(() => {
      this.startScroll()
    }, 500)
  },
  methods: {
    sleepDelay () {
      if (this.delayNum >= this.num) return
      this.run = false
      this.delayNum ++
      this.$emit('delaying', this.delayNum)
      setTimeout(() => {
        this.startScroll()
      }, this.delay * 1000)
    },
    startScroll () {
      if (this.startNum >= this.num) return
      this.run = true
      this.startNum ++
      this.$emit('start', this.startNum)
      setTimeout(() => {
        this.sleepDelay(this.delay)
      }, this.duration * 1000)
    },
    fixSpeed (speed = this.speed, content = this.fixContent) {
      let duration = 6
      switch (speed) {
        case 'slow':
          duration = 10
          break
        case 'simple':
          duration = 6
          break
        case 'fast':
          duration = 4
          break
        case 'super':
          duration = 3
          break
      }
      duration = (content.length < 30) ? 6 : (content.length / 30 * duration) // 预防选择高速模式，字特少
      return duration
    }
  },
  computed: {
    fixContent: function () {
      return this.content.slice(0, this.max)
    },
    fixTop: function () {
      let tpl = ''
      if (typeof this.top === 'number') {
        tpl = `${this.top}px`
      } else if (typeof this.top === 'string') {
        tpl = this.top
      }
      return tpl
    }
  }
}
</script>
<style lang="scss" scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity .3s ease;
    .content {
      transition: transform .3s ease;
    }
  }
  .slide-enter,
  .slide-leave-active {
    opacity: 0;
    .content {
      transform: translate(0, 100%);
    }
  }
  // 新版marquee ，增加速度，内容，延迟选择
  .m-marquee {
    position: fixed;
    left: 0;
    top: 0;
    width: 750px;
    height: 50px;
    font-size: 24px;
    color: #fff;
    background-color: #FF9900;
    z-index: 20;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    .text {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 50%;
      font-size: 24px;
      line-height: 50px;
      .icon-iconfonthuodonggonggao {
        font-size: 24px;
        line-height: 50px;
        margin-right: 10px;
      }
    }
    .animation-scroll {
      animation: marquee 8s linear;
    }
  }
  @keyframes marquee {
    0% {
      opacity: 0;
      transform: translate3d(750px, -50%, 0);
    }
    20% {
      opacity: 1;
    }
    100% { 
      opacity: 1;
      transform: translate3d(-100%, -50%, 0);
    }
  }
</style>
