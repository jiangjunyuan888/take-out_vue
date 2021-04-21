import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "../pages/MSite/MSite";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import FooterGuide from "../components/FooterGuide/FooterGuide";

//声明使用插件
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'footerguide',
  //   component: FooterGuide
  // },
  {
    path: '/msite',
    component: MSite,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
]

const router = new VueRouter({
  //所有路由
  routes
})

export default router
