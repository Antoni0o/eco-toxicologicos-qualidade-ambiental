<template>
  <img src="@/assets/pharmaceuticals2.png" alt="Montanhas de plástico em um lixão">
  <section class="container">
    <h1>Fármacos</h1>
    <p>
      Os fármacos têm um papel muito importante em nossa civilização, 
      desde sua ação no tratamento de doenças até para aumentar a expectativa 
      de vida humana. Representam um alicerce para sustentar os desejos e o 
      estilo de vida da sociedade moderna. Porém, restos de medicamentos que 
      não foram totalmente utilizados estão sendo descartados incorretamente nos 
      rios, esgotos, lixos que podem atingir diretamente o solo e os lençóis 
      freáticos.
    </p>
    <p>
      Segundo dados levantados em 2010 pela Serviço Brasileiro de Saúde (BHS), 
      as estatísticas exemplificam que 1 quilograma descartado tem capacidade de 
      contaminar até 450 mil litros de água, os resíduos seguem para o aterro 
      comprometendo a qualidade do solo.
    </p>
    <span>
      Há algumas maneiras de diminuir a contaminação da água por fármacos:
    </span>
    <ul>
      <li>Diminua seu consumo, descontos em embalagens maiores são atrativas, 
        por conseguinte se descartados de forma errada podem atingir os cursos 
        d´água;</li>
      <li>Descarte seus medicamentos em postos com seções de reciclagem mais 
        próximo em sua região, algumas farmácias fazem a coleta de remédios 
        vencidos, frascos e materiais cortantes e pontiagudos, assim como 
        várias Unidades Básicas de Saúde (UBS) e supermercados;</li>
      <li>Utilize programas de devolução de medicamentos;</li>
      <li>Seja cuidadoso com a forma em que seus medicamentos são descartados.</li>
    </ul>
    <p>
      Em geral, o descarte correto de fármacos pode melhorar a qualidade 
      da água dos rios, consequentemente ajudando-nos a consumir uma água 
      mais limpa e saudável e menos poluente.
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
  ul {
    margin-bottom: 3rem;
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
      margin-bottom: 3rem
    }
    li {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
</style>

