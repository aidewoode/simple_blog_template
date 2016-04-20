<template lang='jade'>
  .articles-container
    ul.articles-list
    li.articles-list__item(v-for="article of articles | orderBy 'id' -1")
      .articles-list__date {{ article.date | formattedDate }}
      .articles-list__title
        a.articles-list__link(v-link="{ name: 'article', params: { id: article.id }}") {{article.title}}
</template>
<script>
  import articles from '../data/articles.json'

  export default {
    data() {
      return {
        articles: articles.data
      }
    }
  }
</script>
<style>
  .articles-list__item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3.33rem;
    align-items: center;
  }

  .articles-list__date {
    width: 30%;
    color: rgb(101, 103, 101);
    font-size: 1rem;
  }

  .articles-list__title {
    width: 70%;
    font-size: 1.22rem;
    font-weight: 400;
    font-family: 'Merriweather', 'Hiragino Sans GB', 'Hiragino Sans GB W3', 'Microsoft YaHei', 'Wenquanyi Micro Hi', sans-serif;
  }

  .articles-list__link {
    color: rgb(28, 28, 28);
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    .articles-list__date {
      width: 100%;
    }
  }
</style>
