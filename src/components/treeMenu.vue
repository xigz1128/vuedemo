<template>
  <li>
    <div v-bind:class="menu.isParent">
        <router-link :to="menu.url">{{menu.title}}</router-link>
    </div>
    <ul v-if="menu.childTrees">
        <tree-menu v-for="(childMenu,index) in menu.childTrees" :menu="childMenu" :key="index"></tree-menu>
    </ul>
  </li>
</template>

<script>
    export default {
        name: 'treeMenu',
        props: ['menu']
    }
</script>

<style>

</style>
