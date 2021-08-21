<template>
    <div class="header">
        <div class="topback"></div>
        <div class = "content">
            <div class="title">
                <h2>“智慧”国医堂惠民信息系统</h2>
            </div>
            <div class = 'user'>
                <diV class = 'username' v-model="this.username">
                    欢迎您，{{username}}
                </diV>
                <div class = 'user_img'>
                    <img src="../assets/head.png">
                </div>
                <div class = 'changePW'>
                    修改密码
                </div>
                <div class = 'out'>
                    退出登录
                </div>
            </div>
        </div>
        <div class="topback"></div>
    </div>
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            username:'用户名'
        }
    }
}
</script>

<style>
.header {
    display: flex;
    flex-direction: column;
}
.topback {
    height: 10px;
    background-image: url(../assets/top.png);
    background-color: #5b4622;
    background-repeat: no-repeat;
}
.content{
    text-align: center;
    line-height: 50px;
    position: relative;
    background-color: #5B4622;
}
.title {
    float: left;
}
.title h2{
    margin: 1px;
    padding: 0 20px;
    color: white;
    font-weight:normal;
}
.user{
    float: right;
    padding:0;
    margin: auto;
    display: flex;
}
.user div {
    margin: 0 30px;
    color:white;
    height: 50px;
    position: relative;
    font-size: 12px;
}
.user_img img{
    position: absolute;
    top:12.5px;
}
</style>