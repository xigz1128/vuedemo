<template>
  <div>

    <h3 class="title">修改节气养生热点信息</h3>

      <div>
        <el-form  class="demo-ruleForm">
          <el-form-item
            class="lb"
            label="节气养生标题："
            :rules="[
            { required: true},
          ]">
          </el-form-item>
          <el-input class="ip" v-model="input" placeholder="请输入内容" autocomplete="off"></el-input>
        </el-form>
      </div>

    <div class="input1">
      <div>
        <el-form class="demo-ruleForm">
          <el-form-item
            class="lb1"
            label="节气养生来源："
            :rules="[
            { required: true},
          ]">
          </el-form-item>
          <el-input class="ip1" v-model="input1" placeholder="请输入内容" autocomplete="off"></el-input>
        </el-form>
      </div>
      <div class="input2">
        <el-form class="demo-ruleForm">
          <el-form-item
            class="lb2"
            label="节气养生作者：">
          </el-form-item>
          <el-input class="ip2" v-model="input2" placeholder="请输入内容" autocomplete="off"></el-input>
        </el-form>
      </div>
    </div>

    <div>
      <el-form  class="demo-ruleForm">
        <el-form-item
          class="lb3"
          label="节气养生介绍："
          :rules="[
            { required: true},
          ]">
        </el-form-item>
        <el-input class="ip3" type="textarea" :rows="2" placeholder="请输入正文" v-model="textarea">
        </el-input>
      </el-form>
    </div>

    <div class="input4">
      <el-form  class="demo-ruleForm">
        <el-form-item
          class="lb4"
          label="节气养生热点图片："
          :rules="[
            { required: true},
          ]">
        </el-form-item>

        <label class="" for="upfile" style="margin-left: -27px;">

          <img class="image" :src="imgurl" style = '' >
          <input type="file" id="upfile" style="display: none; " @change="getFileOthers"></input>

        </label>
      </el-form>
    </div>

    <div class="btn">
      <el-button @click="back" style="background-color: darkgray;color: black;width: 90px;height: 30px;padding-top: 8px;">返回</el-button>
    </div>
    <div class="btn1">
      <el-button @click="save" style="color: ghostwhite;width: 90px;height: 30px;padding-top: 8px;" type="danger">保存</el-button>
    </div>
    <div class="btn2">
      <el-button @click="public" style="color: ghostwhite;width: 90px;height: 30px;padding-top: 8px;" type="danger">发布</el-button>
    </div>

    <div>
      <! --富文本编辑器-->

    </div>

  </div>
</template>

<script>

    export default {
        name: "Edit",
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                textarea: '',
                src: '',
                imgurl: '/static/image2.jpg'
            }
        },
        methods: {
            back() {
                this.$router.push('/');
            },
            save() {
                this.$alert('操作成功', '提示', {
                    confirmButtonText: '确认',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: '保存成功！'
                        });
                        this.$router.push({path: '/'});
                    }
                });

            },
            public() {
                this.$confirm('此信息发布后将展示给用户查看,需要文责自负， 是否确认发布?', '信息发布', {
                    cancelButtonText: '关闭',
                    confirmButtonText: '确认',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '您已发布到小程序！'
                    });
                    this.$router.push('/');
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '您未发布成功！'
                    });
                });

            },
            getFileOthers(e) {//附件预览----合同及其他扫描件
                let _this = this
                var files = e.target.files[0];
                console.log(e.target.files[0]);
                if (!e || !window.FileReader) return  // 看支持不支持FileReader
                let reader = new FileReader()
                reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
                reader.onloadend = function () {
                    _this.imgurl = this.result;
                }
            }
        },


        //获取表格原有数据
        created() {
            this.input = this.$route.query.row.title;
            this.input1 = this.$route.query.row.source;
            this.input2 = this.$route.query.row.author;
        },
    }
</script>

<style scoped>

  .title {
    text-align: center;
    font-family: 华文仿宋;
    color: sienna;
  }

  .input1 {
    display: flex;
  }

  .lb,.lb1,.lb2,.lb3 {
    margin-top: 17px;
  }

  .ip {
    margin: 20px;
    width: 800px;
  }

  .ip1 {
    margin: 20px;
    width: 300px;
  }

  .input2 {
    margin-left: -50px;
  }

  .ip2 {
    margin: 20px;
    width: 300px;
  }

  .demo-ruleForm {
    margin-left: 100px;
    display: flex;
  }

  .ip3 {
    margin: 20px;
    width: 800px;
  }

  .input4 {
    margin-left: -31px;
  }

  .lb4 {
    width: 200px;
  }

  .btn {
    position: absolute;
    bottom: 5%;
    right: 35%;
  }

  .btn1 {
    position: absolute;
    bottom: 5%;
    right: 26%;
  }
  .btn2 {
    position: absolute;
    bottom: 5%;
    right: 17%;
  }

  .image {
    /*边框为虚线*/
    border: 1px dashed gainsboro;
    /*背景色透明*/
    background-color: rgba(0, 0, 0, 0);
    height: 120px;
    width: 120px;
    cursor:pointer;
  }
  .image:hover{
    border: 1px dashed dodgerblue;
  }


</style>
