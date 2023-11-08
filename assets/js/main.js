
import { createApp } from 'vue'
import App from './App.vue'

// add this
import './main.css'

createApp(App).mount('#app')

// Tệp JavaScript của Tailwind CSS để xử lý các tương tác
import 'https://cdn.tailwindcss.com/2.2.15/tailwind.min.js';

// Tệp JavaScript của Dropdown plugin
import 'https://cdnjs.cloudflare.com/ajax/libs/dropdown.js/0.0.4/dropdown.min.js';


import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router' // đường dẫn đến file cấu hình router

Vue.Navbar(VueRouter)

Vue.ProductDetail(VueRouter)

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');

app.$mount('#app')


