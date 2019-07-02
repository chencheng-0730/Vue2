<template>
  <ul class="list">
    <router-link tag="li" :to="{name: 'detail', params: {
    pid: item.commonProductInfo.pid,
    pname: item.commonProductInfo.pname,
    imgPath: item.commonProductInfo.imgPath
    }}"
    v-for="(item, index) of list" :key="item.commonProductInfo.pid"
    >
      <div class="img">
        <img :src="item.commonProductInfo.imgPath" alt="">
      </div>
      <div class="info">
        <h6>{{ item.commonProductInfo.pname}} --- {{ index }}</h6>
        <p>
          {{ '￥' + item.commonProductInfo.actPrice + '.00'}}
          {{ '￥' + item.commonProductInfo.jxPrice + '.00'}}
        </p>
      </div>
    </router-link>
    <!-- <li v-for="(item, index) of list" :key="item.commonProductInfo.pid">
      <div class="img">
        <img :src="item.commonProductInfo.imgPath" alt="">
      </div>
      <div class="info">
        <h6>{{ item.commonProductInfo.pname}} --- {{ index }}</h6>
        <p>
          {{ '￥' + item.commonProductInfo.actPrice + '.00'}}
          {{ '￥' + item.commonProductInfo.jxPrice + '.00'}}
        </p>
      </div>
    </li> -->
  </ul>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.list {
  overflow: hidden;
  li {
  float: left;
  @include rect(48%, 2.67rem);
  @include background-color(#fff);
  @include margin(5px 1% 0);

  .img {
    @include rect(100%, 1.65rem);
    img {
      @include rect(100%, 100%)
    }
  }
  .info {
    p {
      @include color(#f00);
      s {
        @include color(#ccc);
        text-decoration: line-through;
      }
    }
  }
  }
}
</style>
