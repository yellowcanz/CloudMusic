import { createRouter, createWebHistory } from "vue-router";

import Home from '../latout/home/home.vue'
import Explore from '../latout/explore/explore.vue'
import playdetail from '../components/playdetail/playdetail.vue'
import album from '../latout/album/album.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            component: Home,
            path: '/home',
        },
        {
            component: Explore,
            path: '/explore'
            // path: '/'
        },
        {
            component: playdetail,
            path: '/playdetail',
            // path: '/'
        },
        {
            component: album,
            path: '/album',
            // path: '/'
        },

    ]
})


export default router