import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
// import { setupRouter } from '@/router'

import "normalize.css";
import "./assets/css/index.css";

function setupApp() {
  const app = createApp(App)
  // 配置 store
  // setupStore(app)
  app.use(pinia)

  // 配置 router
  // await setupRouter(app)
  app.use(router)

  // 挂载实例
  app.mount('#app')
}

setupApp()


// createApp(App).use(router).use(pinia).mount("#app");
