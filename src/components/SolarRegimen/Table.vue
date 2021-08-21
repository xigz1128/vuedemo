<template>

  <div class="table">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">

      <el-table-column prop="number" label="序号"></el-table-column>

      <el-table-column prop="title" label="文章标题"></el-table-column>

      <el-table-column prop="image" label="热点图片"></el-table-column>

      <el-table-column prop="source" label="来源"></el-table-column>

      <el-table-column prop="author" label="作者"></el-table-column>

      <el-table-column prop="date" label="发布时间" width="200"></el-table-column>

      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="text"
            style="color: greenyellow"
            @click="handlePublish(scope.$index, scope.row)">发布</el-button>
          <el-button
            size="mini"
            type="text"
            style="color: red"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                tableData: [{
                    number: '1',
                    title: '1',
                    image: '',
                    source:'1',
                    author:'1',
                    date:'2021-08-16 18:33:05'
                }]
            }
        },
        methods: {

            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.$router.push({
                    path: '/Edit',
                    query: {
                        row: row
                    }
                })
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.$confirm('确认删除?', '删除节气养生信息', {
                    cancelButtonText: '关闭',
                    confirmButtonText: '确认',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '删除失败！'
                    });
                });
            },
            handlePublish(index, row) {
                console.log(index, row);
                this.$confirm('此信息发布后将展示给用户查看,需要文责自负， 是否确认发布?', '信息发布', {
                    cancelButtonText: '关闭',
                    confirmButtonText: '确认',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '您已发布到小程序!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '您未发布成功！'
                    });
                });
            }
        }
    }

</script>

<style scoped>

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .table{
    margin: 20px;
  }

</style>
