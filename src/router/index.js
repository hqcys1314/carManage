
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as pages from '../pages';
import * as HomeConstants from '../pages/home/homeConstants';
import {utils} from '../tools';

Vue.use(VueRouter);

const routes = [];
const routePaths = [];

for (const key in pages) {
  // 存放所有的路径
  routePaths.push(pages[key].path);
  // let ss='../pages/' + pages[key].name+'/'+pages[key].name + '.vue';
  // if(pages[key].path!='/home'&&pages[key].path!=''){
  //   pages[key].component=(resolve=>require([`${ss}`], resolve))(ss);
  // }
  // 组装路由
  routes.push(pages[key]);
  //console.log(pages[key].component);

}
// 404页面配置，一定要放在最后
const Other = {
  path: '*',
  redirect: {
    name: HomeConstants.NAME
  },
  children:[
         { path: '*/*', redirect:{
           name: HomeConstants.NAME
         }
     }
    ]
};
routePaths.push(Other.path);
routes.push(Other);
const router = new VueRouter({
  mode: 'history',
  routes
});

// 不在路径列表中的请求重定向到首页
router.beforeEach((to, from, next) => {
        utils.setDocumentTitle(to.meta.title || '');
          // 判断页面是否需要登录
         if (to.meta.requireAuth) {

         } else {
             next();
         }
});


export default router;
