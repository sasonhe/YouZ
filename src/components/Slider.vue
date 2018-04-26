<template>
<div class="banner">
  <slider :pages="pages" :sliderinit="sliderinit"></slider>
</div>
</template>

<script>
import slider from 'vue-concise-slider';
export default {
  data() {
    return {
      //图片列表[arr]
      pages: [{
          html: `<img src='${require('../../static/images/banner.jpg')}'>`,
          style: {
            background: '#e7e7e7'
          }
        },
        {
          html: `<img src='${require('../../static/images/banner.jpg')}'>`,
          style: {
            background: '#333'
          }
        },
        {
          html: `<img src='${require('../../static/images/banner.jpg')}'>`,
          style: {
            background: '#ccc'
          },
        }
      ],
      //滑动配置[obj]
      sliderinit: {
        currentPage: 0,
        thresholdDistance: 100,
        thresholdTime: 300,
        loop: true,
        infinite: 1,
        autoplay: 3000,
        slidesToScroll: 1
      }
    }
  },
  components: {
    slider
  }
}
</script>

<style scoped>
.banner {
  height: 2.2rem;
}
</style>
