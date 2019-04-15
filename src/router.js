import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const views = {}
const requireComponent = require.context(
  // The relative path of the components folder
  './views',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /\.(vue|js)$/
)
requireComponent.keys().map((item, index) => {
  const componentModule = requireComponent(item)
  views[item.replace('./', '')] = componentModule.default || componentModule
});
console.log(views)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: views['Home.vue']
    },
    {
      path: '/about',
      name: 'about',
      component: views['About.vue']
    }
  ]
})
