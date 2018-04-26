<template>
<div class="banner">
  <!-- <ul>
    <li><a href="javascript:;"><img src="../assets/images/banner.jpg" alt=""></a></li>
  </ul> -->
  <slider :pages="pages" :sliderinit="sliderinit">
    <!-- slot  -->
  </slider>
</div>
</template>

<script>
import slider from 'vue-concise-slider';
export default {
  data() {
    return {
      //图片列表[arr]
      pages: [{
          title: '',
          style: {
            background: `url(${require('../../static/images/banner.jpg')})`
          }
        },
        {
          title: '',
          style: {
            background: `url(${require('../../static/images/banner.jpg')})`
          }
        },
        {
          title: 'slide3',
          style: {
            background: `url(${require('../../static/images/banner.jpg')})`
          },
        }
      ],
      //滑动配置[obj]
      sliderinit: {
        currentPage: 0, //当前页码
        thresholdDistance: 500, //滑动判定距离
        thresholdTime: 100, //滑动判定时间
        autoplay: 3000, //自动滚动[ms]
        loop: true, //循环滚动
        direction: 'horizontal', //方向设置，垂直滚动
        infinite: 1, //无限滚动前后遍历数
        slidesToScroll: 1, //每次滑动项数
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
