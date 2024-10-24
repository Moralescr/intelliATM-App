import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeApp from '@/views/HomeApp';
import ATMConnection from '@/components/ATMConnection';
import ATMDisplay from '@/components/ATMDisplay';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'HomeApp',
        component: HomeApp
    },
    {
        path:'/connection',
        name: 'ATMConnection',
        component: ATMConnection
    },
    {
        path: '/atm',
        name: 'ATMDisplay',
        component: ATMDisplay,
    }
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;