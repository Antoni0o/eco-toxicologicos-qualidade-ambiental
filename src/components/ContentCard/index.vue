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
  width: 75%;
  display: flex;
  gap: 10em;

  border: 1px solid rgba(159, 159, 159, 0.6);
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.1);

  .img {
    max-width: 478px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    img {
      max-width: 100%;
      max-height: 250px;
    }

    .content {
      margin-left: 10em;
    }
  }
}
</style>
