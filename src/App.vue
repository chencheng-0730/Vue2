<template>
  <div id="app">
    <router-view>展示区</router-view>
    <router-view name="footer"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app {
  @include rect(100%, 100%);
}

#app {
  @include flexbox();
  @include flex-direction(column);
  .content {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
      @include text-align(center);
      @include line-height(.44rem)
    }
    .box {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul{
      @include rect(100%, 100%);
      @include flexbox();
      li {
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        &.router-link-active {
          @include text-color(#f66);
        }
      }
    }
  }
}
</style>
