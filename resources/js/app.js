import './bootstrap';
import { createApp } from 'vue';
import Router from './routes/routes.js'
// import Bootstrap from 'bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import App from './layout/App.vue';
import Header from './layout/header.vue';

const app = createApp({});
// app.use(Bootstrap)
app.component('header-component', Header)
app.component('app-component', App)
app.use(Router)
app.mount('#app');
