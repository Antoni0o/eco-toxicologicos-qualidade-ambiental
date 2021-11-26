<template>
  <section class="contentCard">
      <div class="image">
        <img :src="require(`@/assets/${img}`)" :alt="title">
      </div>
      <CardContent class="content"
        :title="title"
        :text="text"
        :link="link"
      >
      </CardContent>
  </section>
</template>

<script>
import CardContent from './CardContent.vue';

export default {
  name: 'ContentCard',
  props: {
    title: String,
    text: String,
    link: String,
    img: String,
  },
  components: {
    CardContent,
  },
};
</script>

<style lang="scss" scoped>
.contentCard {
  max-height: 260px;
  width: 75%;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 10em;

  border: 1px solid rgba(159, 159, 159, 0.6);
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.1);

  .image {
    img {
      max-height: 258px;
      width: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1024px) {
    max-height: 100%;
    display: block;

    img {
      width: 100%;
    }

    .content {
      margin-left: 10em;
    }
  }
}
</style>
