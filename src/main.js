import { createApp } from 'vue'
const Vue = createApp({});

import { createWebHistory, createRouter } from "vue-router";
import { createMetaManager } from 'vue-meta';

import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from 'bootstrap/dist/js/bootstrap';

Vue.use(Bootstrap);

import App from './App.vue';
import Index from "./components/Index.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

createApp(App).use(router).use(createMetaManager()).mount('#app');
