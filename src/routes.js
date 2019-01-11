import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import PhoneNumber from './components/about/contact/PhoneNumber'
import PersonName from './components/about/contact/PersonName'


export const routes = [
    // {path:"/",name:'homeLink',component:Home},
    {path:"/",name:'homeLink',components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:"/menu",name:'menuLink',component:Menu},
    {path:"/admin",name:'adminLink',component:Admin,
      // beforeEnter: (to, from, next) => {
      //   // ...路由独有守卫
      //   // alert(from.path +'——》'+ to.path);
      //   alert("欢迎来到管理页面")
      //   next();
      // }
    },
    {path:"/about",name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:"/about/contact",name:'contactLink',redirect:'/about/contact/personName',component:Contact,children:[
        {path:"/about/contact/phoneNumber",name:'phoneNumber',component:PhoneNumber},
        {path:"/about/contact/personName",name:'personName',component:PersonName},
      ]},
      {path:"/about/delivery",name:'deliveryLink',component:Delivery},
      {path:"/about/history",name:'historyLink',component:History},
      {path:"/about/orderingGuide",name:'orderingGuideLink',component:OrderingGuide},
    ]},
    {path:"/login",name:'loginLink',component:Login},
    {path:"/register",name:'registerLink',component:Register},
    {path:"*",redirect:'/'}
    
  ]