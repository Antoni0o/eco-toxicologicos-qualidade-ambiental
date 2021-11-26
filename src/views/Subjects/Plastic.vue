<template>
  <section class="container">
    <img src="@/assets/plastic.png" alt="Montanhas de plástico em um lixão">
    <h1>Plástico</h1>
    <p>
      O plástico foi criado a mais de 100 anos pelo homem, 
      e pela primeira vez tivemos uma criação de um produto descartável 
      que demora mais tempo de degradação em relação ao tempo que foi criada. 
      Sua produção cresceu tanto em tão pouco tempo que hoje o seu descarte 
      está preocupando diversos especialistas sobre a poluição ambiental.
    </p>
    <p>
      Cerca de 80% do plástico produzido no planeta vai para o mar, 
      sendo que somente 20% destes 80% totais são de descartes feitos 
      por navios ou outros meios fluviais de locomoção.
    </p>
    <p>
      Esse plástico na água pode absorver resíduos como pesticidas,
      metais pesados que são extremamente poluentes ao meio ambiente. 
      Esses poluentes podem entrar em contato com os animais aquáticos e 
      humanos e causar disfunções hormonais, neurológicas, reprodutivas e 
      imunizantes nos seres vivos.
    </p>
    <span>
      Há algumas maneiras de diminuir este uso exorbitante e alarmante de plásticos:
    </span>
    <ul>
      <li>A proibição de uso de sacolas de supermercados e com tecidos parecidos.</li>
      <li>Não utilização de pratos e copos descartáveis.</li>
      <li>Utilização de produtos de papel como canudos.</li>
    </ul>
    <p>
      Em geral, o plástico tem sido um facilitador e um produto rápido 
      que ajuda no controle das coisas atualmente, porém ao mesmo tempo 
      vem sendo um gerador de problemas graves e seu controle pode ajudar 
      na melhora da natureza.
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
    top: 55%;
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
      font-size: 4.8rem;
      top: 55%;
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

