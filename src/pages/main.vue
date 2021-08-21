<template>
  <div class="main">
      <Header />
      <div class="main_content">
        <side-bar />
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from '../components/header'
import SideBar from '../components/SideBar'

export default {
  name: 'main',
  data () {
    return {
      
    }
  },
  components:{
    Header,
    SideBar
  }
}
</script>

<style>
.main{
  display: flex;
  flex-direction: column;
}
.main_content{
  display: flex;
  background-color: #F7EFEB;
}
</style>
