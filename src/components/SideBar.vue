<template>
<div>
    <div class="sideBar">
        <ul v-for="menu in allMenus" v-bind:key="menu">
            <treeMenu v-bind:menu="menu"></treeMenu>
        </ul>
    </div>
    <div class="button"></div>
</div>
</template>

<script>
import treeMenu from "./treeMenu";
export default {
    data() {
        return {
            allMenus: [{
                "title":"预防保健",
                "url":"javascript:void(0)",
                "isParent":"true",
                "childTrees":[{
                    "title":"节气养生",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"自我保健",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"药膳食疗",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"中药常识",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"中医文化",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"儿童健康",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                }]
            },
            {
                "title":"信息管理",
                "url":"javascript:void(0)",
                "isParent":"true",
                "childTrees":[{
                    "title":"号源管理",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"服务团队",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"开展项目",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"功效特效",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                },
                {
                    "title":"信息维护",
                    "url":"javascript:void(0)",
                    "isParent":"false",
                    "childTrees":[]
                }]
            }]
        }
    },
    // 注册组件
    components: {
        treeMenu
    },
}
</script>
<style>
.sideBar{
    margin: 10px 20px 0px;
    width: 180px;
}
ul {
    padding:0;
    margin: 0;
}
li {
    font-size: 18px;
    list-style: none;
    text-align: center;
    margin: 1px auto;
}

.false{
    background-image: url(../assets/default.png);
    background-size:100% 100%;
    height: 30px;
    width: 160px;
    margin: 0 10px;
    line-height:30px;
}
.true{
    background-image: url(../assets/title.png);
    background-size:100% 100%;
    height: 40px;
    width: 180px;
    line-height:40px;
}
.button{
    padding: 0;
    margin: 0px 20px;
    background-image: url(../assets/bottom.png);
    background-size:100% 100%;
    height: 20px;
    width: 180px;
}
.false a,.true a{
    text-decoration:none;
    color: #1E2629;
}
.false a:hover{
    color: #FFFFFF;
}
</style>