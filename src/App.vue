<template>
  <div id="container">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Barlow', sans-serif;
}

body {
  margin: 0;
  background-color: #dedad7;
}

#container {
  max-width: 97%;
  margin: auto;
}
</style>
