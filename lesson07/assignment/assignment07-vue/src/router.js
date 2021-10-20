import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
// import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Images from './components/Images.vue'
import Accordion from './components/Accordion.vue'
import Grid from './components/Grid.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/images',
            name: 'images',
            component: Images
        },
        {
            path: '/accordion',
            name: 'accordion',
            component: Accordion
        },
        {
            path: '/grid',
            name: 'grid',
            component: Grid
        }
    ]
})
