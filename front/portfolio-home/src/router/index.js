import { createRouter, createWebHistory } from "vue-router";
import PortfolioMain from '@/pages/home/portfolio_main'
import AboutMe from '@/pages/aboutme/about_me'
const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PortfolioMain',
            component: PortfolioMain
        },
        {
            path: '/aboutme',
            name: 'AboutMe',
            component: AboutMe
        }
    ]
})
export default router;