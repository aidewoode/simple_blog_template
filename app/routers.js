import homeComponent from './components/home.vue';
import articleComponent from './components/article.vue';

export default function(router) {
  router.map({
    '/': {
      name: 'home',
      component: homeComponent
    },

    '/articles/:id': {
      name: 'article',
      component: articleComponent
    }
  });
}
