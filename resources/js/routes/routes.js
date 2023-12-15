import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import notFound from '../components/NotFound.vue'
import App from '../components/App.vue';

const history = createWebHistory();

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/app',
        component: App
    },
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
