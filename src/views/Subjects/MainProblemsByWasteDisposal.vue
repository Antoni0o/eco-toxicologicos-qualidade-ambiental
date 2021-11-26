<template>
  <section class="container">
    <img src="@/assets/mainProblemsByWasteDisposal.png" alt="Montanhas de plástico em um lixão">
    <h1>Quais são os principais problemas causados pelo descarte inadequado de lixo?</h1>
    <p>
      Muitas vezes não nos damos conta de que estamos poluindo os rios com algumas 
      ações que parecem inofensivas. Sabe aquela garrafa plástica ou latinha de refrigerante 
      jogada na rua? Ela pode chegar ao rio da sua cidade.Muitas vezes não nos damos conta de 
      que estamos poluindo os rios com algumas ações que parecem inofensivas. Sabe aquela garrafa 
      plástica ou latinha de refrigerante jogada na rua? Ela pode chegar ao rio da sua cidade.
    </p>
    <p>
      Quando chove, a água transporta esses resíduos até as galerias pluviais, 
      responsáveis por levar a água da chuva até os rios, córregos etc. 
      E, dessa forma, ocorre a poluição deles.
    </p>
    <p>
      Além disso, o lixo pode entupir as galerias pluviais, acarretando grandes problemas 
      de saneamento, infraestrutura, enchentes e saúde pública. Ao alcançar os rios, esses 
      resíduos causam ainda mais transtornos.
    </p>
    <p>
      O descarte inadequado de lixo leva à formação de ilhas de lixo nos rios, prejudicando a 
      sobrevivência da fauna e flora de diversas regiões. Os efeitos podem ser sentidos por muito 
      tempo, visto que alguns materiais, como o plástico, demoram centenas de anos para se decompor.
    </p>
    <p>
      Outro problema causado pelo descarte de lixo nos rios é a proliferação de insetos vetores de doenças, 
      como o Aedes aegypti, que causa a dengue, a zica e a chikungunya. Isso ocorre devido 
      ao acúmulo de água parada no lixo, formando o criadouro ideal para esse mosquito.
    </p>
    <p>
      Além disso, muitos dos nossos rios deságuam no oceano e, assim, levam lixo para as praias, 
      tornando-as impróprias para o banho e desequilibrando o ecossistema. Alguns animais confundem os 
      resíduos plásticos com comida e têm graves consequências, chegando muitas vezes ao óbito — a 
      contaminação de plástico nos oceanos mata, anualmente, 100 mil animais marinhos.
    </p>
    <p>
      Quando nos referimos a Lorena, das 22 pessoas que procuramos, 
      77,3% se preocupa com os problemas de poluição nos rios, 18,2% parcialmente se 
      preocupa e apenas 4,5% não se preocupam com os problemas consequentes da poluição dos rios. 
      Contudo, todos acreditam que essas condições são prejudiciais a sobrevivência dos seres vivos.
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
    filter: brightness(0.2);
    z-index: 99;
  }
  h1 {
    position: absolute;
    top: 45%;
    left: 10%;
    color: white;
    font-size: 4.8rem;
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
      top: 28%;
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

