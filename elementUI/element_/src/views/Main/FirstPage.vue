<!--
 * @Author: your name
 * @Date: 2021-01-08 16:41:55
 * @LastEditTime: 2021-01-08 18:23:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element_\src\views\Main\FirstPage.vue
-->
<template>
  <div>
      <div class="wrapper">
          <p><i class="el-icon-eleme"></i>   首页</p>

           <div class="project_container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="我参与的" name="first">
                    <el-table
                    :data="tableData"
                    style="width: 100%"
                    max-height="250">
                    <el-table-column
                    fixed
                    prop="zip"
                    label="项目名称"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="zip"
                    label="类型"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="产品负责人"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="创建时间"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="描述"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="zip"
                    label="功能模块"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="120">
                    <template slot-scope="scope">
                        <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small">
                        移除
                        </el-button>
                    </template>
                    </el-table-column>
                </el-table>
                </el-tab-pane>
                <el-tab-pane label="我管理的" name="second"></el-tab-pane>
            </el-tabs>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            activeName: 'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
                }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
             }]
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            },
         deleteRow(index, rows) {
             rows.splice(index, 1);
            }
    },
}
</script>

<style lang="scss" scoped>
    .wrapper{
        padding: 50px 40px;
        .project_container{
            border-radius: 5px;
            background-color: #fff;
            height: 300px;
            margin-top: 20px;
            padding: 10px 30px;
        }
    }
</style>