<template>

  <div>

    <ViewDetails ref="child"></ViewDetails>

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
              @click="handleSee(scope.$index, scope.row)">查看
            </el-button>
            <el-button
              size="mini"
              type="text"
              style="color: red"
              @click="handleShelf(scope.$index, scope.row)">紧急下架
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
  import ViewDetails from "./ViewDetails";
    export default {
        name: "Table",
        components:{
            ViewDetails
        },
        data(){
            return{
                tableData: [{
                    number: '1',
                    title: '1',
                    image: '',
                    source:'1',
                    author:'1',
                    date:'2021-08-16 18:33:05',
                }],
                show1:false
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
            handleSee(index, row) {
                console.log(index, row);
                this.$refs.child.dialogVisible = true;
            },
            handleShelf(index, row) {
                console.log(index, row);
                this.$confirm('紧急下架后，公众用户将不能查看，确定下架吗？', '下架', {
                    cancelButtonText: '关闭',
                    confirmButtonText: '确认',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '下架成功！'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '未下架成功！'
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
