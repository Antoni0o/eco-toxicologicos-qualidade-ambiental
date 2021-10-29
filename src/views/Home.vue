<template>
  <main>
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpeg`)" alt="" />
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
    const carouselSlides = ['bg-1', 'bg-2', 'bg-3'];
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
        @media screen and (max-width: 1024px) {
          width: 100vw;
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
