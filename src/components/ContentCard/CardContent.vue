<template>
  <div class="content">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <router-link class="link" :to="link">Ler Mais</router-link>
  </div>
</template>

<script>
export default {
  name: 'CardContent',
  props: {
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'src/vars.scss';
  .content {
    display: flex;
    flex-direction: column;
    h2 {
      text-transform: uppercase;
      font-size: $h2;
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: $p;
      color: $gray;
      width: 90%;
    }
    .link {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      transition: .5s ease;
      border: 0.4rem solid $blue;

      margin-top: auto;
      margin-left: auto;
      margin-right: 3em;
      margin-bottom: 2rem;
      padding: 12px 44px; 

      text-decoration: none;
      text-transform: uppercase;
      color: $blue;
      font-size: $p;
      font-weight: bold;
      text-align: center;

      &:hover {
        background-color: $blue;
        color: white;
      }
    }
    @media screen and (max-width: 1024px) {
      h2 {
        font-size: 2.8rem;
      }
      .link {
        display: block;
        margin: 6.5em auto 1em auto;
      }
    }
  }
</style>
