import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.css'
// import './utlis/chart.js'
import vSelect from 'vue-select'




const app = createApp(App);

app.use(router);
app.use(store);
app.component('v-select', vSelect)

app.mount('#app');