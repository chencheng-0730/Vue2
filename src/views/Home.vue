<template>
  <div class="content">
    <div class="header">首页头部</div>
    <div class="box">
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="https://img09.jiuxian.com/bill/2019/0628/662283ccd6b34e14bb4ed17f35cbc5a8.png" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img07.jiuxian.com/bill/2019/0622/c2d6dc5958304b19a5bfe099ca214157.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img10.jiuxian.com/bill/2019/0628/a55547574b4e4dc7bd4ed7f7abade5cd.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img10.jiuxian.com/bill/2019/0622/ab3fd99c76cd4dca841e5171804a7e98.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img06.jiuxian.com/bill/2019/0622/874474d000f2459cafc27e86c4fee828.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img07.jiuxian.com/bill/2019/0627/31ba1118d45542aab9c8c49dcbf9a426.jpg" alt=""></van-swipe-item>
        </van-swipe>
      </div>
      <List :list="$store.state.home"></List>
      <!-- <List :list="list"></List> -->
    </div>
  </div>
</template>

<script>
// import axios from '../plugins/axios'
import List from '../components/List'
import * as types from '../plugins/store/types'
export default {
  name: 'home',
  // data () {
  //   return {
  //     // list: []
  //   }
  // },
  components: {
    List
  },
  mounted () {
    this.$store.dispatch(types.UPDATE_HOME)
  }
}
</script>

<style lang="scss">
.banner {
  height: 1.82rem;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
