import Layer from './index.vue';

/* istanbul ignore next */

Layer.install = (Vue) => {
  Vue.component(Layer.name, Layer);
};

export default Layer;
