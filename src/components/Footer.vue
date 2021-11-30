<template>
  <section class="container">
    <section class="columns">
      <section class="about">
        <h2>Sobre:</h2>
        <ul>
          <li><a href="/sobre/projeto">Projeto</a></li>
          <li><a href="/sobre/equipe">Equipe</a></li>
        </ul>
      </section>
    </section>
    <img src="../assets/logo.png" alt="">
    <section class="footer">
      <span>Desenvolvido por
        <strong>Equipe de Desenvolvimento do 2° NTI</strong> -
      ETEC Lorena, SP</span>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    border-top: 4em solid $ligth-blue;
    background-color: $blue;

    img {
      border-top: 4em solid $ligth-blue;
      margin: 0;
      width: 124px;
      height: 124px;
      position: absolute;
      left: 0;
      transform: translate(50%, 40%);
      @media (max-width: 1024px) {
        position: relative;
        border: 4em solid $ligth-blue;
        transform: none;
        margin: 4em;
      }    
    }
    .footer {
      margin: 0 2rem;
      display: flex;
      align-items: baseline;
      text-align: center;
      gap: 100em;
      span {
        margin-bottom: 2rem;
        font-size: $p;
        color: white;
        strong {
          font-size: $p;
        }
        @media(max-width: 1024px) {
          margin-top: 2rem;
        }
      }
    }
    .columns {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20em auto;
        h2 {
          font-size: 3.6rem;
          margin-bottom: 0.4em;
        }
        ul {
          list-style-type: none;
          font-size: 3.6rem;
          li {
            text-decoration: none;
            margin-bottom: 1em;
            a {
              transition: .3s;
              color: rgba(255, 255, 255, 0.658);
              text-decoration: none;
              &:hover {
                color: white;
              }
            }
          }
        }
      }
    }
  }
</style>
