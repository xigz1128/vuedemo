<template>

  <div class="header">

    <div class="input">
      <el-input class="ip" v-model="input" placeholder="请输入内容"></el-input>
    </div>

    <div class="select">
      <div class="sl">
        <label>展示状态：</label>
        <el-select v-model="value" placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button class="bt1" style="background-color: sienna;color: white;">搜索</el-button>
    </div>

    <div class="button">
      <el-button @click="addSelfCare" class="bt2" style="background-color: tomato;color: white;">新增自我保健</el-button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                input: '',
                options: [{
                    value: '选项1',
                    label: '全部'
                }, {
                    value: '选项2',
                    label: '保存'
                }, {
                    value: '选项3',
                    label: '已上架'
                }, {
                    value: '选项4',
                    label: '已下架'
                }],
                value: '',
            }
        },
        methods:{
            addSelfCare(){
                this.$router.push('/AddSelfCare');
            }
        }
    }
</script>

<style scoped>

  .header {
    display: flex;
    height: 85px;
    margin-top: 0px;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .input {
    /*background-color: bisque;*/
  }

  .ip {
    margin: 20px;
    width: 400px;
  }

  .select {
    /*background-color: red;*/
    /*height: 85px;*/
    display: flex;
  }


  .sl {
    margin: 20px;
    width: 400px;
  }

  .bt1 {
    height: 40px;
    margin-top: 20px;
    margin-left: -100px;
    padding: 10px 17px;
  }

  .button {
    /*background-color: aqua;*/
    width: 100%;
  }

  .bt2 {
    padding: 10px;
    margin-top: 20px;
    margin-left: 240px;
  }

</style>
