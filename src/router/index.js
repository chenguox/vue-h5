import { createRouter, createWebHashHistory } from "vue-router";

// 动态生成 routes
const routeFiles = import.meta.glob('@/views/*/router.js')
// 默认重定向为 home
const routes = [{
  path: "/",
  redirect: "/home",
}]
for(const path in routeFiles){
  const module = await routeFiles[path]()
  routes.push(module.default)
}

// 创建 router 对象
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系: path -> component
  routes,
});

// 路由前置守卫
// 路由前置守卫
router.beforeEach((to) => {
  // if (to.path !== '/login') {
  //   const token = localCache.getCache('token')
  //   if (!token) {
  //     return '/login'
  //   }
  // }
})

export default router;