/* Automatically generated by './build/build-entry.js' */

import BottomUpShell from '../compt/BottomUpShell/index.js';

const components = [
  BottomUpShell
];

const install = function(Vue, opts = {}) {

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$PRINTER = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '1.0.0',
  install,
  BottomUpShell
};

module.exports.default = module.exports;