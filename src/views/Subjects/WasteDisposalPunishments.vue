<template>
  <section class="container">
    <img src="@/assets/wasteDisposalPunishments.png" alt="Montanhas de plástico em um lixão">
    <h1>Punições legais pelo descarte incorreto de lixo</h1>
    <p>
      Algumas cidades brasileiras já têm iniciativas para combater o descarte incorreto 
      de lixo, grandes exemplos são o Rio de Janeiro, Cuiabá, Joinville, Salvador e 
      Teresina. O cidadão que for flagrado descartando lixo incorretamente pode pagar 
      uma multa que varia de R$170 a R$3400, dependendo da quantidade de lixo jogada 
      nas vias públicas.
    </p>
    <p>
      Se o crime é culposo, a pena varia de multa até reclusão de um a quatro anos. 
      Já em casos em que ocorre poluição hídrica que cause 
      interrupção do abastecimento de água, a pena pode chegar a cinco anos de prisão.
    </p>
    <p>
      Importante ter consciência de que pequenas atitudes podem afetar bastante 
      o meio ambiente, a manutenção da infraestrutura das cidades e o bem-estar 
      geral da população.
    </p>
    <p>
      Por isso, busque sempre fazer o descarte adequado do lixo, 
      realizar a separação dele e diminuir o consumo de materiais não 
      biodegradáveis. Dessa forma, podemos diminuir o impacto do lixo 
      produzido pela sociedade.
    </p>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .container {
    margin-bottom: 10rem;
  }
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    filter: brightness(0.5);
    z-index: 99;
  }
  h1 {
    position: absolute;
    top: 45%;
    left: 10%;
    color: white;
    font-size: 6.4rem;
    z-index: 1;
  }
  p {
    font-size: 2.2rem;
    margin: 4rem 20rem;
  }
  span {
    margin: 2rem 20rem 1rem 20rem;
    font-size: 2.2rem;
    font-weight: bold;
  }
  li {
    margin: 1rem 20rem;
    font-size: 2.2rem;
  }
  
  @media (max-width: 1024px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      font-size: 3.6rem;
      top: 30%;
      left: 4%;
      z-index: 1;
    }
    p {
      margin: 2rem 6rem;
    }
    img {
      z-index: -1
    }
    span {
      margin: 2rem 6rem 1rem 6rem;
    }
    li {
      margin: 1rem 6rem;
    }
  }
</style>

