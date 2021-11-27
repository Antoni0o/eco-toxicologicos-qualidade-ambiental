<template>
  <section class="container">
    <img src="@/assets/conservationOfWaterBodies.png" alt="Montanhas de plástico em um lixão">
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
  }
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    filter: brightness(0.2);
  }
  h1 {
    color: $blue;
    font-size: 4.8rem;
    margin-left: 10rem;
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
      font-size: 2.4rem;
      margin-left: 2rem;
    }
    p {
      margin: 2rem 6rem;
    }
    span {
      margin: 2rem 6rem 1rem 6rem;
    }
    li {
      margin: 1rem 6rem;
    }
  }
</style>

