<template>
  <main>
    <router-link to="/sobre/projeto">
      <div class="projectCard">
        <h1>Sobre o Projeto</h1>
        <img src="@/assets/right-arrow.png">
      </div>
    </router-link>
    <router-link to="/sobre/equipe">
      <div class="projectCard">
        <h1>Sobre a Equipe</h1>
        <img src="@/assets/right-arrow.png">
      </div>
    </router-link>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3em 5em;
    height: 50vh;
    a {
      text-decoration: none;
      color: black;
    }
    .projectCard {
      display: flex;
      align-items: center;

      transition: .3s;
      cursor: pointer;
      background-color: rgba(240, 239, 239, 0.404);

      border-radius: 5px;
      margin: 20em 50em;
      padding: 15em 10em;
      h1 {
        font-size: 3.6rem;
      }
      img {
        width: 28px;
        height: 28px;
        margin-left: 1rem;
      }
      &:hover {
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
      }
      @media (max-width: 1024px) {
        margin: 20em 30em;
      }
    }
  }
</style>
