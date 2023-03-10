import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import {createPinia} from 'pinia' 
import { createPersistedState } from "pinia-plugin-persistedstate"

const pinia  = createPinia()
const app = createApp(App)

pinia.use(createPersistedState({
    serializer:{   // 指定参数序列化器
        serialize: JSON.stringify,
        deserialize: JSON.parse
    }
}))

app.use(router)
app.use(pinia)
app.mount('#app')

