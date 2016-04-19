<template lang='jade'>
.site-content
  nav.global-nav
    a.global-nav__title(v-link="{name: 'home'}") {{ config.blogName }}
    ul.global-nav__list
      li.global-nav__item
        a.global-nav__link(href='{{ config.githubAddress }}' target='_blank')
          i.icon.icon--github
      li.global-nav__item
        a.global-nav__link(href='mailto:{{ config.mailAddress }}')
          i.icon.icon--mail
      li.global-nav__item
        a.global-nav__link(href='#')
          i.icon.icon--rss
     loader(v-if='loading')
   .content-container
     router-view
</template>
<script>
  import loader from './components/loader.vue';
  import config from './data/config.json';

  export default {
    data() {
      return {
        loading: false,
        config: config
      };
    },

    components: {
      'loader': loader
    }
  }
</script>
