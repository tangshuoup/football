import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index'
import search from '../components/search/search'
import mine from '../components/mine/mine'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',     
      component: index
    },
    {
    	path: '/index',
    	name: 'index',
    	component: index,
      children: [{
        path: 'movieDetial',
        component(resolve) {
          require.ensure(['../components/moive/movie.vue'], () => {
            resolve(require('../components/moive/movie.vue'));
          });
        },
        children: [{
          path: 'essay',
          component(resolve) {
              require.ensure(['../components/essay/essay.vue'], () => {
                resolve(require('../components/essay/essay.vue'));
            });
          }
        }]       
      }]
    },
    {
    	path: '/search',
    	name: 'search',
    	component: search
    },
    {
    	path: '/mine',
    	name: 'mine',
    	component: mine
    }   
  ],
  'linkActiveClass': 'active'
});
