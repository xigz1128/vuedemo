<template>

  <el-dialog
    title="查看详情"
    :visible.sync="dialogVisible"
    width="60%"
    height="100%"
    :before-close="handleClose"
  >

    <div>
      <label>热点标题：</label>
      <input type="text" name="title" style="width: 75%;height: 25px;background-color: gainsboro;border: none;">
    </div>

    <div style="margin-top: 20px">
      <label style="margin-left: 28px;border: none;">来源：</label>
      <input type="text" name="source" style="width: 26%;height: 25px;background-color: gainsboro;border: none;">
      <label style="margin-left: 15%;">作者：</label>
      <input type="text" name="author" style="width: 26%;height: 25px;background-color: gainsboro;border: none;">
    </div>

    <div style="margin-top: 20px">
      <label style="margin-left: 28px">正文：</label>
      <input type="text" name="content" style="width: 74%;height: 25px;">
    </div>

    <div style="margin-top: 20px">
      <label>数据状态：</label>
      <input type="text" name="source" style="width: 26%;height: 25px;background-color: gainsboro;border: none;">
      <label style="margin-left: 11%;">创建时间：</label>
      <input type="text" name="author" style="width: 26%;height: 25px;background-color: gainsboro;border: none;">
    </div>

    <div style="margin-top: 20px">
      <label>热点图片：</label>
      <img v-bind:src="asserts"/>
    </div>

    <span slot="footer" class="dialog-footer">
<!--      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      <el-button @click="dialogVisible = false" style="background-color: lightgrey;padding: 10px;">关闭</el-button>
      </span>
  </el-dialog>
</template>

<script>
    export default {
        name: "ViewDetails",
        data(){
            return{
                dialogVisible:false
            };
        },
        props:['value'],
        methods:{
        },

    };
</script>

<style scoped>

</style>
