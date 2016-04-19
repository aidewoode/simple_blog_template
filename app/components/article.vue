<template lang='jade'>
  .yue {{{article}}}
</template>
<script>
  import fetch from '../fetch';
  import marked from 'marked';

  export default {
    data() {
      return { article: null }
    },

    route: {
      data(transition) {
        this.startLoading();

        fetch('articles', this.$route.params.title, (response) => {
          transition.next({ article: marked(response) });
          this.stopLoading();
        });
      }
    }
  }
</script>
