<template>
  <!-- TODO: Make the Image Visible -->
  <section>
    <div class="image">
      <img :src="importImg()" :alt="title">
    </div>
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <router-link :to="link">Ler Mais</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentCard',
  methods: {
    importImg() {
      return `${this.image}`;
    },
  },
  props: {
    image: {
      default: '../assets/Rectangle.png',
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
/* TODO: Styles */

</style>
