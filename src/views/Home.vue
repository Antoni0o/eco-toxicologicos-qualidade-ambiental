<template>
  <section>
   <h1>Home</h1>
   <ContentCard
    title="Materia"
    text="Text Materia"
    route="/materia"
    link="/about"
    image="../assets/Logo.png"
  >
  </ContentCard>
  </section>
</template>

<script>
// @ is an alias to /src
import ContentCard from '@/components/ContentCard.vue';

export default {
  name: 'Home',
  components: {
    ContentCard,
  },
};
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    flex-direction: column;
    margin: 3em 5em;
  }
</style>
