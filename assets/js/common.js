var layer,laydate,form,laypage,table,upload,tree,element;

layui.config({
    debug:true
})

layui.use(['layer','laydate','form','laypage','table','upload','tree','element'],function () {
    layer = layui.layer,
    form = layui.from,
    laydate = layui.laydate,
    laypage = layui.laypage,
    table = layui.table,
    upload = layui.upload,
    tree = layui.tree,
    element = layui.element;
})


function alert(msg,icon,func) {
    layer.msg(msg)
}


function _ajaxPost(url,data,_func) {

}