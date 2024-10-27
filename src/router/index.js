import Vue from 'vue';
import VueRouter from 'vue-router';
import ATMDisplay from '@/components/ATMDisplay.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'ATMDisplay',
        component: ATMDisplay,
    },
  
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;