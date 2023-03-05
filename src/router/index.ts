import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../latout/home/home.vue'
import Explore from '../latout/explore/explore.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            component: Home,
            path: '/'
        },
        {
            component: Explore,
            path: '/explore'
            // path: '/'
        },

    ]
})


export default router