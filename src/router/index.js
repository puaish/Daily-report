import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/IndexView/IndexView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView/LoginView.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/MessageView/MessageView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
// /user/wx-login
router.beforeEach((to,form,next)=>{
  let userID = localStorage.getItem("userId");
  if(to.path=='/login'){
    // localStorage.removeItem("userId");
    if(userID){
      next({path:'/'})
    }else{
      next();
    }
  }
  if(!userID&&to.path!='/login'){
    next({path:'/login'})
  }else{
    next();
  }
})
export default router
