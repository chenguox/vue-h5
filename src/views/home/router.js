// 懒加载路由
const home = () => import('./home.vue')
export default {
  path: '/home',
  name: 'home',
  component: home,
  children: []
}