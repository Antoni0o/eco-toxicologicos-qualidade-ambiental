<template>
  <main class="teamWrapper">
    <h1>Equipes:</h1>
    <strong>Desenvolvimento</strong>
    <ul>
      <li>Antonio Dias</li>
      <li>Igor Finoti</li>
      <li>Luiz Fernando</li>
      <li>Victor Hugo</li>
    </ul>
    <strong>Artes e Design</strong>
    <ul>
      <li>Analice Vieira</li>
      <li>Dafne de Souza</li>
      <li>Enry Andrade</li>
      <li>Gabriel Godoy</li>
      <li>Maria Eduarda Cortez</li>
      <li>Maria Eduarda dos Santos</li>
      <li>Michele Sophia</li>
    </ul>
    <strong>Conteúdo</strong>
    <ul>
      <li>Alisson Alexandre</li>
      <li>Bruno Calebe</li>
      <li>Dafne de Souza</li>
      <li>Davi José</li>
      <li>Gabriel Joffre</li>
      <li>Luis Ricardo</li>
      <li>Maria Eduarda Cortez</li>
    </ul>
    <strong>Pesquisa</strong>
    <ul>
      <li>Maria Eduarda dos Santos</li>
      <li>Kevin Oliveira</li>
      <li>Mical Philippini</li>
      <li>Thales Soares</li>
    </ul>
    <strong>Projeção</strong>
    <ul>
      <li>Claudio Henrique</li>
      <li>João Lucas</li>
      <li>João Vitor</li>
      <li>Kauê Hiago</li>
      <li>Lucas Eduardo</li>
      <li>Luiz Otávio</li>
      <li>Mateus Aquino</li>
      <li>Paulo César</li>
      <li>Pedro Henrique</li>
      <li>Raquel Cecília</li>
    </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .teamWrapper {
    margin: 4rem 15rem;
    h1 {
      font-size: 4.8rem;
      margin-bottom: 2rem;
    }
    strong {
      font-size: 2.4rem;
    }
    ul {
      margin-bottom: 2rem;
      li {
        font-size: 1.8rem
      }
    }
  }
  @media(max-width: 1024px) {
    .container {
      margin: 4rem 5rem;
    }
  }
</style>
