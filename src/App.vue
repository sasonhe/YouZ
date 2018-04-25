<template>
<section id="app">
  <div class="header">
    <Header></Header>
  </div>
  <router-view/>
  <Footer></Footer>
</section>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#app {
  max-width: 720px;
  margin: 0 auto;
}

section {
  background: #eeeaea;
}
</style>
