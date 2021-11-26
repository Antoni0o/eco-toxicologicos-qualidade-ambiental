<template>
  <main>
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="100000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index" :route="slide.route">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <router-link :to="slide.route">
            <img :src="require(`../assets/${slide.image}.png`)" alt="Matéria Em Destaque" />
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }} <span>Ver Mais</span></p>
          </router-link>
        </div>
      </Slide>
    </Carousel>
    <section class="content">
      <ContentCard
        title="Plástico"
        text="O plástico foi criado a mais de 100 anos pelo homem, 
        e pela primeira vez tivemos uma criação de um produto descartável 
        que demora mais tempo de degradação em relação ao tempo que foi criada. "
        link="/materias/plastico"
        img="plastic.png"
      />
      <ContentCard
        title="Agrotóxicos"
        text="Os agroquímicos são substâncias orgânicas que ajudam no controle da agricultura e da pecuária. 
        No entanto, isso pode desequilibrar o sistema ecológico, matando os polinizadores que possuem papel 
        fundamental desde a plantação até a nossa alimentação..."
        link="/materias/agrotoxicos"
        img="pesticides.png"
      />
      <ContentCard
        title="Fármacos"
        text="Os fármacos têm um papel muito importante em nossa civilização, 
        desde sua ação no tratamento de doenças até para aumentar a expectativa 
        de vida humana..."
        link="/materias/farmacos"
        img="pharmaceuticals.png"
      />
      <ContentCard
        title="Punições Legais Pelo Descarte Incorreto de Lixo"
        text="Algumas cidades brasileiras já têm iniciativas para combater o 
        descarte incorreto de lixo, grandes exemplos são o Rio de Janeiro, 
        Cuiabá, Joinville, Salvador e Teresina..."
        link="/materias/punicoes-legais-pelo-descarte-incorreto-de-lixo"
        img="wasteDisposalPunishments.png"
      />
      <ContentCard
        title="Quais são os principais problemas causados pelo descarte..."
        text="Muitas vezes não nos damos conta de que estamos poluindo os rios com 
        algumas ações que parecem inofensivas. Sabe aquela garrafa plástica ou 
        latinha de refrigerante jogada na rua? Ela pode chegar ao rio da sua cidade..."
        link="/materias/quais-sao-os-principais-problemas-causados-pelo-descarte-inadequado-de-lixo"
        img="mainProblemsByWasteDisposal.png"
      />
      <ContentCard
        title="A conservação dos corpos hídricos como garantia..."
        text="Em cada região do País acontecem ações programadas por grupos de pessoas que participam dos 
        chamados Planos de Bacias Hidrográficas. É através de um plano de recursos 
        hídricos de uma bacia hidrográfica..."
        link="/materias/a-conservacao-dos-corpos-hidricos-como-garantia-da-qualidade-da-agua-para-consumo-humano"
        img="conservationOfWaterBodies.png"
      />
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import ContentCard from '@/components/ContentCard/index.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import Slide from '@/components/Carousel/Slide.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    ContentCard,
    Slide,
  },
  setup() {
    const carouselSlides = [
      {
        title: 'Plástico',
        description: 'O plástico foi criado a mais de 100 anos pelo homem, e... ',
        image: 'plastic',
        route: '/materias/plastico'
      },
      {
        title: 'Agrotóxicos',
        description: 'Os agroquímicos são substâncias orgânicas que ajudam no controle da agricultura e da pecuária...',
        image: 'pesticides',
        route: '/materias/agrotoxicos'
      },
      {
        title: 'Fármacos',
        description: 'Os fármacos têm um papel muito importante em nossa civilização, desde sua ação no tratamento...',
        image: 'pharmaceuticals',
        route: '/materias/farmacos'
      },
    ];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';

  main {
    width: 100vw;
  .carousel {
    position: relative;
    max-height: 75vh;
    height: 75vh;
    .slide-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        @media screen and (max-width: 1024px) {
          max-width: 100%;
        }
      }
      h1 {
        position: absolute;
        top: 60%;
        left: 5%;
        z-index: 2;
        font-size: 4.8rem;

        color: white;
      }
      p {
        position: absolute;
        top: 72%;
        left: 5%;
        z-index: 3;

        font-size: 1.6rem;
        color: rgba(255, 255, 255, 0.781);
        span {
          font-weight: bold;
          font-size: 1.6rem;
        }
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24em auto;
    gap: 6rem;
  }
}
</style>
