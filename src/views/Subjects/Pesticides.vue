<template>
    <img src="@/assets/pesticides.png" alt="Avião jogando agrotóxicos em plantação">
  <section class="container">
    <h1>Agrotóxicos</h1>
    <p>
      Os agroquímicos são substâncias orgânicas que ajudam no controle da agricultura 
      e da pecuária. No entanto, isso pode desequilibrar o sistema ecológico, matando 
      os polinizadores que possuem papel fundamental desde a plantação até a nossa alimentação. 
      Ele possui diversas classificações que variam de acordo com 
      a doença ou praga que será combatida.
    </p>
    <p>
      Agora apresentaremos algumas vantagens e desvantagens do uso de agrotóxicos:
    </p>
    <span>
      Vantagens:
    </span>
    <ul>
      <li>Atuam no controle de pragas e doenças.</li>
      <li>Garantem o aumento da produtividade da plantação.</li>
      <li>Possuem custo menor do que agrotóxicos orgânicos.</li>
    </ul>
    <span>
      Desvantagens:
    </span>
    <ul>
      <li>O uso de agrotóxicos está relacionado a diversas problemas crônicos, 
        como alterações cromossômicas, câncer, doenças hepáticas, 
        doenças respiratórias, entre outros.</li>
      <li>O uso incorreto pode provocar danos como a contaminação do solo e recursos hídricos.</li>
      <li>O uso acima do permitido em alimentos pode trazer danos à saúde dos consumidores.</li>
      <li>Há riscos de intoxicação por parte dos trabalhadores que manuseiam os agrotóxicos.</li>
      <li>Alguns agrotóxicos podem resistir por muito tempo no solo, 
        mesmo depois que a plantação dos produtos seja coletada.</li>
    </ul>
    <p>
      Existem algumas formas de evitar o uso de agroquímicos no plantio. 
      Por exemplo o Controle Biológico, Agroecologia e o Manejo Integrado de Pragas(MIP).
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
      margin: auto 6rem;
    }
    h1 {
      font-size: 3.6rem;
    }
    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    span {
      font-size: 1.6rem;
      margin: 2rem auto 1rem auto;
    }
    ul {
      margin-bottom: 3rem
    }
    li {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
</style>

