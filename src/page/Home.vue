<template>
<div>
  <Slider></Slider>
  <Nav></Nav>
  <HotArticle></HotArticle>
  <TypeArticle></TypeArticle>
  <About></About>
</div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Nav from '../components/Nav.vue'
import HotArticle from '../components/HotArticle.vue'
import TypeArticle from '../components/TypeArticle.vue'
import About from '../components/About.vue'
export default {
  components: {
    Slider,
    Nav,
    HotArticle,
    TypeArticle,
    About
  }
}
</script>

<style>
</style>
