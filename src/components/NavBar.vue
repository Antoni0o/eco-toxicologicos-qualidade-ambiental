<template>
  <header>
    <router-link to="/"><img src="../assets/logo.png" alt="Logo Projeto"></router-link>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 148px;
      height: 140px;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;

      background-color: $blue;
      border-bottom: 4em solid $ligth-blue;
      a {
        transition: .5s ease;

        padding: 1em 2em;

        color: white;
        font-size: $p;
        font-weight: bold;
        text-decoration: none;

        &:hover {
          background-color: $dark-blue;
        }
      }
    }
  }
</style>
