import navConfig from './nav.config.json';

const LOAD_MAP = {
  'compt': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/compt/${name}.vue`)),
    'compt');
  }
};

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'compt': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/compt${path}.md`)),
    'compt');
  }
};

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};

const registerRoute = (navConfig) => {
  let route = [];
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang];
    route.push({
      path: `/${ lang }/`,
      redirect: `/${ lang }/BottomUpShell`,
      component: load(lang, ''),
      children: []
    });
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.list) {
        nav.list.forEach(item => {
          item.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      }
    });
  });
  function addRoute(page, lang, index) {
    const component = page.path === '/changelog'
      ? load(lang, 'changelog')
      : loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'compt-' + lang + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }

  return route;
};

let route = registerRoute(navConfig);
let defaultPath = '/compt';

route = route.concat([{
  path: '/',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}]);

export default route;