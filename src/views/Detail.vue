<template>
  <div class="content">
    <div class="header">
      <van-nav-bar title="详情页面" left-arrow @click-left="back" class="back"/>
    </div>
    <div class="box">
      <div class="img">
        <img :src="imgPath" alt="">
      </div>
      <div class="cont">
        <h4 class="pname">
          {{ pname }}
        </h4>
        <div class="a1">
          {{ advWords }}
        </div>
        <div class="price">
          {{ '￥' + price + '.00' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      pname: '',
      imgPath: '',
      price: '',
      advWords: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    // console.log(this.$route)
    const { pid, pname, imgPath } = this.$route.params
    axios.get(`https://m.jiuxian.com/m_v1/goods/detailPromo/${pid}`)
      .then(res => {
        // console.log(pname)
        this.pname = pname
        this.imgPath = imgPath
        this.price = res.data.productPromo.price
        this.advWords = res.data.productPromo.advWords
      }
      )
  }
}
</script>

<style lang="scss">
.back {
  background: #f66;
  color: #fff;
}
.img img{
  width: 100%;
  height: 2.8rem;
  // margin-left: 10%;
}
.cont {
  margin-left: .1rem;
  .price {
    color: #f55;
    font-size: .2rem
  }
  .a1 {
    color: #f55;
    font-size: .13rem;
    margin-top: .08rem
  }
  .clubDiscountTip {
    font-size: .12rem;
    margin-bottom: .1rem;
    img {
      height: .12rem;
    }
  }
}
</style>
