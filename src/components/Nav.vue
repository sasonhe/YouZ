<template>
<section class="border-1px margin-btm padding-body">
  <nav class="nav">
    <a href="javascript:;">
      <img src="../../static/images/icoNav_1.jpg" alt="">
      <span>运营推广</span>
    </a>
    <a href="javascript:;">
      <img src="../../static/images/icoNav_2.jpg" alt="">
      <span>产品经理</span>
    </a>
    <a href="javascript:;">
      <img src="../../static/images/icoNav_3.jpg" alt="">
      <span>UI设计</span>
    </a>
    <a href="javascript:;">
      <img src="../../static/images/icoNav_4.jpg" alt="">
      <span>WEB前端</span>
    </a>
    <a href="javascript:;">
      <img src="../../static/images/icoNav_5.jpg" alt="">
      <span>程序开发</span>
    </a>
  </nav>
</section>
</template>

<script>
export default {}
</script>

<style scoped>
.margin-btm{
  height: 1.82rem;
}
.nav {
  padding: 0.3rem 0;
  display: flex;
}

.nav a {
  flex: 1;
  display: inline-block;
  text-align: center;
}

.nav a span {
  display: block;
  font-size: 0.24rem;
  padding-top: 0.15rem;
  color: #888;
}

.nav a img {
  width: 0.86rem;
  height: 0.86rem;
  margin: 0 auto;
}
</style>
