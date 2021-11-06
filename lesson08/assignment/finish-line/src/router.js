// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
// import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import eRunners from './components/eRunners.vue'
import Training from './components/Training.vue'
import createRoute from './components/createRoute.vue'
import About from './components/About.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/erunners',
            name: 'erunners',
            component: eRunners
        },
        {
            path: '/training',
            name: 'training',
            component: Training
        },
        {
            path: '/createroute',
            name: 'createroute',
            component: createRoute
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
