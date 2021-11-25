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
            <img :src="require(`../assets/${slide.image}.jpeg`)" alt="Matéria Em Destaque" />
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }} <span>Ver Mais</span></p>
          </router-link>
        </div>
      </Slide>
    </Carousel>
    <section class="content">
      <ContentCard
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat..."
        link="/about"
        img="Rectangle.png"
      />
      <ContentCard
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat..."
        link="/about"
        img="Rectangle.png"
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
        title: 'Materia 1',
        description: 'Descrição 2',
        image: 'bg-1',
        route: '/materias/materia1'
      },
      {
        title: 'Materia 2',
        description: 'Descrição 2',
        image: 'bg-2',
        route: '/materias/materia2'
      },
      {
        title: 'Materia 3',
        description: 'Descrição 3',
        image: 'bg-3',
        route: '/materias/materia3'
      },
    ];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';

  main {

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
        min-width: 100%;
        height: 100%;
        object-fit: cover;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        @media screen and (max-width: 1024px) {
          width: 100vw;
        }
      }
      h1 {
        position: absolute;
        top: 60%;
        left: 10%;
        z-index: 2;
        font-size: 4.8rem;

        color: white;
      }
      p {
        position: absolute;
        top: 72%;
        left: 10%;
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
