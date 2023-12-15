import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import Login from '../auth/login.vue'
import notFound from '../components/NotFound.vue'

const history = createWebHistory();

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/loginvue',
        component: Login
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history,
    routes
})

export default router
