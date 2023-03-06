import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../latout/home/home.vue'
import Explore from '../latout/explore/explore.vue'
import playdetail from '../components/playdetail/playdetail.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        // {
            // component: Home,
            // path: '/'
        // },
        {
            component: Explore,
            path: '/explore'
            // path: '/'
        },
        {
            component: playdetail,
            // path: '/playdetail',
            path: '/'
        },

    ]
})


export default router