<template>
 <el-container>
   <el-aside class='main' style='width: 220px;'>
     <div class=main-pic><img src="../../assets/img/logo_admin.png" alt=""></div>
     <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color=" #ffd04b">
       <el-menu-item>首页</el-menu-item>
       <el-submenu>
         <template slot="title">内容管理</template>
         <el-menu-item>发布文章</el-menu-item>
         <el-menu-item>内容列表</el-menu-item>
         <el-menu-item>评论列表</el-menu-item>
         <el-menu-item>素材管理</el-menu-item>
       </el-submenu>
       <el-submenu>
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
     <el-header class='home-header'>
       <el-row type='flex' justify="space-between">
         <el-col :span="6" class="left">
           <i class="el-icon-s-fold" style='font-size:24px'></i>
           <span>江苏传智播客教育科技股份有限公司</span>
         </el-col>
         <el-col :span="3" class='right'>
           <img src="../../assets/img/avatar.jpg" alt="">
           <el-dropdown trigger='click'>
             <span class="el-dropdown-link">B级人生<i class="el-icon-arrow-down el-icon--right"></i></span>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item>用户信息</el-dropdown-item>
               <el-dropdown-item>git地址</el-dropdown-item>
               <el-dropdown-item>退出</el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>
         </el-col>
       </el-row>
     </el-header>
     <el-main>主体</el-main>
   </el-container>
 </el-container>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>
<style lang="less" scoped>
.main{
  background-color:#323745 ;
  height:100vh;
  .main-pic{
    text-align: center;
    background-color: #2e2f32;

    img {
      height:35px
    }
  }
}

.home-header {
  margin-top: 10px;
  .left {
    display: flex;
    align-items: center;
    i {
      margin-right: 5px;
    }

  }
  .right{
    display: flex;
    align-items: center;
    img {
      border-radius: 50%
    }
    span {
      margin-left: 10px;
    }
  }
}

</style>
