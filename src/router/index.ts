import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../latout/home/home.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            component: Home,
            path: '/'
        },

    ]
})


export default router