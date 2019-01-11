import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 完整的导航解析流程
// 导航被触发。
// 在失活的组件里调用离开守卫beforeRouterLeave。
// 调用全局的 beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 在路由配置里调用 beforeEnter。
// 解析异步路由组件。
// 在被激活的组件里调用 beforeRouteEnter(组件实例还没有被创建)。
// 调用全局的 beforeResolve 守卫 (2.5+)。
// 导航被确认。
// 调用全局的 afterEach 钩子。
// 触发 DOM 更新。
// 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。


// 全局前置守卫
// router.beforeEach((to,from,next)=>{
//   // if(to.path == '/login' || to.path == '/register'){
//   //   next();
//   // }else{
//   //   alert("请先登录！");  
//   //   next('/login');
//   // }
//   alert("离开了" + from.path);
//   next();
// })


// //全局后置钩子
// router.afterEach((to,from) =>{
//   alert("afterEach");
// })


