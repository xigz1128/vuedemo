<template>

    <div class="all">

      <Header></Header>

      <Table></Table>

    </div>

</template>


//节气养生界面
<script>

  import Header from "./Header";
  import Table from "./Table";

    export default {
        name: "SolarRegimen",
        components: {
            Table,
            Header
        },
    }

</script>

<style scoped>

  .all {
    /*background-color: mistyrose;*/
    width: 100%;
  }

</style>
