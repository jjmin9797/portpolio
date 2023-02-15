import { createRouter, createWebHistory } from "vue-router";
import PortfolioMain from '@/pages/home/portfolio_main'
const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PortfolioMain',
            component: PortfolioMain
        }
    ]
})
export default router;