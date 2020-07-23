import VrPlugin from './vue-vrplayer'

function plugin (Vue) {
  Vue.component('vrplayer', VrPlugin)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

export {
  VrPlugin,
  version
}
