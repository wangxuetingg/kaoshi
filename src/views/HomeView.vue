<template>
  <div class="home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(50, 64, 87)">
        <el-menu :default-openeds="['1', '3']">
          <!-- 首页 -->
          <el-menu-item class="item"  index="/">
            <i class="el-icon-cloudy"> </i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!--  -->
          <!-- 文章管理 -->
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>文章管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><i class="el-icon-remove-outline"></i>文章列表</el-menu-item>
              <el-menu-item index="2-2"><i class="el-icon-remove-outline"></i>多层级路由展示</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>     
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.el-aside{
  height:100vh;
}
.el-container{
  height: 100vh;
}
.el-aside .item {
  background: rgb(50, 64, 87);
  color: white;
}
.el-submenu{
   background: rgb(50, 64, 87);
}
.el-submenu{
  color:white;
}
</style>
