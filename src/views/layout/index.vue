/* eslint-disable vue/no-parsing-error */
<template>
  <div class='login'>
      <el-container>
        <el-aside class='left' style="width:220px" >
          <div class="title"><img src="../../assets/img/logo_admin.png" alt=""></div>
          <!-- 让导航栏和路由对应 el-menu组件 有个选项router，用于控制路由模式，启用该模式会在你激活导航的时候
           以index作为path进行跳转-->
          <el-menu
             router
             text-color='#adafb5'
             background-color="#353b4e"
             active-text-color="#ffd04b">

            <el-menu-item index=''>首页</el-menu-item>
              <el-submenu index="1" >
                  <template slot="title">内容管理</template>
                  <el-menu-item index='/publish'>发布文章</el-menu-item>
                  <el-menu-item index='/article'>内容列表</el-menu-item>
                  <el-menu-item>评论列表</el-menu-item>
                  <el-menu-item>素材管理</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title">粉丝管理</template>
                  <el-menu-item>图文数据</el-menu-item>
                  <el-menu-item>粉丝概况</el-menu-item>
                  <el-menu-item>粉丝画像</el-menu-item>
                  <el-menu-item>粉丝列表</el-menu-item>
              </el-submenu>
                <el-menu-item>账户信息</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="margin-top:15px">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="6" class="menu-header" type="flex" align="middle" >
                      <i class="el-icon-s-fold" style="font-size:24px"></i>
                      <span>江苏传智播客教育科技股份有限公司</span>
                </el-col>
              <el-row :span="3"  type='flex' align="middle">
                <div class="right">
                  <img src="../../assets/img/avatar.jpg" alt=""  class="userPic">
                </div>
                <!-- <el-col> -->
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      我是B级人生
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>个人信息</el-dropdown-item>
                      <el-dropdown-item>git地址</el-dropdown-item>
                      <el-dropdown-item @click.native='onLoginOut'>退出</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-row>
              <!-- </el-col> -->
            </el-row>
          </el-header>
          <el-main>
            <!-- 二级路由容器 -->
            <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  methods: {
    onLoginOut () {
      this.$confirm('确定要退出吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //   点击确定 删除本地存储的token
        window.localStorage.removeItem('token')
        // eslint-disable-next-line no-unused-expressions
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 1000

        })
        // 跳转到登录页面
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出',
          duration: 500
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {

  .left {
    background-color: #323745;
    height:100vh;
    .title {
    padding:15px 0;
    text-align: center;
    background-color:  #2e2f32;
    width: 220px;
    img {
    height: 35px;
    }

  }
  }
  .menu-header{
    display: flex;
    align-items: center;
    i {
      margin-right: 15px;
    }

  }
  .userPic{
    margin-right: 10px;
    border-radius: 50%
  }
  }

</style>
