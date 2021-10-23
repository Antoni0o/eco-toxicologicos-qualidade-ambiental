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
  /* TODO: Finalize Styles */
  $dark-blue: #0068BE;
  $blue: #008CFF;
  $ligth-blue: #50B3FF;
  section {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6em 0 2em 0;
    margin-top: 3em;

    border-top: 0.5em solid $ligth-blue;
    background-color: $blue;
    color: white;
  }
</style>
