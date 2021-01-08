<!--
 * @Descripttion: 
 * @version: 
 * @Author: helihui
 * @Date: 2021-01-08 16:07:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-08 16:40:42
-->
<template>
  <div>
      <el-container>
          <el-header>
              <router-link to="/main" tag="el-button" class="nav-btn" active-class="active">
                <span>首页</span>
              </router-link >
              <router-link to="/workbench" tag="el-button" class="nav-btn" active-class="active">
                <span>工作台</span>
              </router-link>
          </el-header>
      </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .el-header{
    background-color: rgb(38, 41, 54);
    color: #333;
    text-align: center;
    line-height: 60px;
    .nav-btn{
        margin-top: 10px;
        float: left;
        border-radius: 0%;
        border: 0px;
        background: transparent;
        color: #ffffff ;
        &.active{
           background: #1e54d5!important;
           color: #ffffff ;

        //    border-bottom: 2px solid #1e54d5!important
        }
    }
  }
</style>