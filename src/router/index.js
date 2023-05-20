import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../pages/main/dashboard.vue';
import home from '../pages/home.vue';
import profile from '../pages/profile.vue';
import messages from '../pages/messages.vue';
import download from '../pages/download.vue';
import setting from '../pages/setting.vue';

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: dashboard,
        children: [
            {
                name: 'Home',
                path: '/home',
                component: home
            },
            {
                name: 'Profile',
                path: '/profile',
                component: profile
            },
            {
                name: 'Messages',
                path: '/messages',
                component: messages
            },
            {
                name: 'Download',
                path: '/download',
                component: download
            },
            {
                name: 'Setting',
                path: '/setting',
                component: setting
            },
        ]
    },
    
];

const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes
    });
    return router;
}