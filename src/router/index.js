import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Add from '../views/Add.vue'
import About from '../views/About.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/povesti',
        name: 'Stories',
        component: Listing
    },
    {
        path: '/poveste/:storyId?',
        name: 'Story',
        component: Listing
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
