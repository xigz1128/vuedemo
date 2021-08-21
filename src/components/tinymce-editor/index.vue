<template>
    <section id="tinymce-editor">tinymce-editor</section>
</template>
<script>
import './tinymce.min.js';
import './themes/silver/theme.min.js';
import './icons.min.js'
import './zh_CN.js';
import './plugins/image/plugin.min.js'

export default {
    mounted(){
        tinymce.init({
            //挂载对象
            selector:'#tinymce-editor',
            //语言
            language:'zh_CN',
            //菜单栏
            menubar:'',
            //工具栏
            toolbar:'undo image',
            plugins:'image',
        })
    }
}
</script>
<style>
@import url('./skins/ui/oxide/skin.min.css');
</style>