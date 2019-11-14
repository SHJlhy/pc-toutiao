<template>
  <div class=login>
    <el-card style="width:480px; height:350px" >
      <div class='login-pic'><img src="../../assets/img/logo_index.png" alt=""></div>
      <el-form :model="loginForm" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item class="login-code" prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:280px;margin-right:40px" ></el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
              <!-- 勾选同意框 -->
           <el-checkbox v-model='loginForm.checked' style="margin-right:10px"></el-checkbox>
           <span>我已阅读并同意用户协议及条款</span>
        </el-form-item>
        <el-form-item class="login-button">
            <el-button type="primary" style='width:400px'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        checked: [
          { validator: function (rules, value, callback) {
            // rule 当前的规则，value 当前的值，在这里值true/false callback回调函数
            // 正确 校验成功 直接写回调函数  意思 校验成功请继续
            // 不正确 校验失败 提示错误信息 三元表达式
            value ? callback() : callback(new Error('协议未勾选'))
          } }
        ]
      }
    }
  }

}
</script>

<style lang="less" scoped>
// 使用less  在style标签中设置lang属性 scoped 各个组件中的style样式会不影响
.login {
  // background-image: url('../../assets/img/login_bg.jpg');
  background: url('../../assets/img/login_bg.jpg');
  background-size: cover;
  // 背景图片撑不开内容的高度  高度设置为 100vh 会在没有的内容的时候 把盒子撑开和屏幕高度一致
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-pic{
    margin-bottom: 10px;
    text-align: center;
    img {
      height: 40px;
    }
  }
  .login-code{
    display: flex;
    justify-content: space-between

  }
  .login-button{
    text-align: center;
  }
}
</style>
