<template>
  <div class="all">

    <Header></Header>

    <Table></Table>




  </div>

</template>

<script>

    import Header from "./Header";
    import Table from "./Table";
    export default {
        name: "SelfCare",
        components:{
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
