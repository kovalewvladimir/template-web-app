import '@/plugins/unocss'
import '@/style.less'

import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'

const setupAll = async () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()
