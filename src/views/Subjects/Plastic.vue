<template>
  <img src="@/assets/plastic.png" alt="Montanhas de plástico em um lixão">
  <section class="container">
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
      display: flex;
      flex-direction: column;
      justify-content: center;
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
      margin: 2rem auto 0 auto;
    }
    ul {
      margin-bottom: 4rem;
      li {
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }
    }
  }
</style>

