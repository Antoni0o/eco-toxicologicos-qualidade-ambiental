<template>
  <section>
    <!-- TODO: Create a navigation list and other links for contact -->
    <span>Desenvolvido por
      <strong>Equipe de Desenvolvimento do 2* NTI</strong> -
    ETEC Lorena, SP</span>
  </section>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 4em solid $ligth-blue;
    background-color: $blue;

    span {
      margin: 10rem 2rem;
      font-size: $p;
      color: white;
      strong {
        font-size: $p;
      }
    }
  }
</style>
