;(()=>{
// 下拉框和高亮
// 先获取页面的url，确定现在是什么页面
let url=location.pathname;
let arr=url.split('/')
// 取最后一位
arr=arr[arr.length-1]
// 所有文章
if (arr=='posts'||arr=='post-add'||arr=='categories'){
     // 样式
    // $('#wenzang').removeClass('collapsed').attr('aria-expanded',true).siblings().addClass('in').attr('aria-expanded',true);
    $('#wenzang').siblings().addClass('in').attr('aria-expanded',true);
// 高亮
    $('#'+arr).css('color','#fff')
// 设置
}else if(arr=='nav-menus'||arr=='slides'||arr=='settings'){
    // 样式
    $('#set').removeClass('collapsed').attr('aria-expanded',true).siblings().addClass('in').attr('aria-expanded',true);
    // 高亮
    $('#'+arr).css('color','#fff')
}








})()