<template>
  <main>
    <ContentCard
      title="Lorem ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat..."
      link="/about"
      img="Rectangle.png"
    />
    <ContentCard
      title="Lorem ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat..."
      link="/about"
      img="Rectangle.png"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import ContentCard from '@/components/ContentCard/index.vue';

export default {
  name: 'Home',
  components: {
    ContentCard,
  },
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    margin: 10em auto;
  }
</style>
