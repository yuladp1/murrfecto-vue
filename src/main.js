import { createApp } from 'vue'
import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const store = createPinia()
store.use(({ store }) => {
    store.router = markRaw(router)
  })
const app = createApp(App)

//app.use(createPinia())
app.use(store)
app.use(router)

app.mount('#app')
