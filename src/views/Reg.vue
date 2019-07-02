<template>
  <div class="content">
    <header class="header">用户注册</header>
    <div class="box">
      <van-cell-group>
        <van-field
          class="sub"
          v-model="username"
          required
          clearble
          placeholder="请输入手机号"
          :error-message="usernameState"
        />
        <van-icon slot="button" color="green" size="24px" :name="usernameicon" />

        <van-field
          v-model="sms"
          class="sub"
          center
          required
          clearable
          placeholder="请输入短信验证码">
          <van-button slot="button" @click="sendCode" size="small" type="primary" class="lv">发送验证码</van-button>
        </van-field>

        <van-field
          v-model="password"
          class="sub"
          type="password"
          required
          clearable
          placeholder="请输入密码"
          :error-message="passwordState">
          <van-icon slot="button" size="24px" color="green" :name="passwordicon"></van-icon>
        </van-field>
      </van-cell-group>
      <van-button type="primary" @click="register" size="large" class="zhuce">点击注册</van-button>
      <!-- <van-button type="default" @click="login" size="large" class="zhuce1">已有账号点击登陆</van-button> -->
      <div class="find1">
        <p @click="login">已有账号点击登陆</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
import axios from 'axios'
Vue.use(Toast)

export default {
  data () {
    return {
      username: '',
      password: '',
      sms: '',
      code: '1'
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameicon () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return ''
      } else if (this.username.length !== 11) {
        return ''
      } else {
        return 'checked'
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (!(/^(\w){6,20}$/.test(this.password))) {
        return '密码格式错误： 只能输入6-20个字母，数字，下划线'
      } else {
        return ''
      }
    },
    passwordicon () {
      if (!(/^(\w){6,20}$/.test(this.password))) {
        return ''
      } else {
        return 'checked'
      }
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    sendCode () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        this.username = ''
        Toast('手机号输入有误')
      } else {
        this.getCode()
      }
    },
    getCode () {
      axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.username}`)
        .then(res => {
          console.log(res.data)
          if (res.data === 1) {
            Toast('该手机号已被注册')
          } else if (res.data === 0) {
            Toast('获取验证码失败')
          } else {
            // 检验输入的至是不是正确的
            this.code = res.data.code
          }
        })
    },
    register () {
      if (this.sms !== this.code) {
        this.sms = ''
        Toast('验证码输入错误')
        return
      }

      if (this.usernameicon !== 'checked') {
        Toast('请输入正确的手机号码')
        return
      }

      if (this.passwordicon !== 'checked') {
        Toast('请输入正确的密码')
        return
      }
      console.log(this.username, this.password)
      this.registerFn()
    },
    registerFn () {
      axios.post('http://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('注册失败')
        } else if (res.data === 2) {
          Toast('该用户已注册')
        } else {
          Toast('注册成功')
          // 使用状态管理器
          localStorage.setItem('isLogin', 'ok')
          // this.$store.commit('changeLoginState', 'ok')
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 0 .29rem;
  .zhuce {
    background: #de4b45;
    border: none;
  }
  .sub {
    border: .01rem solid #d9d9d9;
    margin: .28rem 0;
    .lv {
      background: #f66;
      border: none;
    }
  }
  .find1 {
    padding: .4rem 0;
    p {
      color: #666666;
      font-size: .14rem;
      text-align: center;
    }
  }
}
</style>
