export default function(vue) {
  vue.mixin({
    methods: {
      startLoading() {
        this.$root.loading = true;
      },

      stopLoading() {
        this.$root.loading = false;
      }
    }
  });
}
