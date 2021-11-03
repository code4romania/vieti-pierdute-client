import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Add from '../views/Add.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/povesti',
        name: 'Listing',
        component: Listing
    },
    {
        path: '/poveste/:storyId?',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/adauga-o-poveste',
        name: 'Add',
        component: Add
    },
    {
        path: '/despre',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router