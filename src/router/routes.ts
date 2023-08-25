import  { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Homeview from '../pages/HomeView.vue'
import Contactview from '../pages/ContactView.vue'
const routes = [
    {path: "/", component: Homeview},
    {path: "/user/:id", component: Contactview, props: true}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router