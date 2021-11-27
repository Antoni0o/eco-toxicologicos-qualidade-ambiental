<template>
  <img src="@/assets/wasteDisposalPunishments.png" alt="Montanhas de plástico em um lixão">
  <section class="container">
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
  @import 'src/vars.scss';
  .container {
    margin-bottom: 10rem;
    margin: auto 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    filter: brightness(0.2);
    z-index: 99;
  }
  h1 {
    color: $blue;
    font-size: 4.8rem;
    margin-right: 4rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
  span {
    margin: 2rem auto 1rem auto;
    font-size: 2.2rem;
    font-weight: bold;
  }
  li {
    margin: 1rem auto;
    font-size: 2.2rem;
  }
  
  @media (max-width: 1024px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto 6rem;
    }
    h1 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    span {
      font-size: 1.6rem;
      margin: 2rem auto 1rem auto;
    }
    li {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
</style>
