import navConfig from './nav.config.json';

const LOAD_MAP = name => {
  return r => require.ensure([], () =>
    r(require(`./pages/${name}.vue`)),
  'changelog');
};

const load = function(lang, name) {
  return LOAD_MAP(name);
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
  navConfig.configs.forEach((target, index) => {
    let lang = target.name;
    route.push({
      path: `/${ lang }`,
      component: load(lang, target.name),
      children: []
    });
    if (target.href) return;
    if (target.list) {
      target.list.forEach(item => {
        addRoute(item, lang, index);
      });
    }
  });
  function addRoute(page, lang, index) {
    const component = page.type !== 'c'
      ? load(lang, 'changelog')
      : loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: page.title || page.name,
      component: component
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
}]);

console.log(route);
export default route;