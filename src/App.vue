<template>
  <NavBar></NavBar>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  @import 'src/vars.scss';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;

    width: 100%;
    overflow-x: hidden;

    font-size: 62.5%;
  }

  #app {
    font-family: 'Roboto', sans-serif;
  }
</style>
