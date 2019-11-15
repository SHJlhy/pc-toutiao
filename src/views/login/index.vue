<template>
  <div class='main'>
    <el-card style="width:450px;height:320px" class='login'>
      <div class='login-pic'><img src="../../assets/img/logo_index.png" alt=""></div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginObj">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item class="login-code" prop="code">
          <el-input  v-model="loginForm.code"  placeholder="请输入验证码" style="width:250px;margin-right:40px"></el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked"></el-checkbox>
          <span style="margin-left:10px">我已阅读并同意用户协议及条款</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:400px" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line space-before-blocks
  data (){
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: ''
      },
      // 给data中表单的数据指定规则
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        checked: [
          { validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('未勾选'))
          }
          }
        ]

      }
    }
  },
  methods: {
    onLogin () {
      // 获取表单对象 对表单进行验证
      this.$refs.loginObj.validate(isOk => {
        if (isOk) {
          // 表单验证通过调用接口  验证是否正确
          this.$axios({
            url: '/authorizations',
            method: 'POST',
            data: this.loginForm
          }).then(res => {
            console.log(res)
            // 验证成功 存储token
            localStorage.setItem('token', res.data.data.token)
            // 跳转到主页
            this.$router.push('/')
          }).catch(res => {
            // 未验证成功
            this.$message({
              showClose: true,
              message: '手机号或验证码错误',
              type: 'error',
              duration: 1000
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  background: url('../../assets/img/login_bg.jpg');
  background-size: cover;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login{
    .login-pic{
      margin-bottom: 10px;
      text-align: center;
      img {
        height: 30px;
      }
    }
    .login-code{
      display: flex;
      justify-content: space-between
    }

  }
}
</style>
