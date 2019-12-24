<template>
  <div class="slideLeft">
    <el-menu default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>线索管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">线索列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>贷款管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">贷前列表</el-menu-item>
          <el-menu-item index="2-2">贷中列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>贷后管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">还款计划</el-menu-item>
          <el-menu-item index="3-2">还款列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>车源管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/carDepotList">汽车源列表</el-menu-item>
          <el-menu-item index="/motorDepotList">摩托车源列表</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>基础配置</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="/brandSetting" >品牌设置</el-menu-item>
          <el-menu-item index="/carNameSetting">车辆名称设置</el-menu-item>
          <el-menu-item index="/carSizeSetting">车辆型号设置</el-menu-item>
          <el-menu-item index="/colorSetting">颜色设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">放款列表</el-menu-item>
          <el-menu-item index="6-2">收款列表</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>合同管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">合同列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>员工管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">员工列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>角色管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">角色列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>

</template>
<style>
  .slideLeft{width: 16%;
    left: 0;
    min-width: 220px;
    height: 100%;
    position: absolute;
    background: #000;}
  .slideLeft .el-menu{width: 100%;background: #000;}
  .slideLeft .el-menu-item.is-active{background: #30a23a;}
  .slideLeft .el-submenu .el-menu-item {
    height: 38px;
    line-height: 38px;}
  .slideLeft .el-submenu__title{color: #ffffff;}
  .slideLeft .el-menu-item-group__title{padding: 0;}
  .slideLeft .el-menu-item{color: #ffffff;font-size: 12px;margin-left: 14px;}
  .slideLeft .el-table tbody tr:hover>td {
    background-color:#ecf5ff!important
  }
</style>
<script>
  export default {

  }
</script>
