<template>
<header class="header">
  <a href="javascript:;" class="logo"><img class="img" src="../../static/images/Logo.jpg" alt=""></a>
  <div class="login">
    <a href="javascript:;" class="user"><img src="../../static/images/icoUser.jpg" alt=""></a>
    <a href="javascript:;" class="menu"><img src="../../static/images/icoMenu.jpg" alt=""></a>
  </div>
</header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  padding: 0.23rem 0.2rem;
  height: 0.42rem;
  background: #fff;
}

.header .logo {
  display: block;
  width: 1.23rem;
  height: 0.42rem;
  float: left;
}

.header .login {
  float: right;
  width: 0.98rem;
  height: 0.42rem;
}

.header .login a {
  float: left;
}

.header .login .user {
  display: inline-block;
  width: 0.33rem;
  height: 0.38rem;
  margin-right: 0.28rem;
}

.header .login .menu {
  display: inline-block;
  padding-top: 0.06rem;
  width: 0.36rem;
  height: 0.31rem;
}
</style>
