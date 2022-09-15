import { createApp } from 'vue'
const Vue = createApp({});

import { createWebHistory, createRouter } from "vue-router";
import { createMetaManager } from 'vue-meta';

import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from 'bootstrap/dist/js/bootstrap.js';

Vue.use(Bootstrap);

import App from './App.vue';
import Index from "./components/Index.vue";
const Blog = () => import('./components/Blog.vue');
const Projects = () => import('./components/Projects.vue');

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index
    },
    ,
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

createApp(App).use(router).use(createMetaManager()).mount('#app');
