<template>
  <section v-sticky="stickyConfig">
    <slot name="stickySolt"></slot>
  </section>
</template>
<script>

/*
  Author: xiaolin@in66.com
  Data: 2018/7
  Intro: 吸顶组件
*/
import Sticky from './sticky.js';
export default {
  name: 'Sticky',
  directives: {
    'sticky': Sticky
  },
  data() {
    return {};
  },
  props: {
    stickyConfig: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
  },
  mounted() {}
};

</script>
<style lang="scss" scoped>

</style>
