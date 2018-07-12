let listenAction = {};
let stickyTop = 0;
let zIndex = 999;

export default {
  bind(el, binding) {
    const elStyle = el.style;
    const params = binding.value || {};
    stickyTop = params.stickyTop || 0;
    zIndex = params.zIndex || 1000;
    elStyle.position = '-webkit-sticky';
    elStyle.position = 'sticky';
    // if the browser support css sticky（Currently Safari, Firefox and Chrome Canary）
    if (~elStyle.position.indexOf('sticky')) {
      elStyle.top = `${stickyTop}px`;
      elStyle.zIndex = zIndex;
      return;
    }

    let childStyle = el.firstElementChild.style;
    childStyle.cssText = `left: 0; right: 0; top: ${stickyTop}px; z-index: ${zIndex}`;
    let active = false;

    const sticky = () => {
      if (active) {
        return;
      }
      if (!elStyle.height) {
        elStyle.height = `${el.offsetHeight}px`;
      };
      childStyle.position = 'fixed';
      active = true;
    };

    const reset = () => {
      if (!active) {
        return;
      }
      childStyle.position = '';
      active = false;
    };

    const check = () => {
      const offsetTop = el.getBoundingClientRect().top;
      if (offsetTop <= stickyTop) {
        sticky();
        return;
      }
      reset();
    };

    listenAction = () => {
      setTimeout(check, 300);
    };
    window.addEventListener('scroll', listenAction);
  },
  unbind() {
    window.removeEventListener('scroll', listenAction);
  },
  update(el, binding) {
    const params = binding.value || {};
    stickyTop = params.stickyTop || 0;
    zIndex = params.zIndex || 0;
    let childStyle = el.firstElementChild.style;
    el.style.top = childStyle.top = `${stickyTop}px`;
    el.style.zIndex = childStyle.zIndex = zIndex;
  }
};
