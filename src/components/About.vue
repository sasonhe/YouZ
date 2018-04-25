<template>
<section class="padding-body about">
  <div class="line-top">
    <div class="line border-1px"></div>
    <div class="text">关于我们</div>
    <div class="line border-1px"></div>
  </div>
  <div class="btm-icon">
    <ul class="icon-list">
      <li><img src="../../static/images/icon_09.png" alt=""></li>
      <li><img src="../../static/images/icon_11.png" alt=""></li>
      <li><img src="../../static/images/icon_13.png" alt=""></li>
    </ul>
  </div>
</section>
</template>

<script>
export default {}
</script>

<style scoped>
.about .line-top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0.3rem 0px;
}

.about .line {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  top: -0.18rem;
}

.about .text {
  font-size: 0.34rem;
  font-weight: 400;
  padding: 0px 0.2rem;
}

.about .btm-icon {
  height: 1.65rem;
  padding: 0px 0.4rem;
}

.about .btm-icon .icon-list {
  display: flex;
}

.about .btm-icon ul li {
  width: 1.24rem;
  padding: 0px 0.24rem;
  flex: 1;
}

.about .btm-icon ul li img {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
