import Vue from 'vue'
import Router from 'vue-router'

const Homepage = () => import(/* webpackChunkName: "Homepage" */'@/components/Homepage')
const AboutPage = () => import(/* webpackChunkName: "AboutPage" */'@/components/AboutPage')
const ContactsPage = () => import(/* webpackChunkName: "ContactsPage" */'@/components/ContactsPage')

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function(to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
      // , offset: { x: 0, y: 10 }
    }
  }
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/#imigize-landing-howToConnect',
      name: 'homepage-howToConnect',
      component: Homepage
    },
    {
      path: '/technology',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage
    }
  ]
})
