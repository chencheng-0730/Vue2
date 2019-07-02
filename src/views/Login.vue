<template>
  <div class="content">
    <div class="header">
      <van-nav-bar title="用户登录" left-arrow @click-left="back" class="tlt"/>
    </div>
    <div class="box">
      <div class="card">
        <p>账号登陆</p>
        <span>手机动态验证码登陆</span>
      </div>
      <van-cell-group>
        <van-field
          class="num"
          v-model="username"
          placeholder="请输入手机号">
          <van-icon slot="button" color="green" size="24px" />
        </van-field>

        <van-field
          class="sub"
          v-model="password"
          type="password"
          placeholder="请输入密码">
          <van-icon slot="button" size="24px" color="green"></van-icon>
        </van-field>
      </van-cell-group>
      <van-button type="primary" @click="login" size="large" class="but">登录</van-button>
      <div class="find">
        <p @click="register">免费注册</p>
        <span>找回密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '18355407451',
      password: '123456'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    register () {
      this.$router.push('/reg')
    },
    login () {
      axios.post('http://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        // console.log(res.data)
        if (res.data === 0) {
          console.log('登录失败')
        } else if (res.data === 1) {
          console.log('登录成功', res.data)
          localStorage.setItem('isLogin', 'ok')
          this.$router.push('/')
        } else if (res.data === 2) {
          console.log('没有该用户')
        } else {
          console.log('密码错误')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.but {
  background: #da4c47;
  border: none;
  border-radius: .05rem;
}
.tlt {
  background: #f66;
  color: #fff;
}
.box {
  padding: 0 .29rem;
  .card {
    overflow: hidden;
    font: .14rem/.22rem "";
    margin: .25rem 0 .25rem 0;
    p {
      float: left;
      color: #f66;
      border-bottom: .02rem solid #f66;
    }
    span {
      float: right;
    }
  }
  .find {
    overflow: hidden;
    padding: .4rem 0;
    p {
      float: left;
      color: #666666;
      border-bottom: .01rem solid #666;
      font-size: .14rem;
    }
    span {
      float: right;
      color: #666666;
      border-bottom: .01rem solid #666;
      font-size: .14rem;
    }
  }
  .sub {
    border: .01rem solid #d9d9d9;
    margin: .28rem 0;
  }
  .num {
    border: .01rem solid #d9d9d9;
    margin: .38rem 0;
  }
}
</style>
