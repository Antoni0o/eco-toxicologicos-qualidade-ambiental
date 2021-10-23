<template>
  <header>
    <router-link to="/"><img src="../assets/Logo.png" alt="Logo Projeto"></router-link>
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
  $dark-blue: #0068BE;
  $blue: #008CFF;
  $ligth-blue: #50B3FF;
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
      a {
        transition: .5s ease;

        padding: 1em 2em;

        color: white;
        font-weight: bold;
        text-decoration: none;

        &:hover {
          background-color: $dark-blue;
        }
      }
    }
  }
</style>
