<template>
    <img src="@/assets/conservationOfWaterBodies.png" alt="Montanhas de plástico em um lixão">
  <section class="container">
    <h1>A conservação dos corpos hídricos como garantia da qualidade da água para consumo humano</h1>
    <p>
      Em cada região do País acontecem ações programadas por grupos de pessoas 
      que participam dos chamados Planos de Bacias Hidrográficas. É através de 
      um plano de recursos hídricos de uma bacia hidrográfica que as ações podem 
      se transformar em realidade. Mas é preciso saber que é necessário dinheiro 
      para realizar ações tão importantes, como: a construção de redes de coleta 
      e tratamento de esgotos, reflorestamentos de margens de rios e de fontes de 
      água, ou mesmo a análise da qualidade da água.
    </p>
    <p>
      E a responsabilidade de proteger o meio ambiente não é apenas de instituições 
      públicas e privadas, também é nosso dever, com pequenas ou grandes ações. 
      Desde preservar uma pequena nascente de agua ou o recolhimento e envio do 
      lixo residencial aos locais certos, são todas atitudes que contribuem para 
      qualidade da agua para o nosso consumo.
    </p>
    <p>
      Em caso de poluição e destruição das fontes naturais de água, 
      situações desastrosas podem acontecer: modificação no clima, 
      falta de água potável, aumento dos casos de doenças e até mesmo uma 
      situação de sobrevivência sem uma mínima condição digna.
    </p>
    <p>
      De acordo com pesquisas feitas com 22 pessoas que residem em Lorena, 
      54,5% da população avalia a condição dos como rios de Lorena como ruins, 
      31% avalia as condições como muito ruins e somente 13,6 avalia as condições 
      dos rios lorenenses boas.
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
    margin-bottom: 5rem;
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
      font-size: 2.4rem;
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

