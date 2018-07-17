import Marquee from './Marquee.vue';

/* istanbul ignore next */
Marquee.install = (Vue) => {
  Vue.component(Marquee.name, Marquee);
};

export default Marquee;
