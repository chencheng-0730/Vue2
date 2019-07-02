<template>
  <div class="content">
    <div class="header">我的头部</div>
    <div class="box">我的内容</div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log(to)
    if (to.name === 'user') {
      if (localStorage.getItem('isLogin') === 'ok') {
        next('/login')
      } else {
        next('/reg')
      }
    }
  }
}
</script>
