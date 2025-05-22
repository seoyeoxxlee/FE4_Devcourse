import './css/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import SecondChild from './components/SecondChild.vue'

const app = createApp(App)
app.component('SecondChild', SecondChild)
app.mount('#app')
