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
  /* Scroll */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #008cff;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #0068be;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #0068be;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>
